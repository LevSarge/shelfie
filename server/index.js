require('dotenv').config()
const express = require('express')
const controller = require('./controller')

const port = 3000

app.listen(port, function () {
    console.log("Server is running on "+ port +" port");
  });