const responseFactory = require("../util/responseFactory");
const dbMapper = require("../mapper/mapper");
const qureyMap = require("../common/constants").mapperStrings;


async function getUserList(){
    // const result = await db.getUserList();
    const result = await dbMapper(qureyMap.getUserList);
    if(result !== false){
        return responseFactory(true, result);
    }
    else{
        return responseFactory(false);
    }
}

async function insertUser(id: string, age: string, name: string){
    // TODO: check age is integer or return false
    if(isNaN(parseInt(age))){
        return responseFactory(false);
    }

    // TODO: excute mapper function, return ture or false
    // const result = await db.insertUser(id, age, name);
    const result = await dbMapper(qureyMap.insertUser, [id, age, name]);
    
    responseFactory(result);
}

async function deleteUser(id: string){
    // TODO: excute mapper function, return ture or false
    // const result = await db.deleteUser(id);
    const result = await dbMapper(qureyMap.deleteUser, [id]);
    
    return responseFactory(result);
}

async function patchUser(id: string, age: string){
    // TODO: check age is integer or return false
    if(isNaN(parseInt(age))){
        return responseFactory(false);
    }

    // TODO: excute mapper function, return ture or false
    // const result = await db.patchUser(id, age);
    const result = await dbMapper(qureyMap.patchUser, [id, age]);
    
    return responseFactory(result);
}


module.exports = {
    getUserList: getUserList,
    insertUser: insertUser,
    patchUser: patchUser,
    deleteUser: deleteUser
};
