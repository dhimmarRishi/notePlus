const { raw } = require('body-parser');
const { getUser } = require('../service/auth')

async function forLoggedUsers(req , res , next) {
    // console.log(req.cookies)
    const id = req.cookies.myid;
    console.log(id)
    if(!id) return res.redirect('/login')

    const user = getUser(id);
    if(!user) {
        return res.redirect('/login')
    }

    req.user = user;
    console.log("This is req : ")
    next();

}
module.exports = {
    forLoggedUsers,
}