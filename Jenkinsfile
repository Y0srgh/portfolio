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
                    dir('Frontend') {
                        sh 'npm test --coverage'
                    }
                }
            }
        }

        stage('Publish Coverage Report') {
            steps {
                script {
                    publishCoverage adapters: [jacocoAdapter('Frontend/coverage/**/*.xml')] 
                }
            }
        }

}
