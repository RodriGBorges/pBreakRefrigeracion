const localsUser = (req, res ,next)=>{
    if(req.session.adminLogueado){
        res.locals.adminLogueado = req.session.adminLogueado;
    }
    next();
}

module.exports = localsUser;