const setup = () => {
}
window.addEventListener("load", setup);

let familieleden = ['mama', 'papa', 'zus', 'broer', 'oma', 'opa'];
console.log(familieleden.length);
console.log(familieleden[0]);
console.log(familieleden[2]);
console.log(familieleden[4]);
let voegNaamToe =  () => {
    let naam = window.prompt('Geef naam familielid op');
    familieleden.push(naam);
    console.log(familieleden);
}
voegNaamToe();
console.log(familieleden.join());