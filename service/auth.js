const { user } = require("../Model/User");

const userList = new Map();

function setUser(id , User) {
    userList.set(id , User);
}

function getUser(id) {
    const user = userList.get(id);


    for(const entry of userList) {
        console.log(entry)
    }

    return user;
}

module.exports = {
    setUser,
    getUser
}