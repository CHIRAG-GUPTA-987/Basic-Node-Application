require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const appRoute = require("./Routes/apps");
app.use(bodyParser.json());

require("./db").connectToMongoose();

app.use("/rest", appRoute);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
