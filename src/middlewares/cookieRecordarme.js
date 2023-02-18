const recordarme = (req, res , next) =>{
    if(req.cookies.recordarUsuario) {
        req.session.adminLogueado = req.cookies.recordarUsuario
    }
    next()
}

module.exports = recordarme;