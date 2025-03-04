pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "dpwlscho/my-node-app"
        DOCKER_TAG = "${BUILD_NUMBER}"
        PREVIOUS_TAG = ""
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Get Previous Version') {
            steps {
                script {
                    def previousTag = sh(script: "docker images --format '{{.Tag}}' ${DOCKER_IMAGE} | sort -nr | sed -n '2p'", returnStdout: true).trim()
                    if (previousTag) {
                        PREVIOUS_TAG = previousTag
                        echo "Previous Docker Tag: ${PREVIOUS_TAG}"
                    } else {
                        echo "No previous tag found, skipping rollback."
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    try {
                        sh """
                            docker pull ${DOCKER_IMAGE}:latest || true
                            docker build --cache-from=${DOCKER_IMAGE}:latest -t ${DOCKER_IMAGE}:${DOCKER_TAG} .
                            docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest
                        """
                    } catch (Exception e) {
                        echo "Build failed! Rolling back..."
                        if (PREVIOUS_TAG) {
                            sh """
                                docker stop app || true
                                docker rm app || true
                                docker run -d --name app -p 3000:3000 ${DOCKER_IMAGE}:${PREVIOUS_TAG}
                            """
                        }
                        error("Build failed and rollback completed.")
                    }
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh """
                        echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin
                        docker push ${DOCKER_IMAGE}:${DOCKER_TAG} --quiet
                        docker push ${DOCKER_IMAGE}:latest --quiet
                    """
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    try {
                        // 1. 먼저 기존 컨테이너 정리
                        sh '''
                            docker stop app app_new || true
                            docker rm app app_new || true
                        '''
                        
                        // 2. 새 컨테이너 실행
                        sh "docker run -d --name app_new -p 3000:3000 ${DOCKER_IMAGE}:${DOCKER_TAG}"
                        
                        // 3. 새 컨테이너가 정상적으로 시작될 때까지 대기
                        sh 'sleep 5'
                        
                        // 4. 컨테이너 이름 변경
                        sh 'docker rename app_new app'
                        
                    } catch (Exception e) {
                        echo "Deployment failed! Rolling back..."
                        if (PREVIOUS_TAG) {
                            sh """
                                docker stop app_new || true
                                docker rm app_new || true
                                docker run -d --name app -p 3000:3000 ${DOCKER_IMAGE}:${PREVIOUS_TAG}
                            """
                        }
                        error("Deployment failed and rollback completed.")
                    }
                }
            }
        }
    }
}
