exports.homePageUser = (req, res, next) => {

    res.cookie('token', req.jwt, { httpOnly: true, secure: true });

    res.redirect("http://localhost:3000");

};