import responseFactory from "../util/responseFactory";
import dbMapper from "../mapper/mapper";
import {query} from "../common/constants";

async function getUserList(){
	// const result = await db.getUserList();
	const result = await dbMapper(query.getUserList);

	if(result !== false){
		return responseFactory.createResult(true,);
	}
	else{
		return responseFactory.createResult(false);
	}
}

async function insertUser(id: string, age: string, name: string){
	// TODO: check age is integer or return false
	if(isNaN(parseInt(age))){
		return responseFactory.createResult(false);
	}

	// TODO: excute mapper function, return ture or false
	// const result = await db.insertUser(id, age, name);
	const result = await dbMapper(query.insertUser, [id, age, name]);
    
	responseFactory.createResult(result);
}

async function deleteUser(id: string){
	// TODO: excute mapper function, return ture or false
	// const result = await db.deleteUser(id);
	const result = await dbMapper(query.deleteUser, [id]);
    
	return responseFactory.createResult(result);
}

async function patchUser(id: string, age: string){
	// TODO: check age is integer or return false
	if(isNaN(parseInt(age))){
		return responseFactory.createResult(false);
	}

	// TODO: excute mapper function, return ture or false
	// const result = await db.patchUser(id, age);
	const result = await dbMapper(query.patchUser, [id, age]);
    
	return responseFactory.createResult(result);
}


export = {
	getUserList,
	insertUser,
	patchUser,
	deleteUser
};
