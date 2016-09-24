module.exports = function(app){
    app.route('/api/v1/home')
        .post(app.saveUserName);

};