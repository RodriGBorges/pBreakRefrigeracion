window.addEventListener('load', () => {

    // Query selector //
    const qs = (tag) => {
        return document.querySelector(tag)
    }

    const menuBurger = qs('#bttnBurger');
    const aside = qs('#aside');
    const bttnClose = qs('#bttnClose');

    menuBurger.addEventListener('click', () => {
        aside.style.display = 'flex';
    })

    bttnClose.addEventListener('click', () => {
        aside.style.display = 'none';
    })
})