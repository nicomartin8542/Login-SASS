const inputs = document.querySelectorAll('form .campo input');

//listener a los imputs

inputs.forEach(input => {

    input.addEventListener('blur', validarImput);

});


inputs.forEach(input => {

    input.addEventListener('input', validarImput);

});


function validarImput(e) {

    const estado = ['valido', 'no-valido'];


    let clase;

    if (e.target.value.length === 0) {

        clase = estado[1];

    } else {

        clase = estado[0];

    }

    e.target.classList.remove(...estado);
    e.target.nextElementSibling.classList.remove(...estado);
    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);


    //Inyectar dinamicamente el div con el error
    if (clase === 'no-valido') {

        console.log(e.target.parentElement.nextElementSibling);
        if (e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
            //construir un nensaje de erro 
            const errorDiv = document.createElement('div');
            errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
            errorDiv.classList.add('alerta');
            //insertar error
            e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);

        }


    } else {

        if (e.target.parentElement.nextElementSibling.classList[0] === 'alerta') {
            e.target.parentElement.nextElementSibling.remove();
        }



    }

    //Mostrar y olcultar password

    const mostrarPasswordBtn = document.querySelector('form .campo span');

    mostrarPasswordBtn.addEventListener('click', e => {
        const password = document.querySelector('#password');

        if (e.target.classList.contains('mostrar')) {

            e.target.classList.remove('mostrar');
            //Cambiar Texto
            e.target.textContent = 'Ocultar';
            //Cambiamos a password
            password.type = 'text';

        } else {

            //Mostrar password
            e.target.classList.add('mostrar');
            //Cambiar Texto
            e.target.textContent = 'Mostrar';
            //Cambiamos a password
            password.type = 'password';

        }


    });




}