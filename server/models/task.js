var mongoose = require('mongoose');
var Schema=mongoose.Schema;
mongoose.Promise = global.Promise;
const author = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "A name is required"], 
         minlength: [3, "Author names must have at least 3 characters"]
    },
    _quotes: {
        quote: {type: String},
        likes: {type: Number}
    } 

}, {timestamps: true})
mongoose.model('author',author);

