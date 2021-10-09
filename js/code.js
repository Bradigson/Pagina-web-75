let back = document.querySelector("#back");
let particle = document.querySelector("#particles-js");

const generadorRandonColor = ()=>{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    return rgbColor;
}


const setBackground = ()=>{
    const  newColor = generadorRandonColor();
    particle.style.backgroundColor = newColor;
}

back.addEventListener("click", setBackground);



//Counter
let sum = document.querySelector("#mas");
let menos = document.querySelector("#menos");
let numero = document.querySelector(".num");

let aumentar = 0;
let disminuir = 0;
sum.addEventListener("click",()=>{
    aumentar +=1;
    numero.textContent = aumentar;
    numero.classList.add("yellow")

});
menos.addEventListener("click",()=>{
    disminuir = disminuir - 1;
    numero.textContent = disminuir;
})
