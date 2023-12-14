#!/bin/bash


#npm run build

echo "Creating temp dir on remote server (if needed)"
ssh -i ./secrets/keys/devops_key_1.pem admin@54.160.182.187 'mkdir -p /tmp/goals_fe'

echo "Removing older build from remote server's temp dir"
ssh -i ./secrets/keys/devops_key_1.pem admin@54.160.182.187 'rm -rf /tmp/goals_fe/'

echo "Copying build files to remote server's temp dir"
scp -r -i ./secrets/keys/devops_key_1.pem ./build/ admin@54.160.182.187:/tmp/goals_fe/

echo "Removing older build from remote server"
ssh -i ./secrets/keys/devops_key_1.pem admin@54.160.182.187 'rm -rf /home/admin/deployments/goals_app_frontend/GoalsAppFrontend/goal/build'

echo "Creating deployment dir"
ssh -i ./secrets/keys/devops_key_1.pem admin@54.160.182.187 'mkdir -p /home/admin/deployments/goals_app_frontend/GoalsAppFrontend/goal/build'

echo "Copying new build from temp dir to deployment dir"
ssh -i ./secrets/keys/devops_key_1.pem admin@54.160.182.187 'cp -r /tmp/goals_fe/* /home/admin/deployments/goals_app_frontend/GoalsAppFrontend/goal/build/'

echo "Done ! Please restart the server now"
