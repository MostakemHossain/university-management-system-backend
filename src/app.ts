import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();
const port = 3000;

//parser
app.use(cors());
app.use(express.json());

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'University management system API',
  });
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
