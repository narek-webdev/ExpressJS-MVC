const sql = require("../config/db.config");

// constructor
class Blog {
  constructor() {
    this.table = "items";
  }

  getAll() {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM ${this.table}`;

      sql.query(query, (err, res) => {
        if (err) reject(err);

        return resolve(res);
      });
    });
  }
}

const blog = new Blog();

module.exports = blog;
