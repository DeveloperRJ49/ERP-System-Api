const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectDB } = require("./src/db/dbConnection");
const routes = require("./src/routes/v1");
require("./src/helpers/crons");
const config = require("./src/config/config");

const app = express();

/**
 * allow form-data from body
 * form-data is use for image upload
 * parse application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * allow json data from body
 * parse application/json
 */
app.use(bodyParser.json());

/** enable cors */
app.use(cors());
app.options("*", cors());

/** Get image */
app.use(express.static(`${__dirname}/public`));

app.use("/v1", routes);

/** whenever route not created and you try to use that route then throw error. */
app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

/** Database connection */
connectDB();

/** create server using http */
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`server listning on port number => ${config.port} !`);
});