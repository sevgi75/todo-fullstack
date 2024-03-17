"use strict"
/*---------------------------------------------------*/
/*               todoAPP--CUSTOM ERROR               */
/*-------------------------------------------------- */

class CustomError extends Error {
    name="customError"
    constructor(message, statusCode=500) {
        super(message)
    }
}

module.exports={CustomError}