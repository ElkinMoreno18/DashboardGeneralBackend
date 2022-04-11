module.exports = app => {
    const tests = require("../controller/test.controller.js");
    var router = require("express").Router();

    // Crear un nuevo test
    router.post("/", tests.create);
    // Devolver todos los tests
    router.get("/", tests.findAll);
    // Devolver todos los tests publicados
    router.get("/published", tests.findAllPublished);
    // Devolver un test por representante
    router.get("/:representante", tests.findByRepresentative);
    // Devolver un test por coordinador
    router.get("/coordinator/:representante", tests.findAllForCoordinator);
    // Devolver un coordinador por nomebre y rol
    router.get("/:rol/:representante", tests.findByRol);
    // Devolver un test por id
    router.get("/:id", tests.findOne);
    // Actualizar un test por ida
    router.put("/:id", tests.update);
    // Actualizar un test por mes y representante
    router.put("/:months/:representante", tests.update);
    // Borrar un Test por id
    router.delete("/:id", tests.delete);
    // Borrar todos los tests
    router.delete("/", tests.deleteAll);
    app.use('/api/tests', router);
};