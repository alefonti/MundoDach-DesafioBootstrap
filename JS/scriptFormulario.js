let botonForm = document.getElementById('botonFormulario')

botonForm.addEventListener('click', () =>{
    Swal.fire({
        title:'Informacion enviada!',
        text: 'Hemos recibido tu solicitud',
        icon: 'sucess',
        timer: 5000,
    });
});