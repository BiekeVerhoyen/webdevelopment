const setup = () => {
    let btnWijzig=document.getElementById("btnWijzig");
    btnWijzig.addEventListener("click", wijzig);
}

window.addEventListener("load", setup);


const wijzig = () => {
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.innerHTML = 'Hallo!';
}