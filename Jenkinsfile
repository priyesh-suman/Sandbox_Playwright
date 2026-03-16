pipeline {
    agent any

    options {
        buildDiscarder(logRotator(numToKeepStr: '20'))
        disableConcurrentBuilds()
        timestamps()
    }

    stages {

        stage('Prepare Workspace') {
            steps {
                script {
                    echo "Preparing workspace folders..."
                    bat 'if not exist allure-results mkdir allure-results'
                    bat 'if not exist allure-history mkdir allure-history'
                }
            }
        }

        stage('Restore Allure History') {
            steps {
                script {
                    if (fileExists('allure-history')) {
                        echo "Restoring previous Allure history..."
                        bat 'xcopy /E /I /Y allure-history\\* allure-results\\history\\'
                    } else {
                        echo "No previous history found."
                    }
                }
            }
        }

        stage('Start Docker Services') {
            steps {
                script {
                    echo "Starting Docker Compose services..."
                    bat 'docker compose down || echo "No containers to stop"'
                    bat 'docker compose up -d --build'
                }
            }
        }

        stage('Run Tests Inside Docker') {
            steps {
                script {
                    echo "Running Playwright tests inside Docker container..."
                    bat 'docker compose exec playwright npx playwright test'
                }
            }
        }

        stage('Copy Allure Results From Container') {
            steps {
                script {
                    echo "Copying allure-results from Docker container to Jenkins workspace..."
                    bat 'docker cp $(docker compose ps -q playwright):/app/allure-results .'
                }
            }
        }

        stage('Generate Allure Report') {
            steps {
                allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            }
        }

        stage('Save Allure History') {
            steps {
                script {
                    echo "Saving new Allure history..."
                    bat 'xcopy /E /I /Y allure-report\\history\\* allure-history\\'
                }
            }
        }
    }

    post {
        always {
            echo "Cleaning up Docker containers..."
            bat 'docker compose down'

            echo "Archiving artifacts..."
            archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'allure-history/**', allowEmptyArchive: true
        }
    }
}
