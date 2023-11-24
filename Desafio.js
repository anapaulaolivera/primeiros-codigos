function seq(n){
    return n < 1 ?[]:[...seq(n-1), n];
}
function mostrarSeq(array){
    var texto ="";
    for (var i = 0; i<array.length; i++){
        texto += array[i]+" ";
    }
    document.write(texto + "<br>");
}
document.write("Turma");
mostrarSeq(seq(5));
    document.write("Ana Paula");
    for (var j = 2; j <=6; j++){
        mostrarSeq(seq(j));
    }
    