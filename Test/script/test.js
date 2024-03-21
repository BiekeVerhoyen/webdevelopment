const setup = () => {

    veranderStaat()

    }
const veranderStaat = () => {
    let staatKip = document.getElementById("staat");
    let afbeeldingen = document.getElementsByClassName("hidden")
    let afbeelding = afbeeldingen[0]

    if(staatKip.selected.value === "metEi"){
        afbeelding.className = ""
    }
    else if(staatKip.value.selected === "ZonderEi"){
        afbeelding.className = "with-egg"
    }
    else {
        afbeelding.className = "hidden"
    }
const telLetter = ()=>{
    let inputLetter = document.getElementById("note")
    let letter = document.getElementById("letter")
        let output = "hierboven een kip "
        inputletter.innerHTML = output
    }
}
window.addEventListener("load", setup);