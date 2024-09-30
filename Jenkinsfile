pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Y0srgh/portfolio.git'
            }
        }
        stage('Build Docker Images') {
            steps {
                script {
                    docker.build('portfolio-frontend', './frontend')
                    docker.build('portfolio-backend', './backend')
                }
            }
        }

        stage('Static Code Analysis') {
            steps {
                script {
                    withSonarQubeEnv('SonarQube') {
                        sh 'sonar-scanner'
                    }
                }
            }
        }
    /*stage('Security Scans') {
      steps {
        sh 'dependency-check.sh --project MERN-Portfolio --scan ./backend'
        sh 'trivy image mern-frontend:latest'
        sh 'trivy image mern-backend:latest'
      }
    }
    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f k8s/deployment.yaml'
      }
    }*/
    }
}
