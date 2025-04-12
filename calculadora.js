const screen = document.querySelector('.screen'); //selecciono la pantalla, la llamo screen
const buttons = document.querySelectorAll('.btn, .operator'); //llamo a los elementos que coincidan con .btn y .operador, con "all" son todos, sin "all" es uno especifico)
const clearButton = document.querySelector('input[value="C"]'); // busco el boton c y lo asigno a la constante clearButton
const raizButton = document.querySelector('input[value="√"]'); // asigno el nombre de la variable a raiz
const signoButton = document.querySelector('input[value="+/-"]'); //asigo la variable a +/-
const memoriaButton =document.querySelector('input[value="M"]'); // nombre de la variablr de M
const mRButton = document.querySelector('input[value="MR"]'); // Nombre de la variable MR
let memoria = null; // donde guardo el valor de la pantalla, let porque no es constante


buttons.forEach(button => {  //con etse foreach recorro todos los la lista de botones
    button.addEventListener('click', () => { //le digo que hacer cuando se haga "click" que seria marcar el boton que se pulsa
        const value = button.value; // le digo que el valor es igual al valor del  button que se pulse
        if (value === '=') { // si pulsamos = nos da el resultado de lo que esta en la pantalla
                screen.value = eval(screen.value);    
        }   else if(value === "M" || value === "MR"){ //esto lo pongo para que si pulso esas letras no me aparezca en la pantalla
            return;
        }   else { // si no lo hacemos pues que siga poniendo en la pantalla
            screen.value += value;
        }
    });
});

clearButton.addEventListener('click', () => {
    screen.value = ''; //dejo la pantalla en vacio
});

raizButton.addEventListener('click', () =>{
    screen.value = Math.sqrt(parseFloat(screen.value));
});


signoButton.addEventListener('click', () =>{
    screen.value = parseFloat(screen.value) * -1; // cambio el signo de la pantalla
});

memoriaButton.addEventListener('click', () =>{
    memoria = parseFloat(screen.value);
});

mRButton.addEventListener('click', () => {
    screen.value += memoria;
});

document.addEventListener('keydown', (event) => { //agrego la funcion de usar el teclado
    const key = event.key; // Capturamos la tecla presionada

    if (!isNaN(key)) { // isNan comprueba si no es un numero devuelve false si es un numero, por lo tanto !isNan devuelve true si es un numero
        screen.value += key; // Agregamos el número a la pantalla
    } else if (['+', '-', '*', '/', '.'].includes(key)) { // comprobamos que se ùlse un operador valido
        screen.value += key; 
    } else if (key === 'Enter') { // Al pulsar enter hacemos la operacion(en mi teclado me funciona en el enter normal, en el que esta en el numerico no, en el portatil en los 2.)
        screen.value = eval(screen.value); 
    } else if (key === 'Backspace') { // al pusar retroceder borra el ultimo caracter
        screen.value = screen.value.slice(0, -1); 
    }
});