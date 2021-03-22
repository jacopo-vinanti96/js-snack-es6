
var num1 = 2;
var num2 = 13;

function printInterval (min, max) {
  let interval = [];

  for (var i = 1; i < max - min; i++) {
    interval.push( min + i );
  }

  return interval;
}

console.log( `L' intervallo è composto da: ${printInterval(num1, num2)}` );
