/* Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi "Buzz". 
Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz". */

let numeriArray = [];

/* creo cento numeri da stampare  */
for( let i = 1; i <= 100; i++){
    numeriArray.push(i);
}

for( let i = 0; i <= numeriArray.length; i++){
    /* controllo che tipi di numero sono */
    if((numeriArray[i] % 3 == 0) && (numeriArray[i] % 5 == 0)){
        numeriArray[i] = 'FizzBuzz';
    }
    else if(numeriArray[i] % 5 == 0){
        numeriArray[i] = 'Buzz';   
    }
    else if(numeriArray[i] % 3 == 0){
        numeriArray[i] = 'Fizz';
    } 
}


alert(numeriArray);