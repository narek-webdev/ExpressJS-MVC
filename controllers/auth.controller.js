const { validationResult, matchedData } = require('express-validator')
const Auth = require('../models/auth.model')
const { hashText } = require('../helpers/function')
class AuthController {
    register = (_, res) => {
        res.render('./auth/register')
    }

    registerAuth = async (req, res) => {
        try {
            const validation = validationResult(req)

            if (validation.isEmpty()) {
                const data = matchedData(req)

                await Auth.insert(
                    data.name,
                    data.email,
                    await hashText(data.password)
                )

                res.send({
                    type: 'success',
                })
            }

            res.send({
                type: 'error',
                error: validation
                    .formatWith((error) => {
                        return {
                            message: error.msg,
                            field: error.path,
                        }
                    })
                    .array({ onlyFirstError: true }),
            })
        } catch (err) {
            res.send({
                type: 'error',
                error: {
                    message: err.sqlMessage,
                },
            })
        }
    }

    login = (_, res) => {
        res.render('./auth/login')
    }
}

module.exports = new AuthController()
