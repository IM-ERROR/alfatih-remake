//IMPORT EXPRESS PACKAGE
const express = require('express')
const app = express()
const cors = require('cors')

//TRY TO GET DEFAULT SERVER PORT OR SET IT TO "8080"
const port = process.env.PORT || 8080
app.use(cors());

//SIMPLIFY ROUTES IN ROUTES FOLDER
const routes = require('./routes/routes.js');

//GET DEFAULT PAGE USING ROUTES
/**
 * News Routes
 */
app.get('/news', routes)
app.post('/news', routes)

/**
 * Event Routes
 */
app.get("/event", routes)
app.post("/event", routes)

/**
 * Item Routes
 */
app.get("/item", routes)
app.post("item", routes)


//LISTENING SERVER BY PORT
app.listen(port, function(err){
    if (err) {
        console.log("Something went wrong", err);
    }
    console.log("Server is running on port", port);
})