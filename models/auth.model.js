const sql = require('../config/db.config')
const { hashCompare } = require('../helpers/function')

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

    login = (email, password) => {
        return new Promise((resolve, reject) => {
            sql.query(
                `SELECT id, password FROM users WHERE email=?`,
                [email],
                async (err, res) => {
                    if (err) return reject(err)

                    if (!res.length)
                        return resolve({
                            statusCode: 'error',
                        })

                    if (!(await hashCompare(password, res[0].password)))
                        return resolve({
                            statusCode: 'error',
                        })

                    return resolve({ statusCode: 'success', userId: res[0].id })
                }
            )
        })
    }
}

module.exports = new Auth()
