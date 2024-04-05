let quantidadeDiasAtraso = 7;
let valorMulta = 0.50;

const valorTotalMulta = quantidadeDiasAtraso*valorMulta;

alert("A quantidade de dias de atraso é " + quantidadeDiasAtraso + ", o valor da multa por dia de atraso é R$ " + valorMulta.toFixed(2));
alert("O valor total da multa é R$" + valorTotalMulta.toFixed(2));