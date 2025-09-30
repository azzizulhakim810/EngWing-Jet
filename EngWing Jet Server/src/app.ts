import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';

const app: Application = express();

// Parsers
app.use(cors());
app.use(express.json());

// App Routers
app.use('/api/v1/students', StudentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello JIM!');
});

export default app;
