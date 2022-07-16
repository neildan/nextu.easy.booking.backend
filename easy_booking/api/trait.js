/**
 * Success Response
 * @param Object data
 * @param String msj
 */
const success = (data = null, msj = 'ok', code = 200) => {
    return {
        success: true,
        msj: msj,
        data: data,
        code: code
    }
}

/**
 * Error Response
 * @param Object data
 * @param String msj
 */
const error = (data = null, msj = 'error', code = 400) => {
    return {
        success: false,
        msj: msj,
        data: data,
        code: code
    }
}

module.exports = {
    success: success,
    error: error
}