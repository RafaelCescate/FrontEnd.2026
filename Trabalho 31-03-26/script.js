const rostinho = document.getElementById("rostinho");
const alimento = document.getElementById("pizza");

const estados = {
    normal: "normal.png",
    bravo: "bravo.png",
    feliz: "feliz.png",
    comendo: "comendo.png",
    morto: "morto.png",
}

const cenarioDia = "cenarioDia.png";
const cenarioNoite = "cenarioNoite.png";

let horas = 0;
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
                rostinho.src = estados.bravo
            }
            if(contador == 60){
                rostinho.src = estados.morto
            }
        }, 1000);    
}

function alimentar (){
    
    rostinho.src= estados.comendo
    contador= 0;
    console.log("comeu");

    if(time_click) clearInterval(time_click)

        time_click = setTimeout( () =>{
            rostinho.src = estados.feliz
            time_out = setTimeout(() => {
                rostinho.src = estados.normal
            },2000);
        },1000);
}

function atualizarFundo() {
    if (horas) clearInterval(horas);

    horas = setInterval(() => {
    horas++;
    

    if (horas >= 120) {
        document.body.style.backgroundImage = `url('${cenarioNoite}')`;
        console.log("Noite");
    } else {
        document.body.style.backgroundImage = `url('${cenarioDia}')`;
        console.log("Dia");
    }
    if(horas >=240) horas =0;

    }, 100);
}

controlador();
atualizarFundo();