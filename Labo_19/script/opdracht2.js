const setup = () => {
    changeClass();
    createImage();
}

const changeClass = () => {
    let listli = document.querySelectorAll("li")
    for(let i = 0; i<listli.length ;i++){
        listli[i].className = "listitem";
        listli[i].style.color = "red"

    }
}

const createImage = () => {
 let image = document.createElement("img")
    image.setAttribute("src", "image/katje.jpg" )
    image.setAttribute("width", "200em" )
    let lijstUl = document.querySelector("ul")
  lijstUl.appendChild(image);

}
window.addEventListener("load", setup);