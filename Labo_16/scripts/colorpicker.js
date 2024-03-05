const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for(let i = 0 ; i<sliders.length; i++){
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    update()
}
const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let blok = document.getElementsByClassName("blok")
    let sliderRed = parseInt(sliders[0].value);
    let sliderGreen = parseInt(sliders[1].value);
    let sliderBlue = parseInt(sliders[2].value);

    let tekstRood = document.getElementById("red");
    let tekstGroen = document.getElementById("green");
    let tekstBlauw = document.getElementById("blue");

  tekstRood.innerHTML = sliders[0].value;
  tekstGroen.innerHTML = sliders[1].value;
  tekstBlauw.innerHTML = sliders[2].value;
  blok[0].style.backgroundColor =  `rgb(${sliderRed}, ${sliderGreen}, ${sliderBlue})`

}
window.addEventListener("load", setup);

