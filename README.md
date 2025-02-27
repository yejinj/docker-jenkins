# CI/CD Pipeline Project
Node.js, Jenkins와 Docker를 활용한 Node.js 애플리케이션의 CI/CD 파이프라인 구축 프로젝트입니다. <br>
GitHub 코드 변경 후 업로드 시 Jenkins를 통한 Docker 이미지 빌드 자동화 및 저장소 업로드 자동화 파이프라인이 작동합니다.

-----
## 시스템 구성도
[GitHub Repo]: 소스 코드 → [Jenkins Pipeline]: Jenkinsfile 실행 → [Docker Image]: Dockerfile 빌드 → [Docker Hub]: 이미지 저장

-----
## 사용 기술
### 인프라
- NCP Compute Server
  - Ubuntu 20.04 서버
  - ACG (방화벽) 설정
  - 공인 IP

### CI/CD
- Jenkins <br>
- Docker <br>
- GitHub <br>
- Docker Hub <br>

### 애플리케이션
- Node.js <br>
- Express <br>
- MongoDB <br>

------
## 자동화 트리거
GitHub Webhook 설정
   - Payload URL: `http://<Jenkins-IP>:8080/github-webhook/`
   - Content type: application/json
   - Payload: push 이벤트 발생 시 전송되는 커밋 정보, 변경 파일 등을 포함한 JSON 데이터
   - Events: Just the push event
<<<<<<< HEAD

## 포트 정보
- Jenkins: 8080
- Node.js 애플리케이션: 3000
- MongoDB: 27017
# Testing Main Branch Pipeline
=======
>>>>>>> 26f2e912ff485aabd26133e115e2e46eca223436
# Testing Repository Name Change
# Testing New GitHub Token
# Testing New GitHub Token
# Testing New Develop Branch
# Testing new deployment Wed 26 Feb 2025 04:57:21 PM KST
# Testing new deployment Wed 26 Feb 2025 04:57:47 PM KST
# Testing build without health check Wed 26 Feb 2025 06:43:56 PM KST
# Testing build with branch-specific tags Wed 26 Feb 2025 06:48:31 PM KST
# Testing build with previous working version Thu 27 Feb 2025 09:55:57 AM KST
# Testing build without health check Thu 27 Feb 2025 09:58:56 AM KST
# Testing simplified deployment without health check Thu 27 Feb 2025 10:02:37 AM KST
# Testing build with port mapping Thu 27 Feb 2025 10:05:03 AM KST
