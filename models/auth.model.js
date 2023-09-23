const sql = require('../config/db.config')

class Auth {
    insert(name, email, password) {
        return new Promise((resolve, reject) => {
            sql.query(
                `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`,
                (err, res) => {
                    if (err) return reject(err)

                    if (!res.insertId) return resolve({ statusCode: 'error' })

                    return resolve({ statusCode: 'success' })
                }
            )
        })
    }
}

module.exports = new Auth()
