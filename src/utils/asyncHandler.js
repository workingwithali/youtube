const asyncHandler = (fn) => (req, res, next) => {
    console.log(`Request URL: ${req.originalUrl}`); // Log the request URL
    Promise.resolve(fn(req, res, next)).catch((error) => {
        console.error('Error:', error.message); // Log the error
        next(error); // Pass the error to the next middleware
    });
};

export default asyncHandler; 