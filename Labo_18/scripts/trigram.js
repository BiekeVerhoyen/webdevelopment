const setup = () => {
    verander()
}
const  verander = (input) => {

    let word = "onoorbaar"
    for(let i = 0; i<word.length-2; i++){
        console.log(word.substring(i, i+3));
    }
}

window.addEventListener("load", setup);