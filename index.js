//ambient variables
const {API_PORT, APP_NAME}= process.env; //importing constants
const api_package= require("./package.json");
//initialising express to work
const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json());
//express auth  
const  {ExpressAuth}  = require("@auth/express")
const {GitHub} = require("@auth/express/providers/github")
app.set('trust proxy', true)
app.use("/auth/*", ExpressAuth({ providers: [ GitHub ] }))
app.use(authSession)
app.get("/", (req, res) => {
  const { session } = res.locals
  res.render("index", { user: session?.user })
})

//bottom part of the app
app.listen(API_PORT||3000, () => {
			console.log(`Starting up server ${APP_NAME}...`)
			console.log(`starting up dependencies:`,api_package.dependencies)
      console.log(`listening on port ${API_PORT}`)
			console.log(app)
		});