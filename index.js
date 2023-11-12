const express = require('express')
const app = express()
const middleware = require('./middlaware')
// app.use(middleware)

const router = express.Router()
router.use(middleware)
app.get('/' , function (req, res) {
    res.send('this is home page')
})

router.get('/user', function (req, res) {
    res.send('this is user page')
})

router.get('/contact', function (req, res) {
    res.send('this is user page')
})
app.use('/', router)
app.listen(3030)