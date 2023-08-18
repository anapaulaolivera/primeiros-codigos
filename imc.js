function imc(peso,altura){
    return (peso/(altura*altura));
}
let peso = parseFloat(prompt("Digite o peso"));
let altura = parseFloat(prompt("Digite  altura"));
alert(imc(peso,altura));