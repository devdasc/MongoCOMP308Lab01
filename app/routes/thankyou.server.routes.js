﻿//This uses CommonJS module pattern to export a single module function.
//This function takes an express object as argument 
//Then it requires the index controller and uses its render() method
//as a middleware to GET requests made to the root path.

module.exports = function (app) {
    //load the controllers
    var index = require('../controllers/index.server.controller');
    var login = require('../controllers/login.server.controller');
    var logout = require('../controllers/logout.server.controller');
    var admin = require('../controllers/admin.server.controller');
    var feedback = require('../controllers/feedback.server.controller');
    var thankyou = require('../controllers/thankyou.server.controller');
    //handle the routing of get and post request
    app.get('/', index.render);
    app.get('/login', index.render);
    app.post('/login', login.render);
    app.get('/admin', admin.render);
    app.get('/feedback', admin.render);
    app.post('/feedback', admin.render);
    app.get('/thankyou', admin.render);
    app.get('/logout', logout.render);
    //
    app.post('/', function (req, res) {
        //console.log("POST request - User name = " + req.body.username);
        thankyou.render(req, res);
        
    });

};
