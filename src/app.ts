/* app.ts */

import express, {Request, Response, NextFunction} from 'express';
require("dotenv").config();
const port = process.env.PORT;

const app = express();
app.use(express.json());


const userController = require("./controller/userController");
app.use("/", userController);

app.listen(port,()=>{
  console.log('start')
})