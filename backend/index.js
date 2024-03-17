"use strict"
/*---------------------------------------------------*/
/*               todoAPP                             */
/*-------------------------------------------------- */

require("express-async-errors")
require("dotenv").config()
const express = require("express")
const { mongooseConnection } = require("./startup/mongooseConnection")
const PORT = process.env?.PORT || 8000


const app = express()
app.use(require("./middlewares/errorHandler"))
mongooseConnection()

app.listen(PORT, () => console.log("Listenning http://127.0.0.1:" + PORT))