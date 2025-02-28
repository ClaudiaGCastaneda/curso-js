// Otro Array Method que quiero mostrarte es  .reduce

// Si buscas la definición de que es una función reduce te dirá que es una función reductora...

// Pero basicamente es tomar una gran cantidad de datos y entregar un resultado..

// Supongamos que tenemos nuestro carrito de compras y queremos decirle al usuario cuanto es el total a pagar...




const carrito = [
    { producto: 'Monitor 20 Pulgadas', precio: 500},
    { producto: 'Televisión 50 Pulgadas', precio: 700},
    { producto: 'Tablet', precio: 300},
    { producto: 'Audifonos', precio: 200},
    { producto: 'Teclado', precio: 50},
    { producto: 'Celular', precio: 500},
    { producto: 'Bocinas', precio: 300},
    { producto: 'Laptop', precio: 800},
];

// Con un foreach lo podrías hacer asi...

let total = 0;
carrito.forEach( producto => total += producto.precio );
//console.log(total);

// Puedes ver que si bien no se ve mal, podemos tenerlo todo en una sola linea con un .reduce
                            
                            // total, actual
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0); //0 es el inicio
//console.log( resultado );


const entero = 9875;

const array = entero.toString().split('');
//console.log ( array);

let sum = array.reduce(( total, numero) => total + Number(numero), 0);
//console.log('sum ' + sum);
//console.log(sum.toString().length);

const superDigit = (n, i) => { 
    console.log(`Datos de entrada: ${k} ${i}` );

    let j = 0;
    let newNumber  = '';

    while ( j  < i){
        newNumber =  newNumber.toString().concat(n);
        j++;
    }

    console.log('newNumber antes del do ' + newNumber);


    do {
        console.log('newNumber ' + newNumber) ;
       // const digitsArray = newNumber.toString().split('');
        newNumber = newNumber.toString().split('').reduce((total, numero) => total + parseInt(numero), 0);
        console.log(`vuelta: ${l} ${newNumber} ${newNumber.toString().length}` );

    } while( newNumber >= 10);
    

    console.log('the madig digit is ' + newNumber);
    
    // while (totalNumeros >= 1){

    //    console.log('tamaño mayor a uno');

    //     totalNumeros = sum.toString().length;

    // }


    //console.log(`sum ${sum}`);
    //console.log(`totalNumeros ${totalNumeros}`);

    



};


superDigit(9875, 2);

