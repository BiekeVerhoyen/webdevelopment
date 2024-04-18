let global ={
    MIJN_VERJAARDAG:'1995-03-10'

}

const setup = () => {
    berekenDatum();
}

const berekenDatum =() => {
    let dateNow = new Date();

    let verjaardag = new Date(global.MIJN_VERJAARDAG)

    verjaardag.getMonth() + 1;
    let datumVerschil = new Date(dateNow - verjaardag)
    let aantalDagen = Math.floor(datumVerschil / (1000 * 3600 * 24));

      console.log(aantalDagen);


}
window.addEventListener("load", setup);