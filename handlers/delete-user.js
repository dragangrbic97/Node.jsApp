const {deleteUser} = require("../db/user/user");

const deleteUserHandler = async (req)=> {
    try {
        await deleteUser(req);
        console.log("Entry in db has been deleted");
    }
    catch (err){
        return console.log(err);
    }
}

module.exports = {deleteUserHandler}