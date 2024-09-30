node {
    stage('SCM') {
        checkout scm
    }
    def scannerHome = tool 'SonarScanner'
    withSonarQubeEnv() {
        sh "${scannerHome}/bin/sonar-scanner"
    }
}
