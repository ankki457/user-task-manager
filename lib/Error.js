const Error = (err,req,res,next) => {
    const message = err.message || 'Internal Server Error';
    const status = 500;
    res.status(status).send({
        message
    });
};

module.exports = Error;