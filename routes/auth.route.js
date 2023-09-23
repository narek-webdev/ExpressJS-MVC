const AuthController = require('../controllers/auth.controller')
const { signupValidation } = require('../helpers/validations')

module.exports = (app) => {
    app.get('/register', AuthController.register).post(
        '/register',
        signupValidation(),
        AuthController.registerAuth
    )

    app.get('/login', AuthController.login)
}
