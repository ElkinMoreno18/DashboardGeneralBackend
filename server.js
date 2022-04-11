require("custom-env").env("production"); // Environment Variables.
const cors = require("cors"); // importar CORS para peticiones.
const express = require("express"); // importar Express.
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const app = express();
const db = require("./models"); // importar la configuración inicial.
const axios = require("axios");
const https = require("https");

let ActiveDirectory = require("activedirectory");
const { contentType } = require("express/lib/response");
let activeDirectory = new ActiveDirectory({
  url: process.env.AD_URL,
  baseDN: process.env.AD_BASE_DN,
  username: process.env.AD_USERNAME,
  password: process.env.AD_PASSWORD,
});

let persistence = require("./models/persistence.js")(
  db.sequelize,
  activeDirectory
);

let sequelizeStore = new SequelizeStore({
  db: db.sequelize,
});

var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET, POST, OPTIONS, PUT, PATCH, DELETE"],
  Headers: "content-type",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET.toString(),
    resave: true,
    store: sequelizeStore,
    saveUninitialized: false,
  })
);

require("./routes/test.routes")(app);
require("./routes/sbc.routes")(app);
require("./routes/intranet.routes")(app, persistence, activeDirectory);

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido" });
});

sequelizeStore.sync().then(() => {
  console.log(`re-sincronizando la DB`);
});

/*  db.sequelize.sync({force: true}).then(() => {
    console.log("Borrando y re-sincronizando la DB");
});  */

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto ${PORT}.`);
});
