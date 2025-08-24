const logger = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)
    next() //Must always terminate or pass on to next with middleware - next goes to the get function
}

module.exports = logger