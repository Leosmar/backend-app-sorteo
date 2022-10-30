const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(cors());
app.use(express.json({ type: "application/json" }));

require("./inserRamdonNumber");

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
