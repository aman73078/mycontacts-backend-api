const constants = require("../constant");

const errorHandler = (err, req, resp, next) => {
    const statusCode = resp.statusCode ? resp.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            resp.json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.UNAUTHORIZED:
            resp.json({
                title: "UNAUTHORIZED",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.FORBIDDEN:
            resp.json({
                title: "FORBIDDEN",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.NOT_FOUND:
            resp.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.SERVER_ERROR:
            resp.json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        default:
            console.log("No Error, All good !",statusCode);
            break;
    }
};

module.exports = errorHandler;
