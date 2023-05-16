const contador = document.getElementById("contar");
const sumar = document.getElementById("incr");
const restar = document.getElementById("decr");
const reset = document.getElementById("reset");

let numero = 0;
localStorage.setItem("num",numero);
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

locaStorage.getItem(numero);

