const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },

  isActive: {
    type: Boolean,
    default: true,
  },
  age: {
    type: Number,
    required: true,
  },
     // if u want to create a relationship between user and comments 

  // comments: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Comment'
  // }]
});
module.exports = mongoose.model("User", userSchema);
