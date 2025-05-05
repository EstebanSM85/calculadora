/* Agregue primero las funciones básicas, una vez consegui eso,
hice que el boton 'C' borrase la pantalla, una vez entendi como se hacía, 
agregar nuevos botones es realmente sencillo, 
practicamente copiar pegar y modificar,
Enseñando el resultado a mi mujer, me dio una buena idea, 
porque no uso el teclado para intrododucir números,
lo investigue, es casi como hacer que cada boton haga lo que tiene que hacer 
lo que más me costo es que solo funcionase los numeros y no las letras.
Repasando las restricciones, no se como no me di cuenta de que no se podia usar eval,
como lo estaba haciendo lo sustitui por la funcion calcular.
Por ultimo he repasado los comentarios para que se entienda todo mejor.
En resumen javaScript es bastante más complejo de lo que habiamos hecho, 
me cuesta mucho la sintaxis, tengo que recurrir demasiadas veces al como se escribe,
se lo que quiero hacer pero temngo que investigar la sistaxis*/


const screen = document.querySelector('.screen'); //selecciono la pantalla, la llamo screen
const buttons = document.querySelectorAll('.btn, .operator'); //llamo a los elementos que coincidan con .btn y .operador, con "all" son todos, sin "all" es uno especifico)
const clearButton = document.querySelector('input[value="C"]'); // busco el boton c y lo asigno a la constante clearButton
const raizButton = document.querySelector('input[value="√"]'); // asigno el nombre de la variable a raiz
const signoButton = document.querySelector('input[value="+/-"]'); //asigo la variable a +/-
const memoriaButton =document.querySelector('input[value="M"]'); // nombre de la variablr de M
const mRButton = document.querySelector('input[value="MR"]'); // Nombre de la variable MR
let memoria = null; // donde guardo el valor de la pantalla, let porque no es constante


buttons.forEach(button => {  //con este for each recorro todos los la lista de botones
    button.addEventListener('click', () => { //le digo que hacer cuando se haga "click" que seria marcar el boton que se pulsa
        const value = button.value; // le digo que el valor es igual al valor del  button que se pulse
        if (value === '=') { // si pulsamos = nos da el resultado de lo que esta en la pantalla
            try { // Uso el try para controlar errores
                screen.value = calcular(screen.value); // Usa la función calcular para evaluar la operación.
            } catch (error) { //Captura el error si operación no está bien.
                screen.value = 'Error'; // Mostrar "Error" si la operación no es válida.
            }
        }   else if(value === "M" || value === "MR"){ //esto lo pongo para que si pulso esas letras no me aparezca en la pantalla
            return;
        }   else { // si no lo hacemos pues que siga poniendo en la pantalla
            screen.value += value;
        }
    });
});

function calcular(operacion) { // la funcion que hace las operaciones
    const resultado = new Function(`return ${operacion}`)(); //inicia la funcion y la guarda en resultado
    return resultado; // Devolvemos el resultado.
}

clearButton.addEventListener('click', () => { //El evento click en el boton C
    screen.value = ''; //dejo la pantalla en vacio
});

raizButton.addEventListener('click', () =>{ //El evento click en el boton √
    screen.value = Math.sqrt(parseFloat(screen.value));
});


signoButton.addEventListener('click', () =>{ //El evento click en el boton +/-
    screen.value = parseFloat(screen.value) * -1; // cambio el signo de la pantalla
});

memoriaButton.addEventListener('click', () =>{ //El evento click en el boton M
    memoria = parseFloat(screen.value);
});

mRButton.addEventListener('click', () => { //El evento click en el boton MR
    screen.value += memoria;
});

document.addEventListener('keydown', (event) => { //agrego la funcion de usar el teclado uso document para poder hacerlo
    const key = event.key; // Capturamos la tecla presionada

    if (!isNaN(key)) { // isNaN comprueba si no es un numero devuelve false si es un numero, por lo tanto !isNaN devuelve true si es un numero asi verifico que cuando se un numero lo  agregue
        screen.value += key; // Agregamos el número a la pantalla 
    } else if (['+', '-', '*', '/', '.'].includes(key)) { // comprobamos que se use un operador válido
        screen.value += key; 
    } else if (key === 'Enter') { // Al pulsar enter hacemos la operacion(en mi teclado me funciona en el enter normal, en el que esta en el numerico no, en el portatil en los 2.)
        try { // Uso el try para controlar errores
            screen.value = calcular(screen.value); // Usa la función calcular para evaluar la operación.
        } catch (error) { //Captura el error si operación no está bien.
            screen.value = 'Error'; // Mostrar "Error" si la operación no es válida.
        } 
    } else if (key === 'Backspace') { // al pusar retroceder borra el ultimo caracter
        screen.value = screen.value.slice(0, -1); 
    }
});