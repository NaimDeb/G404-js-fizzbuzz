function fizzbuzz(nombre) {
  if (nombre % 3 == 0 && nombre % 5 !== 0) {
    console.log("fizz");
  }
  if (nombre % 5 == 0 && nombre % 3 !== 0) {
    console.log("buzz");
  }
  if (nombre % 5 == 0 && nombre % 3 == 0) {
    console.log("fizzbuzz");
  }
  if (nombre % 5 !== 0 && nombre % 3 !== 0) {
    console.log(nombre);
  }
}

fizzbuzz(2);
fizzbuzz(5);
fizzbuzz(6);
fizzbuzz(11);
fizzbuzz(30);
