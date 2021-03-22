
let num1 = 2;
let num2 = 13;

function printInterval (min, max) {
  const interval = [];

  for (var i = 1; i < max - min; i++) {
    interval.push( min + i );
  }

  return interval;
}

console.log( `L' intervallo è composto da: ${printInterval(num1, num2)}` );
