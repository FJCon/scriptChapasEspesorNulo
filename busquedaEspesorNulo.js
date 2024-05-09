const tabla = document.querySelector("body > table > tbody");
// primer columna con item ==> children[3]

const arrayChapas = [];

//Empezar el bucle desde i = 3

for( let i = 3; i < tabla.children.length; i ++){
    let item = tabla.children[i].children[5].children[0].children[0].innerText;
    let espesor = tabla.children[i].children[10].children[0].innerText;

    if(item.includes("CHAPA") && espesor == "0"){
        arrayChapas.push(tabla.children[i].children[5].children[0].href)
    }
}

//acceder a url ej: arrayChapas[i].children[5].children[0].href; (siendo i un entero)

for(let i = 0; i < arrayChapas.length; i ++){
    let link = arrayChapas[i]
    let win = window.open(link, "_blank")
}
