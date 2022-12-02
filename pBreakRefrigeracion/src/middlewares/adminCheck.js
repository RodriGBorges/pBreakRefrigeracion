const adminCheck = (req, res, next) => {
    let usuario = req.session.adminLogueado;
    if (typeof usuario != "undefined" && usuario.user === 'admin') {
        next();
    } else {
        res.redirect("/user/login");
    }
}

module.exports = adminCheck;