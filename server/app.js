const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get("/", async (req, resp) => {
    resp.send("Welcome tO Adiya");
  });
  app.use(require("./routes/website"))
  //  app.use(require("./routes/chatbot"))
  module.exports = app;
