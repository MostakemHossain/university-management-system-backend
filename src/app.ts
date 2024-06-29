import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { studentRoutes } from './app/modules/student/student.routes';
const app: Application = express();
const port = 3000;

//parser
app.use(cors());
app.use(express.json());

app.use('/api/v1/student', studentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'University management system API',
  });
});

export default app;
