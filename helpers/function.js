const bcrypt = require('bcrypt')

module.exports = {
    hashText: async (text) => {
        try {
            return await bcrypt.hash(text, 10)
        } catch (error) {
            console.log(error)
        }
    },
}
