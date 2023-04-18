import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

const port = 8000;
app.listen(port, () => {
  console.log("server is listening on port 8000");
});
