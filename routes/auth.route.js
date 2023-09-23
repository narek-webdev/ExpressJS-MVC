module.exports = (app) => {
    const AuthController = require('../controllers/auth.controller')

    app.get('/register', AuthController.register)
    app.post('/register', AuthController.registerAuth)

    app.get('/login', AuthController.login)
}
