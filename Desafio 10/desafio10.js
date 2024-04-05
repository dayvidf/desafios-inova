const texto = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";



function contarLetrasMaiusculas (texto){
    let contador = 0
    for (let i=0; i < texto.length; i++){
    const caractere = texto [i];

    if (caractere >= "A" && caractere <= "Z"){
        contador ++;
    }
    
}
return contador
}


alert ("A quantidade de letras maiusculas na frase é :" + contarLetrasMaiusculas(texto));


