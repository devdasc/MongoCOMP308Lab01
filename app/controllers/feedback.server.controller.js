//This code uses the CommonJS module pattern to define a function named render()
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller
exports.render = function (req, res) {
    //make a reference to the session object
    var session = req.session;
    //check if username is stored in session object
    if (session.username) {
        var email = session.username;
        //res.write('<h1>Thank You</h1><br>');
        res.render('feedback', {
            title: 'Feedback', email: session.username
        });
    }
    else { 
        res.write('<h1>Please login first.</h1>');
        res.end('<a href=' + '/' + '>Login</a>');
    }
    res.redirect('/thankyou');
   
};
exports.thankyou = function (req, res) {
    res.redirect('/thankyou');
};