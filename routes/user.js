const express = require('express')
const userRouter = express.Router();
const { handleAddNote } = require('../handlers/addNoteHandlers');
const { user } = require('../Model/User');
const { getUser } = require('../service/auth');

userRouter.get('/' , async (req , res) => {
    console.log("Here : " + req.user)
    console.log()
    const User = await user.findOne({email : req.user.email})
    res.render("userpage" , {user : User} );
})

userRouter.post('/', handleAddNote)

module.exports = {
    userRouter,
}