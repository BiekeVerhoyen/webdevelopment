const setup = () => {
    let btnValideer=document.getElementById("valideer")
    btnValideer.addEventListener("click", valideer);
    let inputField = document.getElemen
};

const valideer = () => {
    valideerVoornaam();
    valideerAchternaam();
    valideerDatum();
    valideerEmail();
    valideerKinderen()
    checkValidaties()
};

const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById("voornaam")
    let errVoornaam = document.getElementById("errVoornaam");
    let voornaam = txtVoornaam.value.trim();
    if (voornaam.length > 30) {
        txtVoornaam.className="invalid"; // invalid class instellen
        errVoornaam.innerHTML = "max. 30 karakters";
    } else {
        txtVoornaam.className="correct";
        errVoornaam.innerHTML = "";
    }
};

const valideerAchternaam = () => {
    let txtAchternaam = document.getElementById("achternaam")
    let errAchternaam = document.getElementById("errAchternaam");
    let achternaam = txtAchternaam.value.trim();
    if (achternaam.length > 50) {
        txtAchternaam.className = "invalid"; // invalid class instellen
        errAchternaam.innerHTML = "max. 50 karakters"
    } else if (achternaam.length === 0) {
        txtAchternaam.className = "invalid"; // invalid class instellen
        errAchternaam.innerHTML = "error : \"verplicht veld\"";
    } else {
        txtAchternaam.className = "correct";
        errAchternaam.innerHTML = "";
    }
}
const valideerDatum = () => {
    let datum = document.getElementById("geboortedatum")
    let errdatum = document.getElementById("errGeboortedatum")
    let pattern = /^\d{4}-\d{2}-\d{2}$/
    if (pattern.test(datum.value)) {
        datum.className = "correct"
        errdatum.innerHTML = "";
    } else {
        datum.className = "invalid"
        errdatum.innerHTML = "error : \"formaat is niet jjjj-mm-dd\"";
    }
}
    const valideerEmail = () => {
        let txtEmail = document.getElementById("email")
        let errEmail = document.getElementById("errEmail")
        let email = txtEmail.value.trim();
        let pattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (email.length === 0) {
            txtEmail.className = "invalid";
            errEmail.innerHTML = "error : \"verplicht veld\""
        } else if (!pattern.test(email)) {
            txtEmail.className = "invalid";
            errEmail.innerHTML = "error : \"geen geldig email adres\""
        } else {
            txtEmail.className = "correct";
            errEmail.innerHTML = ""
        }

}

const valideerKinderen = () => {
    let txtKinderen = document.getElementById("kinderen")
    let errKinderen = document.getElementById("errKinderen")

    if(isGetal(txtKinderen.value)) {
        let kinderen = Number(txtKinderen.value)
        if (kinderen < 0 && kinderen !== null) {
            txtKinderen.className = "invalid";
            errKinderen.innerHTML = "error : \"is geen positief getal\""
        } else if (kinderen > 99) {
            txtKinderen.className = "invalid";
            errKinderen.innerHTML = "error : \"is te vruchtbaar\""
        } else {
            txtKinderen.className = "correct";
            errKinderen.innerHTML = ""
        }
    }
    else {
        txtKinderen.className = "invalid";
        errKinderen.innerHTML = "error : \"is geen positief getal\""
    }
}
const isGetal = (kinderen) => {
    return !isNaN(kinderen)
}

const checkValidaties = () =>{
    let array = document.getElementsByClassName("invalid")

    if(array.length === 0){
        window.alert("Proficiat!")
    }
}

window.addEventListener("load", setup);