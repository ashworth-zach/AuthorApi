var mongoose = require('mongoose');

var author = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        minlength:3,
        maxlength:100,
    },
 
}, {
    timestamps: true
})
// var author = 
mongoose.model('author',author);
