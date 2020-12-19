properties([pipelineTriggers([githubPush()])])

pipeline {
    environment { 
        registry = "mrpipikado/gt_front" 
        registryCredential = 'docker' 
        dockerImage = '' 
    }
   agent {
     node {
        label 'slave'
     }
   }

   stages {  
      stage('Clone'){
          steps{  
              git branch: 'main',
                credentialsId: 'GitHub',
                url: 'git@github.com:Yuvchenko-Kostiantyn/GoalTrackerFE.git'
          }
      }
      stage('build docker image') {
          steps {
          script { 
                    dockerImage = docker.build registry + ":latest" 
                }
          }
      }
      stage('Deploy image') { 
            steps { 
                script { 
                    docker.withRegistry( '', registryCredential ) { 
                        dockerImage.push() 
                    }
                } 
            }
      }
      stage ("triger deploy job") {		
            steps {
                build 'deploy on stage'	
            }
        } 
   }
}
