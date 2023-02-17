window.addEventListener('load', () => {

    // Query selector //
    const qs = (tag) => {
        return document.querySelector(tag)
    };
    const eliminar = qs('#eliminarForm');

    eliminar.addEventListener('submit', event =>{
        event.preventDefault();
        Swal.fire({
            title: '¿Estas seguro?',
            text: "¡No podrás revertirlo una ves eliminado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3CD2FB',
            cancelButtonColor: 'crimson',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'No, cancelar!'
        }).then((result) => {
            if(result.isConfirmed){
                eliminar.submit();
            }
        })
    }) ;

})