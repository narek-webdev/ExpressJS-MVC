const { body } = require('express-validator')
const { SIGN_UP } = require('./errors')

module.exports = {
    signupValidation: () => {
        return [
            body('name')
                .trim()
                .notEmpty()
                .withMessage(SIGN_UP.name_reqired)
                .escape(),
            body('email')
                .trim()
                .notEmpty()
                .withMessage(SIGN_UP.email_reqired)
                .isEmail()
                .withMessage(SIGN_UP.email_valid),
            body('password')
                .trim()
                .notEmpty()
                .withMessage(SIGN_UP.password_reqired)
                .isLength({ min: 8 })
                .withMessage(SIGN_UP.password_length)
                .escape(),
            body('confirm')
                .trim()
                .notEmpty()
                .withMessage(SIGN_UP.confirm_password_reqired)
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
