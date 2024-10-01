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

    stage('Frontend') {
        dir('Frontend') {
            sh 'npm install'
        }
    }

    stage('Run Tests with Coverage') {
        dir('Frontend') {
            sh 'npm test --coverage'
        }
    }

    stage('Check Coverage Files') {
        script {
            dir('Frontend/coverage') {
                sh 'ls -al'
            }
        }
    }

    stage('Publish Coverage Report') {
        publishCoverage adapters: [genericAdapter('Frontend/coverage/lcov.info')]
    }
}
