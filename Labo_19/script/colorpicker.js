const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    let btn = document.querySelector("button");
    btn.addEventListener("click", save);
    for(let i = 0 ; i<sliders.length; i++){
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    update();

}

const update = () => {
    let sliders = getSliderValues()
    let blok = document.querySelector(".blok");
    blok.style.backgroundColor =  `rgb(${sliders[0]}, ${sliders[1]}, ${sliders[2]})`
    setTekst(sliders);

}


const getSliderValues = () => {
    let sliders = document.getElementsByClassName("slider");
    let array = [];
    for (let i = 0; i<sliders.length; i++){
        array.push(parseInt(sliders[i].value));}
    return array
}

const setSliderValues = (colors) =>{
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i<colors.length; i++){
        sliders[i].value = colors[i];
    }

}
const save = () => {
    createBlock()

}

const setTekst = (colors) =>{
    let tekstRood = document.getElementById("red");
    let tekstGroen = document.getElementById("green");
    let tekstBlauw = document.getElementById("blue");

    tekstRood.innerHTML = colors[0];
    tekstGroen.innerHTML = colors[1];
    tekstBlauw.innerHTML = colors[2];
}

const createBlock = () => {
    let sectionColors = document.getElementById("colors");
    // kleurblok aanmaken
    let divBlok = document.createElement("div");
    divBlok.className = "blok";
    divBlok.style.borderRadius = "0px"
    // kleurblok opvullen met kleur
    let sliders = getSliderValues()
    let colorBlok =  `rgb(${sliders[0]}, ${sliders[1]}, ${sliders[2]})`
    divBlok.style.backgroundColor = colorBlok;
    //kleurblok een id meegeven
    divBlok.setAttribute("data-color",  colorBlok);
    sectionColors.appendChild(divBlok);
    divBlok.addEventListener("click", changeColor)
    // kruisbutton maken
    let btnCross = document.createElement("button");
    btnCross.textContent = "x"
    divBlok.appendChild(btnCross);
    //kruisbutton een zelfde id meegeven
    btnCross.setAttribute("data-id", colorBlok);
    btnCross.style.float = "right";
    btnCross.addEventListener("click", deleteBlok);

}

const deleteBlok = (event) => {
    let sectionColors = document.getElementById("colors");
    let toDelete = event.target.parentElement;
    sectionColors.removeChild(toDelete);
    event.stopPropagation();

}

const changeColor = (event) => {
    let selectedBlok = event.currentTarget
    let blok = document.querySelector(".blok");
    let colorSliders = selectedBlok.getAttribute("data-color");
    blok.style.backgroundColor = colorSliders;
    let colors = splitUpColor(colorSliders);
    setTekst(colors);
    setSliderValues(colors);
}

const splitUpColor = (color) =>{
    return  color.slice(4, -1).split(", ");

}
window.addEventListener("load", setup);

