const normal = document.getElementById("normal");
const pizza = document.getElementById("pizza");

const estados = {
    normal: "normal.png",
    bravo: "bravo.png",
    feliz: "feliz.png",
    comendo: "comendo.png",
    morto: "morto.png",
}

let contador = 0;
let intervalo = null;
let time_click = null;
let time_out = null;

function controlador (){
    if(intervalo) clearInterval(intervalo)

        intervalo = setInterval(() =>{

            contador++;

            console.log("tempo:",contador);

            if(contador == 30){
                normal.src = estados.bravo
            }
            if(contador == 60){
                normal.src = estados.morto
            }
        }, 1000);    
}

controlador();