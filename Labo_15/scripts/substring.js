const setup = () => {
    let btnSubstring=document.getElementById("btnSubstring");

    btnSubstring.addEventListener("click", makeSubstring);
}
window.addEventListener("load", setup);

const makeSubstring = () => {
    let txtInput = document.getElementById("txtInput").value;
    let nbInputStart = document.getElementById("nbInputStart").value;
    let nbInputEnd = document.getElementById("nbInputEnd").value;
    let txtOutput = document.getElementById("txtOutput")
    txtOutput.innerHTML = txtInput.substring(nbInputStart, nbInputEnd);

}
