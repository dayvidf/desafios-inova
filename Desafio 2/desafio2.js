

let numerosLoteria = [15, 8, 90, 75, 102, 6, 2]

numerosLoteria.sort(function(a, b){return a - b}); 

let menorNumero = numerosLoteria[0];

let maiorNumero = numerosLoteria[numerosLoteria.length - 1];

alert ("os numeros da loteria são " + numerosLoteria + " O menor numero é : " + menorNumero + " e o maior numero é: " + maiorNumero);

