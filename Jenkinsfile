pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = "dpwlscho/my-node-app"
        DOCKER_TAG = "${BUILD_NUMBER}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh """
                    docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .
                    docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest
                """
            }
        }
        
        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh """
                        echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin
                        docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                        docker push ${DOCKER_IMAGE}:latest
                    """
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    def previousTag = sh(
                        script: """
                            docker ps -a --filter "name=app" --format "{{.Image}}" | cut -d: -f2 || echo "latest"
                        """,
                        returnStdout: true
                    ).trim()
                    
                    try {
                        sh """
                            docker stop app || true
                            docker rm app || true
                            docker run -d --name app -p 3000:3000 ${DOCKER_IMAGE}:${DOCKER_TAG}
                            
                            # 배포 후 헬스체크
                            sleep 10
                            curl -f http://localhost:3000/health || exit 1
                        """
                    } catch (Exception e) {
                        echo "배포 실패! 이전 버전(${previousTag})으로 롤백합니다..."
                        sh """
                            docker stop app || true
                            docker rm app || true
                            docker run -d --name app -p 3000:3000 ${DOCKER_IMAGE}:${previousTag}
                        """
                        currentBuild.result = 'FAILURE'
                        error("배포 실패로 인한 롤백 완료 (버전: ${previousTag})")
                    }
                }
            }
        }
    }
}
