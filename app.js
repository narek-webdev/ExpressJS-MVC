const express = require('express')
const app = express()
const port = 2001
const session = require('express-session')
require('dotenv').config()

app.set('view engine', 'ejs')
app.use('/public', express.static('public'))
app.use(express.json())
app.use(
    session({
        secret: process.env.EXPRESS_SESSION,
        resave: false,
        saveUninitialized: true,
    })
)

require('./routes/auth.route')(app)
require('./routes/dashboard.route')(app)

app.get('*', (_, res) => {
    res.redirect('/login')
})

app.listen(port, () => {})
