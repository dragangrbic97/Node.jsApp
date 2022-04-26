const {getUsers, getUser} = require("../db/user/user");
const {response} = require("express");


async function showUsersHandler() {
    const data = await getUsers();
    return data;
}

async function showUserHandler(req) {
    const data = await getUser(req);
    if (data===null) return ("Null");
    const {dataValues}=data;
    return dataValues;
}

module.exports = {showUserHandler, showUsersHandler}