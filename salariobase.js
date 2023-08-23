var salario=0;
var salarioBase=parseFloat(prompt("Salário"));
var horaSemanalTrabalhada=parseFloat(prompt("Horas Semanais trabalhadas"));
var hora=salarioBase/160;
var horaExtra=hora*1.5;
if(horaSemanalTrabalhada >=40){
    salario=salarioBase+(horaExtra*(horaSemanalTrabalhada-40));
    alert(salario);
}
else{
    salario=salarioBase-(horaSemanalTrabalhada*hora);
    alert(salario);//alert("R$"+salario.toFixed(2));
}

