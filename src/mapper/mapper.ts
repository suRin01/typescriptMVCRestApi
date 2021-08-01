import db from "../util/database";

async function mapper(type: string, data?:string[]): Promise<boolean | string[]>{
	//Get database Connection
	const conn = await db.getConnection();
	if(conn === undefined){
		return false;
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
		return result as any[];
	}
	else if(result !== undefined){
		return true;
	}
	else{
		return false;
	}
}

export = mapper;