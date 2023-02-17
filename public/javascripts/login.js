window.addEventListener('load', () => {

    // Query selector //
    const qs = (tag) => {
        return document.querySelector(tag)
    }

    const inputPass = qs('#inputContraseña');
    const bttnOculto = qs('#ocultarContraseña');
    const bttnActivado = qs('#verContraseña');

    bttnOculto.addEventListener('click', () => {

        bttnOculto.style.display = 'none'
        bttnActivado.style.display = 'block'
        inputPass.type = "text"

    })

    bttnActivado.addEventListener('click', () => {

        bttnActivado.style.display = 'none'
        ocultarContraseña.style.display = 'block'
        inputPass.type = "password"


    })

})