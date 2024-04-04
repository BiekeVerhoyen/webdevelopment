let global ={
    AANTAL_HORIZONTAAL:4,
    AANTAL_VERTICAAL:3,
    AANTAL_KAARTEN:6,
    KAARTEN:[],
    places: [],
}

const setup = () => {

    getImages();
    gameSetup();
    randomPlace()

}
const gameSetup =() => {

    let grid = document.getElementById("container");
    grid.style.display="grid";
    grid.style.margin= "auto";
    grid.style.width ="fit-content";
    grid.style.gridTemplateColumns = "repeat(4, 1fr)";
    grid.style.gridTemplateRows = "repeat(3, 1fr)"
    grid.style.gap = "20px";



    for (let i = 1; i < (global.AANTAL_KAARTEN * 2) +1; i++) {
        let image = document.createElement("img");


        image.style.borderRadius ="25px"
        image.className = "back";
        image.src = "../Labo_20/image/egg.png"
        image.setAttribute("gridNumber", i);
        image.addEventListener("click", turn)
        grid.appendChild(image);

    }
}

const getImages =() => {
// aanmaken van de kaartnamen
    for (let i = 1; i < global.AANTAL_KAARTEN + 1; i++) {
        let name = "kaart" + i;
        global.KAARTEN.push(name);
    }
}

const randomPlace =() => {
// array van lengte 12 met  nummers 0-6 random
    for (let i = 1; i < (global.AANTAL_KAARTEN * 2) + 1; i++) {

        let randomNumber = Math.ceil(Math.random() * global.AANTAL_KAARTEN);
        let count = 0;
        for(let place of global.places){
            if(place === randomNumber){
                count++;
            }
        }
        if(count >=2 ){
            i--;
        }
        else{
            global.places.push(randomNumber)
        }
        console.log(global.places)
    }
}
const turn =(event) => {
// kaart omdraaien
    let gridNumber = event.target.getAttribute("gridNumber");
    let cardNumber = global.places[gridNumber -1 ];
    event.target.src="../Labo_20/image/kaart" + cardNumber + ".png";
    event.target.classList.remove("back");
    event.target.classList.add("visible")

    let cardsVisible = document.getElementsByClassName("visible").length;
        if(cardsVisible === 2){

        evaluate()
    }
}

const evaluate =() => {
    let cards = document.getElementsByClassName("visible");
    let firstCard = global.places[cards[0].getAttribute("gridNumber") - 1];
    let secondCard = global.places[cards[1].getAttribute("gridNumber") - 1];
    if (firstCard === secondCard) {
        for (let card of cards) {
            card.classList.add("correct");
            setTimeout(removeCards, 1000);

        }
    } else {
        for (let card of cards) {
            card.classList.add("false");
            setTimeout(turnCards, 1000);


        }
    }

}

const removeCards =() => {
    let cards = document.getElementsByClassName("correct");
    for (let card of cards) {
        card.classList.remove("correct");
        card.classList.remove("visible");
        card.classList.add("hide")

    }
    let cardsLeft = document.getElementsByClassName("back").length;
    if(cardsLeft===0){
        celebrate() ;
    }
}

const turnCards =() => {
    let cards = document.getElementsByClassName("false");
    for (let card of cards) {
        card.classList.remove("false");
        card.classList.remove("visible");
        card.classList.add("back")
        card.src = "../Labo_20/image/egg.png"

    }
}

const celebrate =() =>{

    let img = document.createElement("img");

    img.src="https://cdn3.emoji.gg/stickers/6218-congrats.png";
    img.style.width="500px";
    img.style.height="500px";
    img.alt="congrats";
    img.style.position="absolute";
    img.style.left = (window.innerWidth /2) -250 + "px" ;
    img.style.top = (window.innerHeight /2) -250 + "px" ;



    let body = document.getElementsByTagName("body");
    body[0].appendChild(img);

}
window.addEventListener("load", setup);
