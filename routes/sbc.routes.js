module.exports = app => {
    const tests = require("../controller/sbc.controller.js");
    var router = require("express").Router();

    router.get("/kpi/claroDPBX", tests.kpisClaroPBX);
    // Devolver todos los tests publicados
    app.use('/api/sbc', router);
};