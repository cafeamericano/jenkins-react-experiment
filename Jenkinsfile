pipeline {
    agent any

    tools {nodejs "NodeJS 13.8"}

    stages {

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build' 
            }
        }

    }
}