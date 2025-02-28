//Ejercicio para obtener el número magico

const superDigit = (n, i) => { 
    console.log(`Datos de entrada: ${n} ${i}` );

    let j = 0;
    let newNumber  = '';

    while ( j  < i){
        newNumber =  newNumber.toString().concat(n);
        j++;
    }

    do {

        newNumber = newNumber.toString().split('').reduce((total, numero) => total + parseInt(numero), 0);

    } while( newNumber >= 10);
    

    //console.log('the madig digit is ' + newNumber);
    return `the magic number is ${newNumber}` ;


};

console.log(superDigit(9875, 2));
//superDigit(9875, 2);

