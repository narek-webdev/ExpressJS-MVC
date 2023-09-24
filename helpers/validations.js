const { body } = require('express-validator')
const { AUTH } = require('./errors')

module.exports = {
    loginValidation: () => {
        return [
            body('email')
                .trim()
                .notEmpty()
                .withMessage(AUTH.email_reqired)
                .isEmail()
                .withMessage(AUTH.email_valid),
            body('password')
                .trim()
                .notEmpty()
                .withMessage(AUTH.password_reqired),
        ]
    },
    signupValidation: () => {
        return [
            body('name')
                .trim()
                .notEmpty()
                .withMessage(AUTH.name_reqired)
                .escape(),
            body('email')
                .trim()
                .notEmpty()
                .withMessage(AUTH.email_reqired)
                .isEmail()
                .withMessage(AUTH.email_valid),
            body('password')
                .trim()
                .notEmpty()
                .withMessage(AUTH.password_reqired)
                .isLength({ min: 8 })
                .withMessage(AUTH.password_length)
                .escape(),
            body('confirm')
                .trim()
                .notEmpty()
                .withMessage(AUTH.confirm_password_reqired)
                .escape()
                .custom((value, { req }) => {
                    if (value !== req.body.password) {
                        throw new Error('Confirm password must be the same')
                    }
                    return true
                }),
        ]
    },
}
