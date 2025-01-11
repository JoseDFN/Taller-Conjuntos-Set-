"use strict";

//Ej 1

const IDK = new Set([1,2,3,4,5,6,7,8,9,10]);
console.log(IDK.size);

//Ej 2

const numerosDuplicados = [1,2,3,4,5,5,6,7,7,8,9,10];
let Duplicados = new Set(numerosDuplicados);
let numerosD = Array.from(Duplicados);
console.log(numerosD);

//Ej 3

let a = [1,2,3,3,4,5];
let b = [1,2,3,4,5];
const  tieneDuplicados = (x) => {
    let D =''
    let x2 = new Set(x)
    if ((x.length)!=(x2.size)){
        D = 'true';
    } else {
        D = 'false'
    };
    console.log(D);
};
console.log(tieneDuplicados(a));
console.log(tieneDuplicados(b));

// Ej 4

const conjuntoA = new Set([1, 2, 3, 4, 5]);
const conjuntoB = new Set([4, 5, 6, 7, 8]);

let comunes = conjuntoA.intersection(conjuntoB);
console.log(comunes);

// Ej 5

let diferentes = conjuntoA.difference(conjuntoB);
console.log(diferentes);

// Ej 6

let conjunto1 = [1, 2, 3];
let conjunto2 = [3, 2, 1];
let conjunto3 = [4, 5, 6];

const sonIguales = (a,b) => {
    a = new Set(a)
    b = new Set(b)
    let diferentes = a.difference(b);
    return (diferentes.size == 0)
};
console.log(sonIguales(conjunto1,conjunto2));
console.log(sonIguales(conjunto1,conjunto3));

// Ej 7

const texto = "Hola mundo mundo de JavaScript";

const contarPalabrasUnicas = (x) =>{
    x = x.split(" ");
    x = new Set(x);
    return console.log(x.size);
};
console.log(contarPalabrasUnicas(texto));

// Ej 8

let invitados = new Set();

const agregarInvitado = (Add) => {
    let n = prompt('Ingrese un nombre:').trim();
    if (Add.has(n)) {
        console.log(`El nombre "${n}" ya fue agregado.`);
    } else {
        Add.add(n);
        console.log(`El nombre "${n}" fue agregado correctamente.`);
    }
};

const eliminarInvitado = (Del) => {
    let n = prompt('Ingrese el nombre a borrar de la lista de invitados:').trim();
    if (Del.has(n)) {
        Del.delete(n);
        console.log(`El nombre "${n}" fue eliminado de la lista.`);
    } else {
        console.log(`El nombre "${n}" no está en la lista.`);
    }
};

const mostrarInvitados = (show) => {
    if (show.size === 0) {
        console.log('La lista de invitados está vacía.');
    } else {
        let lista = Array.from(show);
        console.table(lista);
    }
};

// Ejecución de funciones
agregarInvitado(invitados);
agregarInvitado(invitados);
agregarInvitado(invitados);
eliminarInvitado(invitados);
mostrarInvitados(invitados);
