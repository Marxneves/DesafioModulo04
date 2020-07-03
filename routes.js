const express = require('express');
const routes = express.Router()

routes.get("/", function(req, res){
    res.render("index")
})

routes.get("/students", function(req, res){
    res.render("students")
})
routes.get("/teachers", function(req, res){
    res.render("teachers")
})

module.exports = routes;

