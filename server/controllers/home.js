var mongoose = require('mongoose');
var author = mongoose.model('author');

module.exports={
    get:function (req, res) {
        author.find({}, function (err, authors) {
            if (err) {
                res.json({
                    message: "Error",
                    error: err
                })
            } else {
                res.json({
                    message: "success",
                    data: authors
                })
    
            }
        })
    },
    addQuote: (req, res)=>{
        author.updateOne(
            {_id: req.params.id}, 
            {$push: {_quotes: {quote: req.body.quote, likes: 0 }}}, function(err){
                if(err){
                    console.log("???????????????????????????????????????????")
                    res.json({message:"Error", error:err})
                }
                else{
                    console.log("SYUUUUUUUUUCCCCCCCCCCCSSSSSESSSSSSSSSSSSSSSSS")
                    res.json(req.body)
                }
            })
    },
    getone:function(req,res){
        author.findOne({_id:req.params.id},function(err,author){
            console.log(author);
            if (err){
                console.log(err)
                res.json({
                    message: "Error",
                    error: err
                })
            }
            else{
                res.json({
                    message: "Success",
                    data:author
                });
            }
        })
    },
    create:function(req,res){
        author.create({name:req.body.name},function(err){
            console.log(req.body);
            if (err){
                console.log(err)
                res.json({
                    message: "Error",
                    error: err
                })
            }
            else{
                res.redirect('/');
            }
        })
    },
    update:function(req,res){
        author.update({_id:req.params.id},req.body,{runValidators:true},function(err){
            if (err){
                console.log(err)
                res.json({
                    message: "Error",
                    error: err
                })
            }
            else{
                res.json({message:'success'});
            }
        })
    },
    delete:function(req,res){
        author.deleteOne({_id:req.params.id},function(err){
            if (err){
                console.log(err)
                res.json({
                    message: "Error",
                    error: err
                })
            }
            else{
                res.json({message:"success"});
            }
        })
    }
}