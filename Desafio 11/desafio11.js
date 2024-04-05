var dataJunta = prompt("Digite sua data de nascimento em formato “yyyy-MM-dd”");

var dataSeparada = dataJunta.split("-");

var ano = (dataSeparada[0]);
var mes = (dataSeparada[1])-1;
var dia = (dataSeparada [2]);

var dataSeparada = new Date(ano,mes,dia);

var anoAtual = new Date();

var idade = anoAtual.getFullYear() - dataSeparada.getFullYear();
if (anoAtual.getMonth() < mes || anoAtual.getMonth() == mes && anoAtual.getDay() < dia ){
     idade --;
}

 alert ("Sua idade é " + idade);
