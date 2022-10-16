window.addEventListener('load', () => {

    // Query selector //
    const qs = (tag) => {
        return document.querySelector(tag)
    }

    // Query selector All //
    const qsAll = (tag) => {
        return document.querySelectorAll(tag)
    }

    const menuBurger = qs('#bttnBurger');
    const nav = qs('#navMobile');
    const bttnClose = qs('#bttnBurgerClose');
    const bttnMasTrabajos = qs('#masTrabajos');
    const bttnDescripcion = qs('#bttnDescripcion');
    const mostrarTrabajos = qsAll('.mostrarTrabajos');
    const titleDescripcion = qs('.descripcion');
    const divDescripcion = qs('.divDescripcion');


    menuBurger.addEventListener('click', () => {
        nav.style.display = 'flex';
        menuBurger.style.display = 'none';
        bttnClose.style.display = 'block';
    })

    bttnClose.addEventListener('click', () => {
        nav.style.display = 'none';
        bttnClose.style.display = 'none';
        menuBurger.style.display = 'block';
    })

    //Vista crear
    bttnMasTrabajos.addEventListener('click', (e) => {
        e.preventDefault();
        for (let i = 0; i < mostrarTrabajos.length; i++) {
            mostrarTrabajos[i].style.display = 'flex';
        }
        bttnMasTrabajos.style.display = 'none';
    })

    bttnDescripcion.addEventListener('click', (e) => {
        e.preventDefault();
        titleDescripcion.style.display = 'block';
        divDescripcion.style.display = 'block';
        bttnDescripcion.style.display = 'none';
    })
})