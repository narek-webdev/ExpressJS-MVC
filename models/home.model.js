const sql = require("../config/db.config");
const BaseModel = require("./base.model");

class Home extends BaseModel {
  update(id, title) {
    return new Promise((resolve, reject) => {
      sql.query(
        `UPDATE items SET title='${title}' WHERE id='${id}'`,
        (err, res) => {
          if (err) reject(err);

          if (!res.affectedRows) return resolve({ statusCode: "fail" });

          return resolve({ statusCode: "success" });
        }
      );
    });
  }
}

const Home = new Home();

module.exports = Home;
