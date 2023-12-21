//funzione che prende i valori in input, li unisce e le da in output tramite ID = password
function getValues(){

    //per resettare i valori dei messaggi e della password ad ogni click del bottone
    document.getElementById("rip").innerText = null;
    document.getElementById("nice").innerText = null;
    document.getElementById("password").innerText = null;
    let passVar;

    //dichiarazione delle variabili che conterranno i singoli dati da prendere dai campi input
    let nameVar = document.getElementById("userName").value;
    let lastNameVar = document.getElementById("userLastName").value;
    let favColorVar = document.getElementById("userFavColor").value;

    //Controllo se i campi di input sono vuoti o meno
    if (nameVar.length === 0 || lastNameVar.length === 0 || favColorVar.length === 0){
        document.getElementById("rip").innerText = "Please fill every field!";
        nameVar = document.getElementById("userName").value = null;
        lastNameVar = document.getElementById("userLastName").value = null;
        favColorVar = document.getElementById("userFavColor").value = null;
    }
    else{
        passVar = (nameVar + lastNameVar + favColorVar + +23);
        document.getElementById("password").innerText = passVar;        
        document.getElementById("nice").innerText = "Password generated correctly!";
    }

}

//reset di ogni campo e testo
function reset(){
    document.getElementById("rip").innerText = null;
    document.getElementById("password").innerText = null;
    document.getElementById("nice").innerText = null;

    nameVar = document.getElementById("userName").value = null;
    lastNameVar = document.getElementById("userLastName").value = null;
    favColorVar = document.getElementById("userFavColor").value = null;
}