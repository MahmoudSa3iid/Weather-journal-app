// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require ('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require ('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;

// sign up the server
const server = app.listen(port, listening);
function listening(){
    console.log("Server is running"); 
    console.log(`App is hosting at http://localhost:${port}`);
};

/* 
 A GET route setup on the server side with the first argument as a string naming the route,
 and the second argument a callback function to return the JS object created at the top of server code.
*/
app.get("/getData", (req, res) => {
    res.send(projectData);
})

/* 
 A POST route setup on the server side with the first argument as a string naming the route,
 and the second argument a callback function to add an entry to the project endpoint created at server code.
*/
app.post("/saveData", (req, res) => {
    projectData = req.body;
    res.end();
})