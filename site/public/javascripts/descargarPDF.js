window.addEventListener('load', () => {

    // Query selector //
    const qs = (tag) => {
        return document.querySelector(tag)
    }

    const bttnDescargar = qs('#bttnDescargar');
    const presupuestoPDF = qs('#presupuestoPDF');
    let num = qs('#nPresupuestoId').textContent;
    const nombre = qs('#nombreClienteId');

    let nombrePDF = nombre.textContent.slice(8);


    bttnDescargar.addEventListener('click', () => {
        let opt = {
            margin: 0,
            filename: `${nombrePDF} - ${num}.pdf`,
            image: { type: 'jpeg', quality: 1},
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a3', orientation: 'portrait' }
        };
        html2pdf().from(presupuestoPDF).set(opt).save();

    });

})