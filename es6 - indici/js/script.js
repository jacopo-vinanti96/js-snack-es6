
let min = 3;
let max = 4;
const userArray = [ 'pappa', 'ciccia', 1, 2, 'francesco', 'giagguaro' ]

// function printInterval (array, min, max) {
//   array.map( (element) => {
//     if ( array.indexOf(element) < max && array.indexOf(element) > min ) {
//       return element;
//     }
//   });
// }

// const interval = printInterval( userArray, num1, num2);

let interval = userArray.filter( element => userArray.indexOf(element) <= max && userArray.indexOf(element) >= min );




console.log( `L' intervallo è composto da: ${interval}` );
