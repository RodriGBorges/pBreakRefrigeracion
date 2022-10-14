window.addEventListener('load', () => {

    // Query selector //
    const qs = (tag) => {
        return document.querySelector(tag)
    }

    const menuBurger = qs('#bttnBurger');
    const nav = qs('#navMobile');
    const bttnClose = qs('#bttnBurgerClose');

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
})