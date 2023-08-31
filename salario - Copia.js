
var salario= 0;
var salariobase=parseFloat(prompt("salario"));
var horasemanaltrabalhada = parseFloat(prompt("hora semanais trabalhadas"));
var hora = salariobase/160;//160 == 40h carga trabalhada*4 semanas do mes(aproximado)
var horaextra=hora*1.5;
if(horasemanaltrabalhada>=40){
    salario = salariobase+(horaextra*(horasemanaltrabalhada-40));
  salarioliquido=salario*0.975;//iss calcula o 2,5% 
  alert("salario bruto é de R$"+ salario.toFixed(2));
alert("salario liquido é de R$ "+ salarioliquido.toFixed(2));
}
else{
    salario=salariobase-(horasemanaltrabalhada*hora);
   salarioliquido = salario*0.975;
   alert("salario bruto é de R$"+salario.toFixed(2));
   alert("salario liquido é de R$"+salarioliquido.toFixed(2));
   alert(``)
}

