let global = {
    sliders: [],
    colorBlocks:[],
    count : 0,
}
const setup = () => {
  //localStorage.clear()
    let sliders = document.getElementsByClassName("slider");
    let btn = document.querySelector("button");
    btn.addEventListener("click", save);
    for(let i = 0 ; i<sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    if(localStorage.getItem("sliders")){
        global.sliders = localStorage.getItem("sliders").split(",");
        setSliderValues(global.sliders)}
    else{
        let array = [100,50,50]
        setSliderValues(array)}
    update();


    if(localStorage.getItem("colorblocks")){
       global.colorBlocks= localStorage.getItem("colorblocks").split("),")
        let i = 0;
        while(i<global.colorBlocks.length-1){
            global.colorBlocks[i]= global.colorBlocks[i] + ")"

        i++}
        for(let i = 0; i<global.colorBlocks.length ; i++){
                        createBlock(global.colorBlocks[i])

            }
        }


}

const update = () => {
     getSliderValues()


    let blok = document.querySelector(".blok");
    blok.style.backgroundColor =  `rgb(${global.sliders[0]}, ${global.sliders[1]}, ${global.sliders[2]})`
    setTekst(global.sliders);
       localStorage.setItem("sliders", global.sliders)


}


const getSliderValues = () => {
    let sliders = document.getElementsByClassName("slider");
    let array = [];
    for (let i = 0; i<sliders.length; i++){
        array.push(parseInt(sliders[i].value));}
    global.sliders = array;
    localStorage.setItem("sliders", global.sliders)
    return array
}

const setSliderValues = (colors) =>{
    global.sliders = colors;
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i<colors.length; i++){
        sliders[i].value = colors[i]
    }

}
const save = () => {
    createBlock("new")

}

const setTekst = (colors) =>{
    let tekstRood = document.getElementById("red");
    let tekstGroen = document.getElementById("green");
    let tekstBlauw = document.getElementById("blue");

    tekstRood.innerHTML = colors[0];
    tekstGroen.innerHTML = colors[1];
    tekstBlauw.innerHTML = colors[2];
}

const createBlock = (rgb) => {

    let sectionColors = document.getElementById("colors");
    // kleurblok aanmaken
    let divBlok = document.createElement("div");
    divBlok.className = "blok";
    divBlok.style.borderRadius = "0px"
    // kleurblok opvullen met kleur
    let colorBlock = "";
    if(rgb==="new"){
        divBlok.setAttribute("id", sectionColors.length+1)
    let sliders = getSliderValues()
    colorBlock =  `rgb(${sliders[0]}, ${sliders[1]}, ${sliders[2]})`;
    global.colorBlocks.push(colorBlock);}
    else{
        colorBlock = rgb
    }

    localStorage.setItem("colorblocks", global.colorBlocks)
    divBlok.style.backgroundColor = colorBlock;
    //kleurblok een id meegeven
    divBlok.setAttribute("data-color",  colorBlock);

    sectionColors.appendChild(divBlok);
    divBlok.addEventListener("click", changeColor)
    // kruisbutton maken
    let btnCross = document.createElement("button");
    btnCross.textContent = "x"
    divBlok.appendChild(btnCross);
    btnCross.id= global.count
    btnCross.style.float = "right";
    btnCross.addEventListener("click", deleteBlok);
    global.count++

}

const deleteBlok = (event) => {

    let sectionColors = document.getElementById("colors");
    let btnCross = document.getElementsByTagName("button");
    let toDelete = event.target.parentElement;
    let id = (parseInt(event.target.id)).toString()
    let array = global.colorBlocks;
    if(id.localeCompare("0") === 0){
      array.shift()
    }
    else if (id.localeCompare(global.count.toString())===0){
  array.pop();
    }
    else{
       array.splice(parseInt(id), 1)}
global.colorBlocks = array;
localStorage.setItem("colorblocks", global.colorBlocks)
sectionColors.removeChild(toDelete);
event.stopPropagation();
global.count = global.count--;

for(let i = 0; i<btnCross.length; i++){
    btnCross[i].setAttribute("id", i.toString() )
}

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

