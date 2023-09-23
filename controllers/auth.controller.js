class AuthController {
    register(_, res) {
        res.render('./auth/register')
    }

    registerAuth(req, res) {
        console.log(req.body)
    }

    login(_, res) {
        res.render('./auth/login')
    }
}

module.exports = new AuthController()
