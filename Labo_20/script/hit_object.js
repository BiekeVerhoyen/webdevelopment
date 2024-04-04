let global ={
    IMAGE_COUNT:5,
    IMAGES:[],
    IMAGE_PATH_PREFIX:"image/",
    IMAGE_PATH_SUFFIX:".png",
    score:0,
    IMAGE_SIZE: 48,
    timeoutid:0,
    MOVE_DELAY:3000,

}
const setup = () => {
    window.addEventListener("resize", updateSize);
    let btnStart = document.getElementsByTagName("button");
    btnStart[0].addEventListener("click", start)
    let image = document.getElementById("image");
    image.style.visibility="hidden";

    updateSize();
    getImages();


};

const updateSize = () => {
    let playfield = document.getElementById("playField");
    playfield.style.width = window.innerWidth+"px";
    playfield.style.height = window.innerHeight+"px";

}

const getImages =() =>{

    for(let i = 0; i<global.IMAGE_COUNT; i++ ){
        let image = document.createElement("img");
        image.src = global.IMAGE_PATH_PREFIX +i + global.IMAGE_PATH_SUFFIX;
        image.alt = "image" + i ;
        global.IMAGES.push(image);
    }
}

const setImages =() =>{
    let image = document.getElementById("image");

    let randomNumber = getRandomImage();
    let positie = getRandomLocatie();
    let currentImage  = global.IMAGES[randomNumber];
    let alt = currentImage.getAttribute("alt");
    let source =  currentImage.getAttribute("src");
    image.alt = alt;
    image.src = source;

    image.style.position="absolute";
    image.style.left=positie[1]  + "px";
    image.style.top =positie[0] + "px";

    image.style.visibility="visible";
    image.addEventListener("click", evaluate);
    clearTimeout(global.timeoutid);
    global.timeoutid=setTimeout(setImages, global.MOVE_DELAY )

}

const getRandomLocatie = () =>{
    let location = [];
    let randomHoogte = Math.random() * (window.innerHeight - global.IMAGE_SIZE);
    let randomBreedte = Math.random() *( window.innerWidth - global.IMAGE_SIZE);
    let hoogte = Math.floor(randomHoogte);
    let breedte = Math.floor(randomBreedte);
    location.push(hoogte);
    location.push(breedte)
return location


}
const getRandomImage =()=>{


    let randomNumber= Math.random() *5;
    return Math.round(randomNumber);
  }

const evaluate = (event) =>{
    let alt = event.target.getAttribute("alt")

    if(alt ==="image0"){
        global.score--;

    }else {
        global.score++;

    }
    setImages();
setText()

}

const setText = ()=>{
    let text = document.querySelector("p");
    text.innerText = "Aantal hits: " + global.score;

}
const start = () =>{
   let button = document.querySelector("button").style.visibility="hidden";
setImages();
    global.timeoutid=setTimeout(setImages, global.MOVE_DELAY )



}
window.addEventListener("load", setup);


