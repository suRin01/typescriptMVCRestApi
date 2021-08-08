import db from "../util/database";

interface excutionResult {
    status: boolean;
    data: any[]|undefined;

}

interface rowData{
	idx: number;
	id: string;
	age: number;
	name: string;
}

async function mapper(type: string, data?:string[]): Promise<excutionResult>{
	//Get database Connection
	const conn = await db.getConnection();
	if(conn === undefined){
		return {status: false, data: []};
	}

	//Excute query
	const result = await conn.query(
		type,
		// queryString[type],
		data
	)
		.catch((err: Error)=>{
			console.log(err);
		});

	//Relase connection and return 
	try{
		conn.release();
	}
	catch(err){
		console.log(err);
	}

	//Return result
	if(Array.isArray(result)){
		const resultArr: Array<rowData> = [];

		if(result !== undefined){
			const tempResult = result[0] as any[];
			for(let idx = 0, len = tempResult.length; idx< len; idx++){
				resultArr.push({idx:tempResult[idx].idx , id:tempResult[idx].id, age:tempResult[idx].age, name:tempResult[idx].name});
			}

			// console.log(resultArr);
		}

		return {status: true, data: resultArr};
	}
	else if(result !== undefined){
		return {status: true, data: []};
	}
	else{
		return {status: false, data: []};
	}
}

export = mapper;