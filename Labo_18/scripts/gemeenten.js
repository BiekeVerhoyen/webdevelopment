const setup = () => {
    voegGemeenteToe()

}
let voegGemeenteToe =  () => {
    let stoppen = false;
    let gemeenten = []
    while(!stoppen){

        let gemeente = window.prompt('Geef een gemeente op');
        if(gemeente.localeCompare("stop")=== 0){
            stoppen = true;
        }
        else {
            gemeenten.push(gemeente)
        }
    }

    let lijst = document.getElementById("gemeente")
    gemeenten.sort();
    for( let i =0; i<gemeenten.length ; i++){
        lijst.innerHTML += '<option value="'+ gemeenten[i] +'">' + gemeenten[i] + '</option>'
    }


}
window.addEventListener("load", setup);