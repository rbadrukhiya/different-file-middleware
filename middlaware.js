module.exports = filter = (req, res, next) => {
    if (!req.query.age) {
        res.send('please enter age')
    }
    else if(req.query.age<18)
    {
            res.send('please enter age 18 up')
    }
    else {
        next();
    }
}

// module.exports = filter
