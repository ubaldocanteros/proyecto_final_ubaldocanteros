
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