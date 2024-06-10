const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  
   // if u want to create a relationship between user and comments 
   
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // }

  createdAt: {
    type: Date,
    default: Date.now,
  },
 
});   

module.exports = mongoose.model("Comment", commentSchema);
