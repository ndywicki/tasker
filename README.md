# tasker
This application is an simple user task management (CRUD).
The goal is to implementent the backend in multiple technology (Spring Boot and NodeJs).


## Projects structure

 - backend-spring: Spring boot java version  
 - backend-node: NodeJS backend version
 - front-angular: Angular 4 UI for all backends 

Each backend expose a REST API for authentification and task operations.

## Todo

- [x] Backend Spring - Initialize project (Spring Boot 1.5.4, Gradle 4)
- [x] Backend Spring - Add security server Oauth2 + Spring Security dependencies
- [x] Backend Spring - Configure authorization and 3-legged auth server (Java config)
- [x] Backend Spring - Add MySQL support
- [x] Backend Spring - Add liquibase (Oauth2 model, users and tasks)
- [x] Backend Spring - Create account / authenticate REST endpoints
- [ ] Backend Spring - Implement the task REST API
- [ ] Backend Spring - Add TU
- [ ] Backend Spring - Add Swagger documentation
- [x] Front - Intialize procject (SPA Angular cli)
- [ ] Front - Implement login / logout page
- [ ] Front - Implement the task page
- [ ] Front - Add pretty style
- [ ] Backend Node -  Initialize project
- [ ] Backend Node - Add MySQL Support
- [ ] Backend Node - Add security server Oauth2 implementation
- [ ] Backend Node - Implement the task REST API (Express module)
- [ ] ALL - Dockerize stack