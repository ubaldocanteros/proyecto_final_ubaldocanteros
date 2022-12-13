/* Pagina Principal */


var edad = parseInt(prompt("Bienbenido. Por favor introduce tu edad"));


    if(edad>=18){
        alert("Puedes entrar, eres mayor de edad.");
    }else{
        alert("Eres menor de edad, entras bajo tu responsabilidad");
    }  




    let goleadoreslink = document.getElementById("goleadoreslink")
    goleadoreslink.addEventListener("click", clicklink)

function clicklink(){
    if(confirm("Vas a dirigirte a una pagina externa.Deseas continuar")){
    location.href = "https://es.wikipedia.org/wiki/Goleador_(f%C3%BAtbol)#M%C3%A1ximos_goleadores_de_la_historia_del_f%C3%BAtbol";
    
}else{
    alert("Aca nos quedamos.")
}  
}


/* Lista Jugadores */

function mostrararqueros() {
    document.getElementById("arqueros").style.display = "block";
    document.getElementById("defensores").style.display = "none";
    document.getElementById("mediocampistas").style.display = "none";
    document.getElementById("delanteros").style.display = "none";
}

function mostrardefensores() {
    document.getElementById("arqueros").style.display = "none";
    document.getElementById("defensores").style.display = "block";
    document.getElementById("mediocampistas").style.display = "none";
    document.getElementById("delanteros").style.display = "none";
}

function mostrarmediocampistas() {
    document.getElementById("arqueros").style.display = "none";
    document.getElementById("defensores").style.display = "none";
    document.getElementById("mediocampistas").style.display = "block";
    document.getElementById("delanteros").style.display = "none";
}

function mostrardelanteros() {
    document.getElementById("arqueros").style.display = "none";
    document.getElementById("defensores").style.display = "none";
    document.getElementById("mediocampistas").style.display = "none";
    document.getElementById("delanteros").style.display = "block";
}


