import cors from "cors";
import express, { Application, Request, Response } from "express";
const app: Application = express();
const port = 3000;

//parser
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "University management system API",
  });
});

export default app;
