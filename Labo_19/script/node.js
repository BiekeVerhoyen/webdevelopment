const setup = () => {
    veranderTekst();

}

const veranderTekst = () => {
     let paragrafen = document.querySelector("p");
     paragrafen.textContent = "Good Job!"
}
window.addEventListener("load", setup);