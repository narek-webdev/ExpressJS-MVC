const AuthController = require('../controllers/auth.controller')
const { signupValidation, loginValidation } = require('../helpers/validations')

module.exports = (app) => {
    app.get('/register', AuthController.register).post(
        '/register',
        signupValidation(),
        AuthController.registerAuth
    )

    app.get('/login', AuthController.login).post(
        '/login',
        loginValidation(),
        AuthController.loginAuth
    )
}
