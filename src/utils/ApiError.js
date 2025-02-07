/**
 * Custom API Error class to standardize error responses.
 * @extends Error
 */
class ApiError extends Error {
    /**
     * Creates a new ApiError instance.
     * @param {number} statusCode - HTTP status code for the error.
     * @param {string} message - Error message.
     * @param {boolean} [isOperational=true] - Indicates if the error is operational (expected) or a programming error.
     * @param {string} [stack=''] - Error stack trace.
     */
    constructor(statusCode, message, isOperational = true, stack = '') {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError;