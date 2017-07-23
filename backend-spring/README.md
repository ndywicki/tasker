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
    
