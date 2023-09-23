module.exports = app => {
    const HomeController = require("../controllers/home.controller")
    const { body } = require('express-validator');

    //Get all values
    app.get("/", HomeController.index);

    //Create
    app.get('/create',  HomeController.create);

    //Store
    app.post('/store', HomeController.store);

    //Get values by id param
    app.get("/:id", HomeController.more);

    //Edit
    app.get("/edit/:id", HomeController.edit);

    //Update
    app.post("/update/:id", body('title').notEmpty(), HomeController.update);

    //Delete
    app.post("/delete/:id", HomeController.delete);
}