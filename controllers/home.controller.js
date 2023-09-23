const Home = require("../models/home.model");
const { validationResult } = require("express-validator");

class HomeController {
  constructor() {
    this.table = "items";
  }

  async index(_, res) {
    try {
      const result = await Home.getAll(this.table);

      res.render("home", { data: result, statusCode: true });
    } catch (err) {
      res.render("home", { statusCode: false });
    }
  }

  async more(req, res) {
    try {
      const { id } = req.params;

      if (isNaN(+id)) return res.redirect("/");

      const result = await Home.show(this.table, id);

      if (!result) return res.render("show", { have: false, id });

      res.render("show", { data: result, have: true });
    } catch (err) {
      res.redirect("/");
    }
  }

  async edit(req, res) {
    try {
      const result = await Home.show(this.table, req.params.id);

      if (!result) res.render("edit", { have: false });

      res.render("edit", { have: true, data: result });
    } catch (err) {
      console.log(err);
    }
  }

  async update(req, res) {
    const id = req.params.id;
    const { title } = req.body;

    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) return res.send({ errors: errors.array() });

      const result = await Home.update(id, title);
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

  async delete(req, res) {
    try {
      const result = await Home.delete(this.table, req.params.id);

      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

  create(_, res) {
    res.render("create");
  }

  async store(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) return res.send({ errors: errors.array() });

      const result = await Home.store(this.table, req.body);

      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new HomeController();
