// Criei a variavel com array
const numeros = [23, 16, 11, 8, 19, 14, 5, 21];
const numerosPrimos = []
exibirNumerosPrimos(numeros);

function exibirNumerosPrimos(numeros){
    
    for(let i = 0; i < numeros.length ; i++){
        const numero = numeros[i];
        if(NumerosPrimos(numero)) numerosPrimos.push(numero);
    }
}


function NumerosPrimos(numero){
    for(let divisor =2; divisor < numero; divisor++){
        if(numero % divisor === 0){
            return false;
        }
    }
    return true;
}

numerosPrimos.sort(function(a,b){return a-b});
alert ("Os numeros primos são:" + numerosPrimos);
