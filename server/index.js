require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const port = process.env.PORT;

const routes = require("./routes");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is live on http://localhost:${port}`);
});
