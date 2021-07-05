const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  hobbies: {
    type: Array,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
//Modelo va guardado en //!Mayúscula, SINGULAR.
