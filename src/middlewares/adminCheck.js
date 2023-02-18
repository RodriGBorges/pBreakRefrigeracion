const adminCheck = (req, res, next) => {
    let usuario = req.session.adminLogueado;
    
    if (typeof usuario != "undefined" && usuario.nombreUsuario === 'admin' && usuario.id === 1) {
        next();
    } else {
        res.redirect("/user/login");
    }
}

module.exports = adminCheck;