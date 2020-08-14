require("./db");

const express = require("express");
const cors = require("cors");

const postMessageRoutes = require("./controllers/postMessageController");

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.listen(3001, () => console.log("Server started at: 3001"));

app.use("/postMessages", postMessageRoutes);
