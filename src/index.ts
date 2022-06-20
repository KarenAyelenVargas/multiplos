for (let numero: number = 1; numero <= 100; numero++) {
  console.log(numero);
  if (numero % 2 === 0 || numero % 3 === 0) {
    console.log("El" + numero + "es multiplo del 2 o del 3");
  } else {
    console.log("El" + numero + "no es multiplo de 2, ni de 3");
  }
}
