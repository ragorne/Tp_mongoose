module.exports=function(app){
    var route = require('./controller');

    app.route('/ajoutUser').post(route.ajoutUser)
};