const {addUser} = require("../db/user/user");

const addUserHandler = async (req) => {
    try {
        const entry=await addUser(req);
        console.log("Entry in db has been created");
        const {dataValues}=entry;
        return dataValues;
    }
    catch (err){
        return console.log(err);
    }
}

module.exports = {addUserHandler}