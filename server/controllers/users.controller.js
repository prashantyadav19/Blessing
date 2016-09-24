module.exports = function(app){

    var User = app.models.User;
    app.saveUserName = function(req, res){
        var user = new User({name:req.body.data});
        user.save(function(err, result){
            if(err){
                res.send(err);
            }
            else{
                res.send(result);
            }
        })
    }

};