# Tasker
This application implement the Spring backend takers stack.

  - Will be include the user authentication with OAuth2 server
  - And also an REST Api to managed the user tasks (CRUD)

## Running

Run the following command

    ./gradlew

By default use the `dev` profile, to enable `prod` profile run

    ./gradlew -Pprod
     

## Testing

To launch your application's tests, run:

    ./gradlew test

## Docker

You can run Docker image of MySQL to have a production setup on your local dev

    docker-compose src/main/docker/mysql.yml up -d
    
## REST api call testing
You can use cURL following commands for testing REST endpoints

Get Oauth 2.0 token for admin user

    curl "http://localhost:8080/oauth/token" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json" --data "username=admin&password=admin&grant_type=password&scope=read%20write&client_secret=tasker-secret-token&client_id=taskerapp"

