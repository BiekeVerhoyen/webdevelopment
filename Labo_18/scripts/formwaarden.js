const setup = () => {
    let btn = document.getElementById("btn")
    btn.addEventListener("click", toonResultaat)

}

const toonResultaat = () => {
    let  checkboxRoker = document.getElementById("roker")
    let  radiobtns = document.getElementsByName("moedertaal")
    let select = document.getElementById("buurland")
    let multiselect = document.getElementById("bestelling")
    let roker = ""
    let moedertaal = "moedertaal is onbekend"
    let buurland = ""
    let bestelling = "bestelling bestaat uit "

    // checken of wel of niet roker
    if(checkboxRoker.checked) {
        roker = "is een roker"
    }
    else {
        roker = "is geen roker"
    }
    // moedertaal checken
    for( let i =0; i<radiobtns.length; i++){
        if(radiobtns[i].checked)
            moedertaal = "moedertaal is " + radiobtns[i].value
    }
    // buurland checken
    for( let i =0; i<select.length; i++){
        if(select[i].selected)
            buurland = "favoriete buurland  is " + select[i].value
    }
    // bestelling checken
    for( let i =0; i<multiselect.length; i++){
        if(multiselect[i].selected)
            bestelling += multiselect[i].value + " "
    }
    console.log(roker)
    console.log(moedertaal)
    console.log(buurland)
    console.log(bestelling)

}
window.addEventListener("load", setup);