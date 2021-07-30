# Welcome To Baraka Backend Challenge


## (A) Auto Installation Using Docker.
1- Install ```docker``` and ```docker-compose``` depends on your OS,  for docker check [here](https://docs.docker.com/get-docker/), and for docker-compose [here](https://docs.docker.com/compose/install/)

2- Extract or clone project and open bash inside base directory.

3- Execute ```sudo docker build -t baraka-img . && sudo docker run -p 3000:3000 -it baraka-img```

4- Check API doc below, section(D).



## (B) Manual Installation.

> Make sure port 3000 free on your host.



1- Install and configure Node.js engine version 12.16.1 or higher, see [download page](https://nodejs.org/en/download/).

2- Execute ```$ npm install -g @nestjs/cli``` to install nest CLI

3- Extract or clone project and open bash inside base directory

4- Execute ```$ npm install && npm run build && npm run start``` to install base packages and build project.

5- Execute ```npm run test:e2e``` inside ProjectDir to run end to end test cases.

6- Double check .env file for api key and base url for 3rd party url if needed

7- Check API doc below, section(D).

***

## (C) Assumption for solution
using Rxjs function specific ```zip``` to combine After all observables emit, and emit values as an array.

>Another Solution can use ```Promise.all([request_1, request_2])``` to take advantage of parallel execution for more fast execution time.


***

## (D) API Docs:-

Method: GET 

Base URL: http://localhost:3000

API endpoint: /omdb 

Query params: keyword={{MOVIE_NAME}}

CURL:  ```curl http://localhost:3000/omdb?keyword=matrix```

***
## (E) Question
A: The time you spent on the case study -> less than ~4 Hours for read requirement, estimate solution, initialize project, develop and test with docker integration 

B: What would you change in your submission to make it production ready? --> Write unit test for service and controller, make more validation on API, handle some edge cases if result less than 10 record for first page and other 3rd party limitations, add Interceptor for standard response json for all api like 
```{status:"OK",  message:"Success",  result: <any>}```, Add API limiter/security . 

C: What would you do differently if you had more time? --> add metrics to calculate performance for Promise.all(), zip, merge solution and decide based on need
