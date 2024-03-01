const setup = () => {
    let btnherbereken=document.getElementById("btnHerbereken");

    btnherbereken.addEventListener("click", herbereken);}
const herbereken = () => {
    let aantallen = document.getElementsByClassName("aantal");
    let subtotalen = document.getElementsByClassName("subtotaal")
    let prijzen = document.getElementsByClassName("prijs")
    let btw = document.getElementsByClassName("btw")
    let totaal = document.getElementById("totaal")

    let subtotaal1 = (parseFloat(prijzen[0].textContent) * aantallen[0].value * (1+ (parseFloat(btw[0].textContent))/100)).toFixed(2);
    let subtotaal2 = (parseFloat(prijzen[1].textContent) * aantallen[1].value * (1+ (parseFloat(btw[1].textContent))/100)).toFixed(2);
    let subtotaal3 = (parseFloat(prijzen[2].textContent) * aantallen[2].value * (1+ (parseFloat(btw[2].textContent))/100)).toFixed(2);
    let totaal1 = (parseFloat(subtotaal1) + parseFloat(subtotaal2) + parseFloat(subtotaal3)).toFixed(2);

    subtotalen[0].innerHTML = subtotaal1 + " Eur"
    subtotalen[1].innerHTML = subtotaal2 + " Eur"
    subtotalen[2].innerHTML = subtotaal3 + " Eur"

    totaal.innerHTML = totaal1 + " Eur"
}


window.addEventListener("load", setup);