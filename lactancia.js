const carrusel = document.querySelector(".carrusel-items");

let intervalo = null;
// velocidad = step
let step = 1;
// valor maximo del carrusel
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;

const start = () => {
    intervalo = setInterval(function (){
        carrusel.scrollLeft = carrusel.scrollLeft + step;
        // esta condicional es para que el scroll se devuelva
        if(carrusel.scrollLeft === maxScrollLeft) {
            step = step * -1;
        } else if(carrusel.scrollLeft ===0){
            step = step* 1;
        }
        
    }, 10);
}

const stop = () =>{
    clearInterval(intervalo);
}
// cuando el cursor este encima, detengase
carrusel.addEventListener("mouseover", () => {
    stop()
})
// cuando el cursor este encima, segir
carrusel.addEventListener("mouseout", () => {
    start()
})
start();