const mongoose = require("mongoose");
const colorValidator = (v) => /^#([0-9a-f]{3}){1,2}$/i.test(v);


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  notes: [
    {
      noteTitle: {
        type: String,
        required: true,
      },
      content: {
        type: String,
      },
      fav: {
        type: Boolean,
      },
      BGI: {
        data: Buffer,
        contentType: String,
      },
      BGC: {
        type: String,
        validate: [colorValidator, "Not a valid color"],
      },
    },
  ],
});

const user = mongoose.model("user", userSchema);

module.exports = {
  user,
};
