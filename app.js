const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.listen(() => console.log("connected to Localhost"));

const PORT = 5000 || process.env.PORT;
