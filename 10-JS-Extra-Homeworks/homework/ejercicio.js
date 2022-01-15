    //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

    let string = "soyHENRY";
    let array = string.split('');
    let arrayMayusculas = [];
    let arrayMinusculas = [];
    
   for (let i= 0; i < array.length; i++){
    
    if ( array[i] === array[i].toUpperCase() ){
        // let letraMayuscula = array[i];
        // arrayMayusculas.push(letraMayuscula);
        arrayMayusculas.push(array[i]);
    }else{
        arrayMinusculas.push(array[i]);
    }
   };
 
   string = arrayMayusculas.join('') + arrayMinusculas.join('');
    
   console.log(string);


   "soyHENRY"
   "HENRY"