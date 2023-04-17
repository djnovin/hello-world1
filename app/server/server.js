import express from "express";
const app = express();
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

const port = 3000;
app.listen(port, () => {
  console.log("server is listening on port 3000");
});
