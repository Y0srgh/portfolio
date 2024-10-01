node {
    stage('SCM') {
        checkout scm
    }
    stage('SonarQube Analysis') {
        def scannerHome = tool 'SonarScanner'
        withSonarQubeEnv() {
            sh "${scannerHome}/bin/sonar-scanner"
        }
    }


        stage('Run Tests with Coverage') {
            steps {
                script {
                    // Run tests with coverage in the Frontend directory
                    dir('Frontend') {
                        sh 'npm test --coverage'
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
