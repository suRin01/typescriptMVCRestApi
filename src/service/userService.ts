import responseFactory from "../util/responseFactory";
import dbMapper from "../mapper/mapper";
import {query} from "../common/constants";

interface responseResult{
	code: number;
	data: string[]|undefined;
}

async function getUserList(): Promise<responseResult>{
	// const result = await db.getUserList();
	const result = await dbMapper(query.getUserList);

	return responseFactory.createResult(result.status, result.data);
}

async function insertUser(id: string, age: string, name: string): Promise<responseResult>{
	// TODO: check age is integer or return false
	if(isNaN(parseInt(age))){
		return responseFactory.createResult(false);
	}

	// TODO: excute mapper function, return ture or false
	// const result = await db.insertUser(id, age, name);
	const result = await dbMapper(query.insertUser, [id, age, name]);
    
	return responseFactory.createResult(result.status, result.data);
}

async function deleteUser(id: string): Promise<responseResult>{
	// TODO: excute mapper function, return ture or false
	// const result = await db.deleteUser(id);
	const result = await dbMapper(query.deleteUser, [id]);
    
	return responseFactory.createResult(result.status, result.data);
}

async function patchUser(id: string, age: string): Promise<responseResult>{
	// TODO: check age is integer or return false
	if(isNaN(parseInt(age))){
		return responseFactory.createResult(false);
	}

	// TODO: excute mapper function, return ture or false
	// const result = await db.patchUser(id, age);
	const result = await dbMapper(query.patchUser, [id, age]);
    
	return responseFactory.createResult(result.status, result.data);
}


export = {
	getUserList,
	insertUser,
	patchUser,
	deleteUser
};
