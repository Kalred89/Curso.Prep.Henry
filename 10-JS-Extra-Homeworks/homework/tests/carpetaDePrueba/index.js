const string = "adsjfdsfsfjsdjfhacabcsbajda";

    let objetoString = {};
    
  
    for (let i = 0; i < string.length; i++ ){
        let contador = 1;
        
        for(let n = 1; n < string.length; n++ ){

            if ( string[i] === string[n] ){
                contador++;
            }

        }
        objetoString[string[i]] = contador;  
    };
    console.log(objetoString);
