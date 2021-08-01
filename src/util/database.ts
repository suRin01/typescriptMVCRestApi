
import mysql from "mysql2/promise";
import "dotenv/config";

export = (function(){

	const pool = mysql.createPool({ 
		host: process.env.DB_HOST,
		port: Number(process.env.DB_PORT),
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		connectionLimit: 5
	});
    
	async function getConnection(){
		return await pool.getConnection()
			.catch((err: Error)=>{
				console.log(err);
				return undefined;
			});
	}

	return{
		getConnection: async function(){
			return await getConnection();
		}
	};


})();