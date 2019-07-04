//Stesso esercizio ma con output in ul
var elemento;

elemento = document.getElementById("stampa").innerHTML;


for (var i = 1; i < 101; i++) {
  if (i % 15 == 0) {
    elemento = document.getElementById("stampa").innerHTML;
    document.getElementById("stampa").innerHTML = elemento + '<li>' + "FizzBuzz" + '</li>';
  } else if (i % 3 == 0) {
    elemento = document.getElementById("stampa").innerHTML;
    document.getElementById("stampa").innerHTML = elemento + '<li>' + "Fizz" + '</li>';
  } else if (i % 5 == 0) {
    elemento = document.getElementById("stampa").innerHTML;
    document.getElementById("stampa").innerHTML = elemento + '<li>' + "Buzz" + '</li>';
  } else {
    elemento = document.getElementById("stampa").innerHTML;
    document.getElementById("stampa").innerHTML = elemento + '<li>' + i + '</li>';
  }
}
