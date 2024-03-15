const { user } = require("../Model/User");
const { getUser } = require("../service/auth");
const { updateAllNotes } = require("../service/updateNote");

async function handleAddNote(req, res) {
  console.log("ANH");
  console.log(req.body);
  const newNote = {
    noteTitle: req.body.title,
    content: req.body.content,
    BGI: req.body.bgi,
    BGC: req.body.bgc,
  };

  if (req.body.title) {
    const User = await user.findOne({ email : getUser(req.cookies.myid).email });
    if (User) {
      console.log("User is not null")
      await User.updateOne(User.notes.push(newNote));
      await User.save();
    }
  }
  // updateAllNotes(req,res)
  return res.redirect("/userPage");
}

module.exports = {
  handleAddNote,
};
