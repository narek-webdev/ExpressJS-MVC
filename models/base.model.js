const sql = require("../config/db.config");

class BaseModel {
  //Get All in table
  getAll(dbTable) {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM ${dbTable}`, (err, res) => {
        if (err) reject(err);

        return resolve(res);
      });
    });
  }

  //Show single record
  show(dbTable, id) {
    return new Promise((resolve, reject) => {
      sql.query(`SELECT * FROM ${dbTable} WHERE id=${id}`, (err, res) => {
        if (err) reject(err);

        return resolve(...res);
      });
    });
  }

  //Delete item in db
  delete(dbTable, id) {
    return new Promise((resolve, reject) => {
      sql.query(`DELETE FROM ${dbTable} WHERE id=${id}`, (err, res) => {
        if (err) reject(err);

        if (!res.affectedRows) return resolve({ isDeleted: false });

        return resolve({ isDeleted: true });
      });
    });
  }

  store(dbTable, data) {
    return new Promise((resolve, reject) => {
      let keys = Object.keys(data);
      keys = keys.join(",");

      let values = Object.values(data);
      values = `'${values.join("','")}'`;

      sql.query(
        `INSERT INTO ${dbTable} (${keys}) VALUES (${values})`,
        (err, res) => {
          if (err) reject(err);

          if (res.insertId) return resolve({ storeStatus: true });

          return resolve({ storeStatus: false });
        }
      );
    });
  }
}

module.exports = BaseModel;
