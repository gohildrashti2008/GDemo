const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    name:{
        type:String
    }
});
module.exports = mongoose.model('user',userSchema);