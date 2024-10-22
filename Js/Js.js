'use strict'

let notas = [7, 4, 8, 9, 6]; // En este array metemos las notas de los estudianetes

function mostrarNotas() {
    // Obtiene por el id el ul donde se mostraran las notas
    const lista = document.getElementById('contenido-notas');

    // recorre cada nota en el array de notas.
    for (const nota of notas) {

        const item = document.createElement('li'); // Crea un elemento li para cada nota
        item.textContent = nota; // Asigna el valor de la nota al contenido del li
        lista.appendChild(item); // Añade el li a la lista ul
    }
}

function calcularPromedio() {
    let suma = 0; // variable para almacenar la suma de las notas
    // recorre cada nota ara sumarlas
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i]; // suma cada nota al total
    }

    const promedio = suma / notas.length; // divide la suma por la cantidad de notas
    document.getElementById('promedio').textContent = promedio; // muestra el promedio en el en el id promedio
}

function noMasAlta() {

    let notaAlta = notas[0]; // inicializo nota alta como la primera nota del array

    // Recorro el array de notas comenzando desde la 2 segunda nota porque la primera ya la tenemos
    // si la nota es mayor que la mayor actual entonces actualizamos y seguimos recorriendo el array
    for (let i = 1; i < notas.length; i++) {
        if (notas[i] > notaAlta) {
            notaAlta = notas[i];
        }
    }
    // muestra la nota mas alta en el id notaAlta
    document.getElementById('notaAlta').textContent = notaAlta;
}

function consultarSuspenso() {
    // Inicializamos una variable donde vamos a guardar el numero de suspensos
    // recorremos el array y si la  nota es menor que 5 sumanos uno a la lista de suspensos
    let suspensos = 0;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 5) {
            suspensos += 1;
        }

    }

    // si ha el numero de suspensos es mayor a 0 lanzamos el numero de suspensos 
    if (suspensos > 0) {
        document.getElementById('suspenso').textContent = `Hay un total de ${suspensos} suspensos`; // Uso de comillas invertidas para interpolación
    } else {
        document.getElementById('suspenso').textContent = 'No hay suspensos'; // Corrección del ID de la etiqueta
    }
}

mostrarNotas();

