const setup = () => {
    let input = document.getElementById("input").innerHTML
    aantalAnIndex(input);
    aantalAnIndexLast(input);



}

const aantalAnIndex = (input) => {


    let aantalAn = 0;
    for(let i = 0 ; i<input.length ; i++){
        let anGevonden = input.indexOf("an" , i )
        if(anGevonden !== -1){
            aantalAn ++;
            i = anGevonden;
        }
    }
    return aantalAn;
}

const aantalAnIndexLast = (input) => {


    let aantalAn = 0;
    for(let i = input.length ; i>0 ; i--){
        let anGevonden = input.lastIndexOf("an" , i )
        if(anGevonden !== -1){
            aantalAn ++;
            i = anGevonden;
        }
    }
    return aantalAn;
}


window.addEventListener("load", setup);