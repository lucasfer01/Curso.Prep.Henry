// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
 var arregloObjeto = Object.entries(objeto);
 return arregloObjeto;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var contador = {};
  for(let i = 0; i < string.length; i++){
    if(Object.keys(contador).includes(string[i])){
        contador[string[i]] ++;
    }else{
      contador[string[i]] = 1;
    }
  }
  return contador;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let minusculas = '';
  let cadenaOrdenada = '';
    for(let i = s.length; i > 0; i--){
      if(s[i-1] === s[i-1].toUpperCase()){
        cadenaOrdenada = s[i-1] + cadenaOrdenada;
      }else{
        minusculas = s[i-1] + minusculas;
      }
  }
  cadenaOrdenada += minusculas;
  return cadenaOrdenada;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let strReverse = '';
  for(let i = str.length; i > 0; i--){
      strReverse += str[i-1];
  }
  var cadenaMirror = (strReverse.split(' ')).reverse();
  
  return cadenaMirror.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroInvertido = '';
  numero = numero.toString();
  for(let i = numero.length; i > 0; i--){
    numeroInvertido = numeroInvertido + numero[i-1];
  }
  if(numero == numeroInvertido){
    return 'Es capicua';
  }else{
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevaCadena = '';
  for(let i = 0; i < cadena.length; i++){
    if(cadena[i].toLowerCase() !== "a" && cadena[i].toLowerCase() !== "b" && cadena[i].toLowerCase() !== "c"){
    nuevaCadena += cadena[i];
    }
  }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let arrayOrdenado = arr.sort(function(a,b){
            return a.length - b.length;
  })
  return arrayOrdenado;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let int = [];
  for(let i = 0; i < arreglo1.length; i++){
    for(let i2 = 0; i2 < arreglo2.length; i2++){
      if(arreglo1[i] === arreglo2[i2]){
          int.push(arreglo1[i]);
      }
    }
  }
  return int;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

