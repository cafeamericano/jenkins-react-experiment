pipeline {
    agent any

    tools {nodejs "NodeJS 13.8"}

    stages {
        stage('Build') {
            steps {
                sh 'npm run build' 
            }
        }
    }
}