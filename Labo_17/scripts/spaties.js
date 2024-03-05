const setup = () => {

    let btnverander = document.getElementById("verander")

    btnverander.addEventListener("click", verander);
}

const verander = () => {
    let input = document.getElementById("input").value;

    console.log(maakMetSpaties(input));
}

const maakMetSpaties = (input) => {
    let result = "";
    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) !== " ") {
            result += input.charAt(i) + " ";
        }

    }
    return result;
}

window.addEventListener("load", setup);