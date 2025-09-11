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


/**
 * 
 * All Routes for News
 * 
 */

routes.get('/news', (req,res) => {
    db.query("SELECT * FROM tbl_news", (error, result) => {
        response(200, result, "GET ALL DATA NEWS", res);
    })
})

routes.post('/news', (req, res) => {
    const {title, content, type} = req.body;

    
    const sql = `INSERT INTO tbl_news (title, content, news_type) VALUES (?,?,?)`
    const VALUES = [title, content, type]

    db.query(sql, VALUES, (err, result) => {
        response(200, result, "TESTING POST", res);
    })

})

/**
 * 
 * All Routes for Event
 * 
 * Event will get just upcoming event when the date are more than -7 day
 * 
 */

routes.get('/event', (req,res) => {
    db.query("SELECT * FROM tbl_event", (error, result) => {
        response(200, result, "GET ALL DATA NEWS", res);
    })
})

/**
 * 
 * All Rotues for Item
 * 
 */

routes.get('/item', (req,res) => {
    db.query("SELECT * FROM tbl_news", (error, result) => {
        response(200, result, "GET ALL DATA NEWS", res);
    })
})




module.exports = routes;