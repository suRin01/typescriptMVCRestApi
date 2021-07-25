const query = require("../common/constants").queryStrings;
const db = require("../util/database");
async function mapper(type: string, data:object){
    //Get database Connection
    const conn = await db.getConnection();
    if(conn === undefined){
        return false;
    }

    //Excute query
    const result = await conn.query(
        query[type],
        data
    )
        .catch((err: Error)=>{
            console.log(err);
        });

    //Relase connection and return 
    conn.release()
        .catch((err: Error)=>{
            console.log(err);
        });

    //Return result
    if(Array.isArray(result)){
        return result;
    }
    else if(result !== undefined){
        return true;
    }
    else{
        return false;
    }
}

module.exports = mapper;