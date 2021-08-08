import dbMapper from "../src/mapper/mapper";
import {query} from "../src/common/constants";
import internal from "stream";



interface responseResult{
	code: number;
	data: string[]|undefined;
}
interface rowData{
	idx: number;
	id: string;
	age: number;
	name: string;
}
// interface rowData extends Array<rowData>{}

async function getUserList(){
	// const result = await db.getUserList();
	const result = await dbMapper(query.getUserList);
	const resultArr: Array<rowData> = [];

	if(result.data !== undefined){
		// console.log(result.data[0]);
		for(let idx = 0, len = result.data[0].length; idx< len; idx++){
			// console.log(result.data[0][idx].idx);
			resultArr.push({idx:result.data[0][idx].idx , id: result.data[0][idx].id, age:result.data[0][idx].age, name:result.data[0][idx].name});
		}

		console.log(resultArr);
	}
	

	return true;
}


getUserList();