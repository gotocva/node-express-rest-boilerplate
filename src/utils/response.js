

export const globalResponseHandler = (req, res, next) => {
    // Create a custom sendResponse function to handle response formatting
    res.Response = function (statusCode,message, data) {
      const response = {
        status: true,
        message: message,
        status_code: statusCode,
        data: data,
      };
  
      return res.status(statusCode).json(response);
    };
  
    // Error handling middleware
    res.Error = function (statusCode, message) {
      const error = new Error(message);
      error.statusCode = statusCode;
      next(error);
    };
  
    next();
}