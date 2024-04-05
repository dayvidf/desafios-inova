
const numero = 12; 

let fatorial = 1;

if (numero === 0 ){
alert ("Número não é valido.")
}
for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}


alert("O fatorial de " + numero + " é " + fatorial);