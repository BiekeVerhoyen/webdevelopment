const setup = () => {
    verander()
}
const  verander = (input) => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel"
    let gesplitsteTekst = tekst.split(" ")
    for (let i = 0; i < gesplitsteTekst.length; i++) {
        if (gesplitsteTekst[i].localeCompare("de") === 0 || gesplitsteTekst[i].localeCompare("De") === 0) {
            gesplitsteTekst[i] = "het";
        }

    }
    var output = gesplitsteTekst.join(' ')+'.';
    console.log(output);
}
window.addEventListener("load", setup);