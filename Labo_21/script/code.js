let global = {
    INDEX_PERSOON: -1,
}
let personen = [

];


const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", showData)
    for(let i =0; i<personen.length ; i++){
        let option = document.createElement("option")
        option.text = personen[i].voornaam + " " + personen[i].familienaam;
        lstPersonen.add(option)
    }


};

const showData =(event) =>{
    let lstPersonen = document.getElementById("lstPersonen");
    let persoonIndex = lstPersonen.selectedIndex;
    let persoon = personen[persoonIndex];
    global.INDEX_PERSOON = persoonIndex;
    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam
    let date = persoon.geboorteDatum;
    document.getElementById("txtGeboorteDatum").value = new Date(date).toLocaleDateString('en-ca')
    document.getElementById("txtEmail").value = persoon.email
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen

}


const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");


    valideer();
    let lstPersonen = document.getElementById("lstPersonen")
    if (document.getElementsByClassName("invalid").length === 0) {


        let persoon = {
            voornaam: document.getElementById("txtVoornaam").value,
            familienaam: document.getElementById("txtFamilienaam").value,
            geboorteDatum: document.getElementById("txtGeboorteDatum").value,
            email: document.getElementById("txtEmail").value,
            aantalKinderen: document.getElementById("txtAantalKinderen").value,
        }
        if (global.INDEX_PERSOON === -1) {
            let option = document.createElement("option")
            option.text = persoon.voornaam + " " + persoon.familienaam;
            lstPersonen.add(option);
            personen.push(persoon)
        } else {
            let persoonIndex = global.INDEX_PERSOON;
            personen[persoonIndex] = persoon;
            let selectedPerson = lstPersonen[global.INDEX_PERSOON];
            selectedPerson.text = persoon.voornaam + " " + persoon.familienaam;

        }
    }
    }

    const bewerkNieuwePersoon = () => {
        console.log("Klik op de knop nieuw");

        document.getElementById("txtVoornaam").value = ""
        document.getElementById("txtFamilienaam").value = ""
        document.getElementById("txtGeboorteDatum").value = ""
        document.getElementById("txtEmail").value = ""
        document.getElementById("txtAantalKinderen").value = ""


        global.INDEX_PERSOON = -1;
    };



window.addEventListener("load", setup);