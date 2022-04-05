const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
   firstName: {
       type: String,
   },
   lastName: {
       type: String,
   },
   username: {
        type: String,
        required: true,
        unique: true,
   },
   email: {
       type: String,
       required: true,
       unique: true,
   },
   password: {
       type: String, 
       required: true,
       select: false
   }
});

const User = mongoose.model("User", userSchema);

module.exports = User;