//CUSTOM RESPONSE HANDLER
/**
 * GET PARAMETER STATUS CODE FROM ROUTES
 * GET PARAMETER  DATA FROM ROUTES
 * GET PARAMETER MESSAGE FROM ROUTES
 * GET PARAMTER RESPONSE OBJECT FROM ROUTES
 * 
 * RETURN ALL RESPONSE TO JSON FORMAT WITH TIMESTAMP
 */
const response = (statusCode, data, message, res)=> {
    res.status(statusCode).json({
        data: data,
        message: message,
        info: {
            status: statusCode,
            timestamp: new Date().toISOString(),
        }
    })
}

module.exports = response;