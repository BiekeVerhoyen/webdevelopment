const setup = () => {
    let student1={
        voornaam : "Jan",
        familienaam : "Janssens",
        geboorteDatum : new Date("1993-12-31"),
        adres : { // een object
            straat : "Kerkstraat 13",
            postcode : "8500",
            gemeente : "Kortrijk"
        },
        isIngeschreven : true,
        namenVanExen : ["Sofie", "Berta", "Philip", "Albertoooo"], // een array
        aantalAutos : 2
    }


    console.log(JSON.stringify(student1))

    let student2 = JSON.parse('{"voornaam":"Jan" , "voornaam": "bieke","familienaam":"Janssens","geboorteDatum":"1993-12-31T00:00:00.000Z","adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"],"aantalAutos":2}')
    console.log(student2.adres)
    console.log("vraag1: ISO formaat")
    console.log("vraag2: Het zal overschreven worden met het laatste")
}



window.addEventListener("load", setup);