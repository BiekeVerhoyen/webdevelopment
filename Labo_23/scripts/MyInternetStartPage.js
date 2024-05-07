let global = {
    history :[],
}

const setup = () => {

    let button = document.getElementById("go-button")
    button.addEventListener("click", search)
    if(localStorage.getItem("history") !== undefined){
        makeCards();

    }
}

const search  = () => {
    let search = document.getElementById("search").value.split(" ")
    let commando = search[0];
    let zoekopdracht = [];
    for (let i = 1; i < search.length; i++) {
        zoekopdracht.push(search[i])
    }
    if (commando[0] !== undefined) {
        if (commando[0].localeCompare("/") === 0) {
            if (zoekopdracht.length > 0) {
                let searchterms = getSearchTerms(zoekopdracht);
                let title = "";
                let url = "";
                switch (commando) {
                    case "/g":
                        title = "Google"
                        url = `https://www.google.be/search?q=${searchterms}`
                        window.open(url)
                        break;
                    case"/y":
                        title = "Youtube"
                        url = `http://www.youtube.com/results?search_query=${searchterms}`
                        window.open(url)
                        break;
                    case"/t":
                        title = "X"
                        url = `https://twitter.com/hashtag/${searchterms}`
                        window.open(url);
                        break;
                    case"/i":
                        title = "Instagram"
                        url = `http://www.instagram.com/explore/tags/${searchterms}`
                        window.open(url)
                        break;
                    default:
                        window.alert("Unknown command prefix")
                }
                if (title.localeCompare("") !== 0) {
                    let h = {
                        title: title,
                        text: searchterms,
                        url: url
                    }
                    global.history.push(h)
                    localStorage.setItem("history", JSON.stringify(global.history))
                    createCard(h);
                }

            } else {

                window.alert("Invalid command")
            }
        } else {

            window.alert("Invalid command")
        }
    }
}

const getSearchTerms = (zoekopdracht) =>{
    let searchterms = ""
    for (let x = 0; x < zoekopdracht.length; x++) {
        searchterms += zoekopdracht[x]
        if(x+1<zoekopdracht.length){
            searchterms += "+"
        }
    }
    return searchterms
}

const makeCards =() =>{
   let history = localStorage.getItem("history")
    history = JSON.parse(history)
    global.history = history
    for( let i = 0; i<history.length ; i++){
        createCard(history[i]);
    }

}
const createCard =(h) => {
    let url = h.url;
    let textarray = h.text.split("+")
    let text = ""
    for(let i = 0; i<textarray.length; i++){
        text += textarray[i] + " "
    }

    let title = h.title;
    let rowdiv = document.getElementById("row")

    let divBlock = document.createElement("div")
    divBlock.classList.add("card")

    let divBlock2 = document.createElement("div")
    divBlock2.classList.add("card-body")
    divBlock2.classList.add(title)
    divBlock.appendChild(divBlock2);
    let titleCard = document.createElement("h5")
    titleCard.className = "card-title"
    titleCard.innerText = title
    divBlock2.appendChild(titleCard)
    let textCard = document.createElement("p")
    textCard.className = "card-text"
    textCard.innerText = text
    divBlock2.appendChild(textCard)
    let btn = document.createElement("a")
    btn.className ="btn btn-primary"
    btn.href = url
    btn.target = "_blank"
    btn.innerText = "Go!"

    divBlock2.appendChild(btn)

    rowdiv.appendChild(divBlock)


    // <div className="card">
    //     <div className="card-body">
    //         <h5 className="card-title">Special title treatment</h5>
    //         <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //         <a href="#" className="btn btn-primary">Go somewhere</a>
    //     </div>
}


window.addEventListener("load", setup);