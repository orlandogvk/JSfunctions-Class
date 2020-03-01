/*
//Funcion anonima
var producto = function (a,b){return a*b;}
var resultado=producto(3,6);
alert(resultado);

//Constructor Function()
var mifuncion=new Function("a","b","return a*b;");
var resultado2=mifuncion(5,7);
alert(resultado2);

//Funciones anonimas autoinvocadas
(function(nombre,resultado2){alert(nombre + " Hola, eres una bestia! "+resultado2);}("Orlando",mifuncion(5,7)));



numeros=[3, 3, 2, 10, 9];
otrosnum=[8, 2, 9, 20, 9, 1, 39, 20]
let mifuncion=(numeros)=>{
    console.log(numeros[numeros.length-1]);
};

mifuncion(numeros);
mifuncion(otrosnum);
console.log("");
console.log("Valores impares");
array1=[5, 2, 10, 3, 9];
array2= [15, 2, 10, 9, 27];
(function(arreglo){
  arreglo.forEach((item, i) => {
    if(item%2!=0){
      console.log(item*3);
    }
  });
}(array1));
console.log("Valores impares");
(function(arreglo){
  arreglo.forEach((item, i) => {
    if(item%2!=0){
      console.log(item*3);
    }
  });
}(array2));
console.log("");
console.log("Suma");
vector=[10, 30, 15, 25, 5];
let suma=0;
let valores=(vector)=>{
  vector.forEach((item, i)=>{
      suma+=item;
  });
  console.log(suma);
}
valores(vector);
console.log("");

console.log("PUNTO 1");
/*console.log(Array.from('234'));*/
/*PUNTO 1
let numero=prompt("Ingrese un numero de tres cifras: ");
if(numero>=100){
  vector=Array.from(numero);
  let valor=(vector)=>{
    var prod=1;
    var sum=0;
    vector.forEach((item, i) => {
        prod*=parseInt(item);
        sum+=parseInt(item);
    });
    console.log("Producto de los digitos: "+prod);
    console.log("Suma de los digitos: "+sum);
    console.log("Resultado: "+(prod-sum));
  }
  valor(vector);
}else{
  console.log("Debe ser un numero de tres o mas cifras");
}
console.log("");
console.log("PUNTO 2");

  let arrays=(vectorm)=>{
    let mayor=vectorm[0];
    let menor=vectorm[0];
    vectorm.forEach((item) => {
      if(item>mayor){
        mayor=item;
      }
      if(item<menor){
        menor=item;
      }
    });
    console.log("El mayor es: "+mayor);
    console.log("El menor es: "+menor);
  }
arrays([32, 30, 21, 23, 90]);

console.log("");

console.log("PUNTO 3");
let positivos=(vectorp)=>{
  console.log("Vector");
  console.log(vectorp);
  console.log("");
  const numb=Number(vectorp.join(''));  //Convertir un array a entero
  console.log('Resultado: '+(numb+1));
}

positivos([1,2,3]);
console.log("");
positivos([4,3,2,1]);

console.log("");

console.log("PUNTO 4");

console.log("");
console.log("Segunda forma");
let duplicados2=(arg)=>{
  const arreglolimpio=[];
  arg.forEach(elemento => {
    if(!arreglolimpio.includes(elemento)){
      arreglolimpio.push(elemento);
    }
  });
  console.log(arg);
  console.log('El tamaño del arreglo es '+ arreglolimpio.length+' y el arreglo quedaría de la siguiente forma: ['+arreglolimpio+']');

}

duplicados2([3,2,3,4,5,3,3,5,5,6]);
*/
//MAP FILTER REDUCE

let numeros=[2,3,4,5,9,2,4,7,5];
//Modifica propiedades a cada elemento dentro del arreglo
let arrglonumeromodi=numeros.map((numero,indice,numeros)=>{  //Nonecesitamos un ciclo
  return numero+3;
})

console.log(arrglonumeromodi);

//Filtratr los elementos que cumplan una condicion
let mayores=numeros.filter((numero,indice, numeros)=>{
   return numero>4;
})

console.log(mayores);


let unicos=numeros.filter((numero,indice, numeros)=>{
  return numeros.indexOf(numero)===indice;
});

console.log(unicos);


let reduceNumeros=numeros.reduce((acumulador,valorActual,indice,arregloNumeros)=>{
   return acumulador+valorActual;
},0);

console.log(reduceNumeros);

//Ejercicios 2

console.log("PUNTO 1");
arr=[3,2,5,6,19];
let multiPorDos=arr.map((num,indice,arr)=>{
    return num*2;
})

console.log(multiPorDos);

console.log("");
console.log("PUNTO 2");
numerosmayores= [21, 15, 8, 29, 20, 1, 79];
let valunicos=numerosmayores.filter((numero,indice, numerosmayores)=>{
  return numero>=20;
});
console.log(valunicos);

console.log("");
console.log("PUNTO 3");
vecImpares= [4, 3, 2, 3, 7, 8];
let impares=vecImpares.filter((numero,indice, vecImpares)=>{
  return numero%2!==0;
});
console.log(impares);

console.log("");
console.log("PUNTO 4");
let promedio= [5, 3, 2, 1, 8, 10];
let numer=promedio.reduce((acum,valActual,indice,promedio)=>{
    return acum+valActual;
},0);

console.log('El promedio de los numeros es: '+(numer/promedio.length));
