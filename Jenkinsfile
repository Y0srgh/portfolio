pipeline {
    agent any

    stages {
        stage('SCM') {
            steps {
                checkout scm
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'SonarScanner'
                    withSonarQubeEnv() {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Navigate to the Frontend directory and install dependencies
                    dir('Frontend') {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Run Tests with Coverage') {
            steps {
                script {
                    // Run tests with coverage in the Frontend directory
                    dir('Frontend') {
                        sh 'npm test -- --coverage'
                    }
                }
            }
        }

        stage('Publish Coverage Report') {
            steps {
                script {
                    // Assuming the coverage report is generated in the 'Frontend/coverage' directory
                    // You may need to adjust the path according to where Jest outputs the coverage files
                    publishCoverage adapters: [jacocoAdapter('Frontend/coverage/**/*.xml')] // Adjust the pattern if needed
                }
            }
        }
    }

    post {
        always {
            // Archive coverage report and other artifacts for later review
            archiveArtifacts artifacts: 'Frontend/coverage/**/*', allowEmptyArchive: true
        }
    }
}
