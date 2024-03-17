"use strict"
/*---------------------------------------------------*/
/*               todoAPP--ERRORHANDLER               */
/*-------------------------------------------------- */

module.exports = (err, req, res, next) => {

    let statusCode = err.statusCode || res.statusCode || 500
    res.status(statusCode).send({
        isError: true,
        message: err.message,
        body: req.body,
    })
}