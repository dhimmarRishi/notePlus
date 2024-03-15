const { user } = require("../Model/User");
const bcrypt = require("bcrypt");
const { setUser } = require("../service/auth");
const { v4: uuidv4 } = require("uuid");

async function handleSignUp(req, res) {
  const email = req.body.email;
  const verify = await user.findOne({ email });

  //if email already exists...
  if (verify) return res.json({ err: "User already exists ..." });

  const salt = bcrypt.genSaltSync();
  const newPass = bcrypt.hashSync(req.body.password, salt);

  //if the user is new...
  const newUser = new user({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: email,
    password: newPass,
  });
  await newUser.save();
  return res.redirect("/login");
}

async function handleLogIn(req, res) {
  const valid = await user.findOne({ email: req.body.email });
  if (!valid) return res.render("login");

  const validPass = bcrypt.compareSync(req.body.password, valid.password);
  if (!validPass) return res.render("login");

  if (valid && validPass) {
    // console.log("Valid : " + valid)
    const id = uuidv4();
    setUser(id, valid);
    res.cookie("myid", id);
    return res.redirect("/userPage");
  }
}

async function handleLoadUserNotes() {}

module.exports = {
  handleSignUp,
  handleLogIn,
};
