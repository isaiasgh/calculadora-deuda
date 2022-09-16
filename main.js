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

const Imagen1 = document.createElement('img');
Imagen1.classList.add('imagen1');
Imagen1.setAttribute('src', './img/img1.png')

const contenedorImg = document.createElement('div');
contenedorImg.classList.add('contenedor-img');
body.appendChild(contenedorImg);
contenedorImg.appendChild(Imagen1);

botonSi.addEventListener('click', toggleDivMain);
botonSi.addEventListener('click', calcularSi)
botonNo.addEventListener('click', toggleDivMain);

function toggleDivMain() {
    estado = contenedorCuestionario.style.display;
    estado2 = contenedorBotones.style.display;

    if(estado == 'none'){
        contenedorCuestionario.style.display = 'flex';
        contenedorPregunta.style.display = 'flex';
    } else{
        contenedorCuestionario.style.display = 'none';
        contenedorPregunta.style.display = 'none';
    }

    if(estado2 == 'none'){
        contenedorBotones.style.display = 'flex';
        contenedorPregunta.style.display = 'flex';
    } else {
        contenedorBotones.style.display = 'none';
        contenedorPregunta.style.display = 'none';
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
input3.placeholder = 'Palanca Financiera';
const input4 = document.createElement('input');
input4.placeholder = 'Valor de la compra';

const botonCalcular = document.createElement('button');
botonCalcular.innerText = 'Calcular'
botonCalcular.classList.add('boton-calcular');

const botonRegresar = document.createElement('button');
botonRegresar.innerText = 'Regresar'
botonRegresar.classList.add('boton-regresar');

body.appendChild(contenedorCuestionario);
contenedorCuestionario.appendChild(cuestionario);
contenedorCuestionario.appendChild(botonCalcular);
contenedorCuestionario.appendChild(botonRegresar);
cuestionario.appendChild(input1);
cuestionario.appendChild(input2);
cuestionario.appendChild(input3);
cuestionario.appendChild(input4);

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

function calcularSi(){
    botonCalcular.addEventListener('click', operacion);

    function operacion(){
        const pagoMartin = input1.value;
        const pagoJoel = input2.value;
        const Palanca = input3.value;
        const TotalCompra = input4.value;
        const deudaDemartin = (((TotalCompra-Palanca)/2) - pagoMartin);
        const deudaDejoel = (((TotalCompra-Palanca)/2) - pagoJoel);
        cadauno.innerText = 'Cada uno debe pagar : $' + (TotalCompra-Palanca)/2;
        deudajoel.innerText = 'Joel le debe a Martín : $' + deudaDejoel;
        deudamartin.innerText = 'Martín le debe a Joel: $' + deudaDemartin;
        if (deudaDejoel < 0){
            deudajoel.innerText = 'Joel le debe a Martín: $' + 0;
        } else if (deudaDemartin < 0){
            deudamartin.innerText = 'Martín le debe a Joel: $' + 0;
        }
    }
}
    
botonRegresar.addEventListener('click', regresar);

function regresar(){
    estado = contenedorCuestionario.style.display;
    estado2 = contenedorBotones.style.display;
    estado3 = contenedorCuestionario.style.display;
    estado4 = contenedorPregunta.style.display

    contenedorPregunta.style.display = 'flex';
    contenedorCuestionario.style.display = 'flex';
    contenedorBotones.style.display = 'flex';
    contenedorCuestionario.style.display = 'none';
}