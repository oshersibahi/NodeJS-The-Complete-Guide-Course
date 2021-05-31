exports.get404 = (req,res,next) =>{
    res.render('404.ejs', {
        pageTitle: '404 Not Found!',
        path: null,
        isAuthenticated: req.session.isLoggedIn
    });
};
