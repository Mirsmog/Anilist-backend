import express from 'express';
import dotenv from 'dotenv';
import router from './routes';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import errorsMiddleware from './middleware/errors.middleware';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 7990;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/api', router);
app.use(errorsMiddleware);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`failed to start server:${error}`);
  }
};

start();
