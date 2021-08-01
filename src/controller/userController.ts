
import express, {Request, Response} from "express";
const router = express.Router();

// const userService = require("../service/userService");
import userService from "../service/userService";


router.get("/getuser", async (req: Request, res: Response) => {
	const result = await userService.getUserList();

	console.log(result);
	res.json(result);
});

router.post("/postuser", async (req: Request, res: Response) => {
	const name = req.body.name;
	const age = req.body.age;
	const id = req.body.id;

	const result = await userService.insertUser(id, age, name);

	console.log(userService.getUserList());
	res.json(result);
});

router.delete("/deleteuser", async (req: Request, res: Response) => {
	const id = req.body.id;

	const result = await userService.deleteUser(id);

	console.log(userService.getUserList());
	res.json(result);
});

router.put("/patchuser", async (req: Request, res: Response) => {
	const id = req.body.id;
	const age = req.body.age;

	console.log(userService.getUserList());
	const result = await userService.patchUser(id, age);
	res.json(result);
});

export = router;