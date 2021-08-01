import express from "express";
import "dotenv/config";

const port = process.env.PORT;

const app = express();
app.use(express.json());


import userController from "./controller/userController";
app.use("/", userController);

app.listen(port,()=>{
	console.log("Start");
});