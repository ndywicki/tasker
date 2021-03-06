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
- [x] Backend Spring - Implement the task REST API
- [x] Backend Spring - Add TU
- [ ] Backend Spring - Add Swagger documentation
- [x] Front - Intialize procject (SPA Angular cli)
- [x] Front - Implement login / logout page
- [x] Front - Implement the task page
- [x] Front - Add pretty style
- [x] Front - Finish the task edit
- [ ] Front - Add properties porject for the backend API URL (currently under src\app\shared\auth\auth-oauth2.service.ts)
- [x] Backend Node -  Initialize project
- [x] Backend Node - Add MySQL Support
- [ ] Backend Node - Add security server Oauth2 implementation (used https://github.com/oauthjs/node-oauth2-server)
- [ ] Backend Node - Implement the task REST API (Express module)
- [ ] ALL - Dockerize stack

## Issues

- [x] CORS issue between front and back (http port)
- [ ] Bug first connection user principal not ready in Home ngOnInit (refresh needed).
		Need to add an login successful event