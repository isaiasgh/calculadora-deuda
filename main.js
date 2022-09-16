const body = document.querySelector('body');

const contenedorPregunta = document.createElement('div');
contenedorPregunta.classList.add('contenedor-pregunta');

const pPregunta = document.createElement('p');
pPregunta.innerText = '¿Fue una sola compra?';
pPregunta.classList.add('pPregunta'); 

body.appendChild(contenedorPregunta);
contenedorPregunta.appendChild(pPregunta);

const contenedorBotones = document.createElement('div');
contenedorBotones.classList.add('contenedor-botones');

const botonSi = document.createElement('button');
botonSi.innerText = 'Sí';
botonSi.classList.add('boton');

body.appendChild(contenedorBotones);
contenedorBotones.appendChild(botonSi);

const botonNo = document.createElement('button');
botonNo.innerText = 'No';
botonNo.classList.add('boton');

contenedorBotones.appendChild(botonNo);

botonSi.addEventListener('click', toggleDivMain);
botonSi.addEventListener('click', calcularSi)
botonNo.addEventListener('click', toggleDivMain);

function toggleDivMain() {
    estado = contenedorCuestionario.style.display;

    if(estado == 'none'){
        contenedorCuestionario.style.display = 'flex';
    } else{
        contenedorCuestionario.style.display = 'none';
    }

    contenedorPregunta.classList.add('inactive');
    contenedorBotones.classList.add('inactive');
}

const contenedorCuestionario = document.createElement('div');
contenedorCuestionario.classList.add('contenedor-cuestionario');
contenedorCuestionario.style.display = 'none'; // por defecto desactivado

const cuestionario = document.createElement('form');
cuestionario.classList.add('cuestionario');

const input1 = document.createElement('input');
input1.placeholder = 'Aportación de Martín';
const input2 = document.createElement('input');
input2.placeholder = 'Aportación de Joel';
const input3 = document.createElement('input');
input3.placeholder = 'Total de la compra';

const botonCalcular = document.createElement('button');
botonCalcular.innerText = 'Calcular'
botonCalcular.classList.add('boton-calcular');

body.appendChild(contenedorCuestionario);
contenedorCuestionario.appendChild(cuestionario);
contenedorCuestionario.appendChild(botonCalcular);
cuestionario.appendChild(input1);
cuestionario.appendChild(input2);
cuestionario.appendChild(input3);


function calcularSi(){
    botonCalcular.addEventListener('click', operacion);

    const respuestaIgual = document.createElement('p');
    respuestaIgual.classList.add('respuesta1');
    contenedorCuestionario.appendChild(respuestaIgual);

    const cadauno = document.createElement('p');
    cadauno.classList.add('respuesta1');
    contenedorCuestionario.appendChild(cadauno);

    const deudajoel = document.createElement('p');
    deudajoel.classList.add('respuesta1');
    contenedorCuestionario.appendChild(deudajoel);

    const deudamartin = document.createElement('p');
    deudamartin.classList.add('respuesta1');
    contenedorCuestionario.appendChild(deudamartin);



    function operacion(){
        cadauno.innerText = 'Cada uno debe pagar : ' + input3.value/2;
        deudajoel.innerText = 'Joel le debe a Martín : ' + ((input3.value/2)-(input1.value));
        deudamartin.innerText = 'Martín le debe a Joel: ' + ((input3.value/2)-(input2.value));
    }
    

    // respuestaIgual.innerText = // respuesta
}


function toggleMobileMenu(){
    const isPreguntaClosed = contenedorPregunta.classList.contains('inactive');
    if (isPreguntaClosed){
        // mostrar el contenido de la calculadora
    }
}