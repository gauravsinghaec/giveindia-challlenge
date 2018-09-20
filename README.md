# Give India Backend Challenge
The repo contains resourses related to hands-on assignment by Give India.

## Table of Contents
* [Getting Started](#getting-started)
* [Project URL](#project-url)
* [Folder Structure](#folder-structure)
* [Launch the app locally](#launch-the-app-locally)
* [Author](#author)
* [Acknowledgments](#acknowledgments)

## Getting Started
* Problem Statement
1. Endpoint 1 (/process/*)
This endpoint must accept HTTP request sent using any of the methods (GET, POST,
PUT, DELETE) and respond back with a JSON describing the request. 
```s
To be specific the response JSON must contain the following fields
{
 time: //time when the request was received,
 method: //HTTP method used for making the request,
 headers: //HTTP headers in the request,
 path: //request path (will start with /process),
 query: //the parsed query string as key-values, if any
 body: //request body, if any
 duration: //time taken to process the request
}
You are to wait randomly between 15 to 30 seconds before sending back a response
to any request. The random response time you choose is what needs to be
populated in the duration field.
```
Follow the below project URL to know more about the app.

## Project URL
[View Project](https://gks-giveindia.herokuapp.com)

## Folder Structure
Your project folder should look like this:
```sh
├── README.md # This file.
├── bin       # Application code listening for HTTP requests
├── config    # App's configuration, e.g DB connection URL
├── public    # Project related assets;
├── db        # MongoDB Driver code to be used in application
├── models    # MongoDB collections schema
├── views     # Apllication related htmls files related to application routes
├── controllers # Methods to interact with DB and reflects the data on views
├── routes    # API endpoints e.g /login, /users etc
├── package.json  # project dependencies
├── Procfile  # files needed to deploy app on Heroku
└── app.js    # Driver code
```

## Launch the app locally
* Step1 -- Fork the project repo and clone it in your local directory

* Step2 -- Download and install Node(latest stable version) (npm comes along with node)<br />
[Node](https://nodejs.org/en/) -- (e.g v 8.11 )
<br />[What is npm?](https://www.npmjs.com/)
```
verify with below command
>>>node -v
>>>npm -v
Go for stable version of node i.e 8.11.
```

* Make sure you run all your commands from inside cloned folder
* Step3 -- Install the npm modules from the package.json
```
>>> npm install
this command installs all the node related packages required to run the app locally in
/node_modules folder.
```

* Step4 -- Launch the application using below command:
```
Below command will start the chat application
>>> npm start
The application will be running at http://localhost:3000
if not then please check if you have set any default PORT in your environment/path variable
i.e http://localhost:<your_env_port_variable>
```

## Authors
* **Gaurav Singh**

## Acknowledgments
Thanks to Give India for the assignment
