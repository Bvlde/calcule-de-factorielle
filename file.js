
const valeurEntre = document.getElementById("valeurEntre");
const button = document.getElementById("btnCalculer");
const message = document.getElementById("message");


function factoriel(nombre){
    if(nombre <= 1){
        return 1;
    }

    return nombre * factoriel(nombre-1);
}
function calcule(){
let valeur = parseInt(valeurEntre.value);

    if(isNaN(valeur)){
        alert("ceci n'est pas un nombre !!");
        return;
    }

message.innerHTML = "le factoriel de "+valeur+" est "+factoriel(valeur);

}

button.addEventListener('click',calcule);



