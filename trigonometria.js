var trigonometria=prompt("Escolha\n1 Seno\n2 Cosseno\n3 Tangente");
var angulo=prompt("Digite o angulo");
switch(trigonometria){
    case'1':
alert(Math.sin((angulo * Math.PI)/180));break;
    case'2':
alert(Math.cos((angulo*Math.PI)/180));break;
    case'3':
alert(Math.tan((angulo*Math.PI)/180));break;
    default:
    alert("Opção Inválida");
}