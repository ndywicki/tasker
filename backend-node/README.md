# Tasker
This application implement the Spring backend takers stack.

  - Include the user authentication with OAuth2 server
  - And also an REST Api to managed the user tasks (CRUD)
  
## Running

Run the following command

    npm start

## Docker

You can run Docker image of MySQL to have a production setup on your local dev

    docker-compose src/main/docker/mysql.yml up -d
