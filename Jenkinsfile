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

    stage('Publish Coverage Report') {
        publishCoverage adapters: [jacocoAdapter('Frontend/coverage/**/*.xml')]
    }
}
