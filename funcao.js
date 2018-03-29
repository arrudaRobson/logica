function exibeData() {
    document.getElementById("demo").innerHTML = Date();
}

function exibir(par1){
    if (par1 == false) {
    document.getElementById("minhaDiv").style.display = "none";
    document.getElementById("btnEsconde").style.display = "none";
    document.getElementById("btnMostra").style.display = "inline";
    }
}
