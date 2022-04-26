const {User} = require ('../dbconnect')
const {response} = require("express");

async function addUser(userData) {
    try {
        const entry=await User.create(userData);
        console.log(entry);
        return entry;
    }
    catch (error) {
        console.log(error);
    }
}

async function getUsers() {
    try {
        const data = await User.findAll({raw: true});
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

async function getUser(id) {
    try {
        const data = await User.findOne({where: {id: id}});
        return data;
    }
    catch (error) {
        console.log(error)
    }
}

async function updateUser(userData) {
    try {
        return await User.upsert(userData,{where: {id: userData.id}});
    }
    catch (error) {
        console.log(error);
    }
}

async function deleteUser(userId) {
    try {
        return await User.destroy({where: {id: userId}});
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {addUser, getUser, getUsers, updateUser, deleteUser}