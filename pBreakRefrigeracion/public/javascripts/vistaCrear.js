window.addEventListener('load', () => {

    // Query selector //
    const qs = (tag) => {
        return document.querySelector(tag)
    }

    // Query selector All //
    const qsAll = (tag) => {
        return document.querySelectorAll(tag)
    }

    const bttnMasTrabajos = qs('#masTrabajos');
    const bttnDescripcion = qs('#bttnDescripcion');
    const mostrarTrabajos = qsAll('.mostrarTrabajos');
    const mostrarDescripcion = qsAll('.mostrarDivText');
    const titleDescripcion = qs('.descripcion');
    const divDescripcion = qs('.divDescripcion');


    //Vista crear
    bttnMasTrabajos.addEventListener('click', (e) => {
        e.preventDefault();
        for (let i = 0; i < mostrarTrabajos.length; i++) {
            mostrarTrabajos[i].style.display = 'flex';
            mostrarDescripcion[i].style.display = 'block'
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