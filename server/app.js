import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import user from './routes/user';
import index from './db';
import auth from './routes/auth';
import request from './routes/request';


dotenv.config();

const app = express();
<<<<<<< HEAD
const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true }));
=======
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
>>>>>>> input-validation-157998049
app.use(bodyParser.json());

app.use('/auth', auth);
app.use('/', request);
app.use('/users', user);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
