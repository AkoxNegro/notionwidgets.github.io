


let numero = document.getElementById("contar");
numero.innerText = localStorage.getItem("contar") || "0";

function incrementar(){
    numero.innerText = parseInt(numero.innerText) + 1;
    guardarNum();
}

function decrementar(){
    if(numero.innerText >'0')
    {
        numero.innerText = parseInt(numero.innerText) -1;
    }
    else{
        numero.innerText = '0';
    }
    guardarNum();
}

function reset0(){
    numero.innerText = '0';
     guardarNum();
}

function guardarNum(){
    localStorage.setItem("contar", numero.innerText);
}
