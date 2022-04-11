const { Sequelize } = require("../models");
const db = require("../models");
const Test = db.tests;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  /*  if(!req.body.title) {
        res.status(400).send({
            message: "El contenido no puede estar vacío"
        });
        return;
    } */
  //Creacion de Test
  const test = {
    months: req.body.months,
    pptoVenta: req.body.description,
    VentaEjecutada: req.body.VentaEjecutada,
    Cumplimiento: req.body.Cumplimiento,
    VentaActual: req.body.VentaActual,
    PorcentajeVentaActual: req.body.PorcentajeVentaActual,
    VentaNueva: req.body.VentaNueva,
    PorcentajeVentaNueva: req.body.PorcentajeVentaNueva,
    PresupuestoAcumulado: req.body.PresupuestoAcumulado,
    ComisionAct: req.body.ComisionAct,
    ComisionNue: req.body.ComisionNue,
    salarioTotal: req.body.salarioTotal,
    usuarioLogueado: req.body.usuarioLogueado,
    representante: req.body.representante,
    monthSalary: req.body.monthSalary,
    pptoMensual: req.body.pptoMensual,
    pptoAnual: req.body.pptoAnual,
  };

  Test.create(test)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error mientras se crea el test",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Test.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error mientras se buscan todos los test",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Test.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error en la búsqueda del Test de id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const month = req.params.months;
  const representante = req.params.representante;
  console.log(representante);
  Test.update(req.body, {
    where: { months: month, representante: representante },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "El Test fue actualizado exitosamente",
        });
      } else {
        res.send({
          message: `No se puede actualizar el Test con id=${month}. No encontrado o el req.body está vacío!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error actualizando el Test con id=" + month,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Test.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "El Test fue borrado exitosamente!",
        });
      } else {
        res.send({
          message: `No se puede borrar el Test con id=${id}. Puede que el tutorial no haya sido encontrado!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "No se puede borrar el Test con id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Test.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Los Tests fueron borrados exitosamente!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Ocurrió un error mientras se borraban los Tests.",
      });
    });
};

exports.findAllPublished = (req, res) => {
  Test.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error ocurrido mientras se obtienen los Tests.",
      });
    });
};

exports.findByRepresentative = (req, res) => {
  const representante = req.params.representante;
  Test.findAll({ where: { representante: representante } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error ocurrido mientras se obtienen los Valores.",
      });
    });
};

exports.findByRol = (req, res) => {
  const role = req.params.rol;
  const repName = req.params.representante;
  Test.findAll({ where: { rol: role, representante: repName } })
  .then((data) => {
    console.log(data);
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message:
        err.message || "Error ocurrido mienstras se obtienen los valores por Rol y nombre.",
    });
  });
};

exports.findAllForCoordinator = (req, res) => {
  const representante = req.params.representante;
  console.log(representante);
  Test.findAll({ where: { representante: {[Sequelize.Op.not]: representante}}})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error ocurrido mientras se obtienen los Valores.",
      });
    });
};
