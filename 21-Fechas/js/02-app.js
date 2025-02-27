// MomentJS
const fechaActual = moment();
const fechaDeNacimiento = moment("07-07-1987", "DD-MM-YYYY");

moment.locale('es');  

//console.log(  "Hola " + moment().format('MMMM Do YYYY, h:mm:ss a', diaHoy) );

// console.log(fechaDeNacimiento.format("DD-MM-YYYY"));
// console.log(fechaActual.format("DD-MM-YYYY"));

const edadEnAnios = fechaActual.diff(fechaDeNacimiento, 'years');
const fechaRestante = fechaDeNacimiento.add(edadEnAnios, 'years');
const diasRestantes = fechaActual.diff(fechaRestante, 'days');

// console.log("Edad hola ", edadEnAnios);
// console.log(`${edadEnAnios} años ${diasRestantes} días`);


const horaActual = moment("09:50:25", "hh:mm:ss");;
const horaAnterior = moment("10:50:25", "hh:mm:ss");

console.log(horaActual.format("hh:mm:ss") , horaAnterior.format("hh:mm:ss"));
const diff = horaActual.diff(horaAnterior, 'hours');
console.log(`La diferencia de horas es: ${diff} `);

if( horaAnterior < horaActual){
    console.log("La hora anterior es menor");

} else {
    console.log("la hora actual es menor");
}