//EJERCICIO 38
let nombre = "Mariana";
console.log(nombre.length)


//EJERCICIO 39
let miNombre = "Mariana";
let miApellido = "Cairo";
console.log(`Mi nombre es ${miNombre} y tiene ${miNombre.length} letras.
Mi apellido es ${miApellido} y tiene ${miApellido.length} letras.`)


// EJERCICIO 40
let texto = "Usando el método ";
let metodo = "concat";
console.log(texto.concat(metodo));


//EJERCICIO 41
texto = "HOLA MUNDO";
console.log(texto.toLowerCase());


//EJERCICIO 42
texto = "hola mundo";
console.log(texto.toUpperCase());



//EJERCICIO 43
let textoNuevo = "the drak knight"
let primerLetra = textoNuevo.charAt(0);
let segundaLetra = textoNuevo.charAt(4);
let tercerLetra = textoNuevo.charAt(9);
let resultado = primerLetra.concat(segundaLetra,tercerLetra).toUpperCase();
console.log(resultado);


//EJERCICIO 44
texto = "HOLA";
resultado = texto.charAt(3) + texto.charAt(2) + texto.charAt(1) + texto.charAt(0);
console.log(resultado.toLowerCase());


//EJERCICIO 45
let mensaje = 'Ada Lovelace fue la ayudante de Charles Babbage.';
let programadora = mensaje.slice(0,12);
console.log(programadora.concat(" ", "la primera programadora de la historia."));

