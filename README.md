# Weather-Journal App Project

## Project Overview
This project creates an asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.

## Table of Contents
* Project Title
* Project Overview
* Table of contents
* [Procedures](#Procedures)

## Procedures
* Project Environment Setup
  1. Node and Express are installed on the local machine.
  2. The project file server.js requires express() and creates an instance of their app using express.
  3. The Express app instance is pointed to the project folder ('website') with .html, .css, and .js files.
  4. The ‘cors’ package is be installed in the project from the command line, required in the project file server.js, and the instance of the app is setup to use cors().
  5. The body-parser package is installed and included in the project.
  6. Local server is running and producing feedback to the Command Line through a working callback function.
  7. API credentials are created on OpenWeatherMap.com

* APIs and Routes
  1. A JavaScript Object named projectData is initiated near the top of file server.js to act as the app API endpoint.
  2. The personal API Key for OpenWeatherMap API is saved in a const variable named apiKey.
  3. The API Key variable is passed as a parameter to fetch().
  4. Data is successfully returned from the external API.
  5. A GET route is setup on the server side with the first argument ("/getData") as the route name, and the second argument a callback function to return the JS object created at the top of server code.
  6. An asynchronous function is setup on the client side to fetch the data from the app endpoint.
  7. add an entry to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function.
  8. The client side function takes two arguments, the URL to make a POST to, and an object holding the data to POST.
  9. The server side function creates a new entry in the apps endpoint (the named JS object) consisting of the data received from the client side POST.
  10. async calling by the use of promise chaining where the mix of API and user responses are passed, to POST endpoint on server side.
  11. The POST route in the server side is setup which will map the data sent via the API from the client side and save it in the projectData variable.

* Dynamic UI
  1. In the file app.js, the button element with the id of generate has an addEventListener() method called on it, with click as the first parameter, and async callback function as the second parameter.