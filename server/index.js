//IMPORT EXPRESS PACKAGE
const express = require('express')
const app = express()

//TRY TO GET DEFAULT SERVER PORT OR SET IT TO "8080"
const port = process.env.PORT || 8080

//SIMPLIFY ROUTES IN ROUTES FOLDER
const routes = require('./routes/routes.js');

//GET DEFAULT PAGE USING ROUTES
app.get('/', routes)


//LISTENING SERVER BY PORT
app.listen(port, function(err){
    if (err) {
        console.log("Something went wrong", err);
    }
    console.log("Server is running on port", port);
})