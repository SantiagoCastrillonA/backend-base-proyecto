import express from "express";
import bodyParser from 'body-parser';

import register from './routes/register';
import auth from './routes/auth';
import profile from './routes/profile';
import updateRoute from './routes/update';
import deleteRoute from './routes/delete';


import dotenv from "dotenv";
dotenv.config();

const app = express().use(bodyParser.json());

app.use('/auth', auth);
app.use('/register', register);
app.use('/profile', profile);
app.use('/update', updateRoute);
app.use('/delete', deleteRoute);


const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});
