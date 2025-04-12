const screen = document.querySelector('.screen'); //llamo a la pantalla
const buttons = document.querySelectorAll('.btn, .operator'); //llamo a los elementos que coincidan, con "all" son todos, sin "all" es uno especifico)
const clearButton = document.querySelector('input[value="C"]'); // busco el boton c y lo asigno a la constante clearButton

buttons.forEach(button => {  //con etse foreach recorro todos los la lista de botones
    button.addEventListener('click', () => { //le digo que hacer cuando se haga "click" que seria marcar el boton que se pulsa
        const value = button.value; // le digo que el valor es igual al valor del  button que se pulse

        if (value === '=') { // si pulsamos = nos da el resultado de lo que esta en la pantalla

                screen.value = eval(screen.value);    
        } else { // si no lo hacemos pues que siga poniendo en la pantalla

            screen.value += value;
        }
    });
});

clearButton.addEventListener('click', () => {
    screen.value = ''; //dejo la pantalla en vacio
});