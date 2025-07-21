//GET EXPRESS PACKAGE
const express = require('express')

//USING ONLY ROUTES METHOD FROM EXPRESS
const routes = express.Router()

//ADDING MORE MIDDLEWARES FOR PARSING JSON AND CORS
const bodyParser = require('body-parser')
const cors = require('cors')

//CUSTOM RESPONSE HANDLER
const response = require("../response/response.js")

//IMPORT DATABASE CONNECTION
const db = require("../database/database.js")


//USE MIDDLEWARES
routes.use(bodyParser.json())
routes.use(cors())



//TESTING ON DEFAULT PAGE
routes.get('/', (req, res) => {
    //RETURNING RESPONSE FROM TABLE ADIDAS
    db.query("SELECT * FROM adidas", (err, result) => {
        //IF ERROR OCCURS, RETURN 500 INTERNAL SERVER ERROR
        if (err) {
            return response(500, null, "Internal Server Error", res);
        }
        //IF NO DATA FOUND, RETURN 404 NOT FOUND
        if (result.length === 0) {
            return response(404, null, "Data Not Found", res);
        }
        //IF SUCCESS, RETURN 200 OK WITH DATA
        return response(200, result, "GET ALL ADIDAS SHOES", res);
    })

})

module.exports = routes;