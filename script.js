function numeros(valor){
    document.getElementById('resultado').value += valor;
}

function operacao(){
    var opera = document.getElementById('resultado').value;
    if (opera == 0){
        document.getElementById('resultado').value = "sim operacao";
    } else {
        document.getElementById('resultado').value = eval(opera);
    }
}

function resetar(){
    document.getElementById("resultado").value = " ";
}