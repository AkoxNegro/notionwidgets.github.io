const contador = document.getElementById("contar");
const sumar = document.getElementById("incr");
const restar = document.getElementById("decr");
const reset = document.getElementById("reset");


var numero = localStorage.getItem('contado') || 0; 

sumar.addEventListener("click", ()=>{
    numero++;
    contador.innerHTML = numero;
});

restar.addEventListener("click", ()=>{

    if(numero==0){}
    else{
        numero--;
        contador.innerHTML = numero;
    }

});

reset.addEventListener("click", ()=>{
    numero = 0;
    contador.innerHTML = numero;
});

