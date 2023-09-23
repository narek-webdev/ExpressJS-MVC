const { validationResult, matchedData } = require('express-validator')
class AuthController {
    register = (_, res) => {
        res.render('./auth/register')
    }

    registerAuth = async (req, res) => {
        const validation = validationResult(req)

        if (validation.isEmpty()) {
            const data = matchedData(req)

            console.log(data)
            return
        }

        res.status(500).send({
            type: 'error',
            value: validation
                .formatWith((error) => {
                    return {
                        message: error.msg,
                        field: error.path,
                    }
                })
                .array({ onlyFirstError: true }),
        })
    }

    login = (_, res) => {
        res.render('./auth/login')
    }
}

module.exports = new AuthController()
