//ambient variables
const {API_PORT, APP_NAME}= process.env; //importing constants
const api_package= require("./package.json");
//initialising express to work
const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json());





//bottom part of the app
app.listen(API_PORT||3000, () => {
			console.log(`Starting up server ${APP_NAME}...`)
			console.log(`starting up dependencies:`,api_package.dependencies)
      console.log(`listening on port ${API_PORT}`)
		});