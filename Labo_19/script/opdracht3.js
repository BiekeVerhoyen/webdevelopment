const setup = () => {
    let btn = document.querySelector("button");
    btn.addEventListener("click", addP)
}

const addP = () =>{
 let divE = document.querySelector("div");
 let pE = document.createElement("p");
 pE.textContent = "you created a p element";
 divE.appendChild(pE);
}
window.addEventListener("load", setup);