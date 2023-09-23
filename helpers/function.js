const bcrypt = require('bcrypt')

module.exports = {
    hashText: async (text) => {
        try {
            return await bcrypt.hash(text, +process.env.BCRYPT_SALT)
        } catch (error) {
            console.log(error)
        }
    },
}
