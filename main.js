//funzione che prende i valori in input, li unisce e le da in output tramite ID = password
function getValues(){

    //per resettare i valori dei messaggi e della password ad ogni click del bottone
    document.getElementById("rip").innerText = "";
    document.getElementById("nice").innerText = "";
    document.getElementById("password").innerText = "";


    //dichiarazione delle variabili che conterranno i singoli dati da prendere dai campi input
    let nameVar = document.getElementById("userName").value;
    let lastNameVar = document.getElementById("userLastName").value;
    let favColorVar = document.getElementById("userFavColor").value;

    //Controllo se i campi di input sono vuoti o meno
    if (nameVar.length === 0 || lastNameVar.length === 0 || favColorVar.length === 0){
        document.getElementById("rip").innerText = "Please fill every field!";
    }
    else{
        document.getElementById("password").innerText = (nameVar + lastNameVar + favColorVar + +23);
        document.getElementById("nice").innerText = "Password generated correctly!";
    }

}

//reset di ogni campo e testo
function reset(){
    document.getElementById("rip").innerText = "";
    document.getElementById("password").innerText = "";
    document.getElementById("nice").innerText = "";

    nameVar = document.getElementById("userName").value = "";
    lastNameVar = document.getElementById("userLastName").value = "";
    favColorVar = document.getElementById("userFavColor").value = "";
}
