var mongoose = require('mongoose');
Schema = mongoose.Schema;
var userSchema = new mongoose.Schema({

    name: {
        type:String
    },
    Mobile:{
        type:Number,
        optional: true
    },
    Email:{
        type:String,
        optional: true
    },
    Password: {
        type:String,
        optional: true
    },
    Address:{
        type:String,
        optional: true
    }
});

exports.userSchema = module.exports.userSchema = userSchema;
exports.boot = module.exports.boot = function(app){
    mongoose.model('User', userSchema);
    return app.models.User = mongoose.model('User');
};