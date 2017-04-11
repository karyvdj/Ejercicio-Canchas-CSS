// alert("hola");
var botonFutbol = document.getElementById('botonFutbol');
var botonBasquetbol = document.getElementById('botonBasquetbol');
var botonTenis = document.getElementById('botonTenis');

var canchas = document.getElementsByClassName('canchas');

botonFutbol.addEventListener("click",mostrarFutbol);
botonBasquetbol.addEventListener("click",mostrarBasquetbol);
botonTenis.addEventListener("click",mostrarTenis);

function mostrarFutbol(){
  canchas[0].style.display = "block";
  canchas[1].style.display = "none";
  canchas[2].style.display = "none";
}

function mostrarBasquetbol(){
  canchas[1].style.display = "block";
  canchas[0].style.display = "none";
  canchas[2].style.display = "none";
}

function mostrarTenis() {
  canchas[2].style.display = "block";
  canchas[0].style.display = "none";
  canchas[1].style.display = "none";
}
