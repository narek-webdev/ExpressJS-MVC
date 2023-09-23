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
        cookie: { secure: true },
    })
)

require('./routes/auth.route')(app)

app.get('*', (_, res) => {
    res.status(404).render('404')
})

app.listen(port, () => {})
