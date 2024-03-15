const { getUser } = require("./auth");

function updateAllNotes(req , res) {
    res.render('allNotes' , user = getUser(req.cookies.myid))
}

module.exports = {
    updateAllNotes
}