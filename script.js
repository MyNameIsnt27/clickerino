//  1. Buscar elementos del HTML
let texto = document.getElementById("contador");
let texto2 = document.getElementById("sumador");
let boton = document.getElementById("boton");
let boton2 = document.getElementById("boton2");
let reset = document.getElementById("reset");
let sumador  = document.getElementById("sumador");
sumador = 1;
let coste = 15;
let auto = 0;
let textoauto = document.getElementById("auto");

//  2. Intentar cargar valor guardado
let guardado = localStorage.getItem("contador");
let guardado2 = localStorage.getItem("sumador");

// 3. Crear variable contador
let contador;

// 4. Comprobar si había algo guardado
if (guardado !== null) {
  // Si hay valor → convertirlo a número
  contador = parseInt(guardado);
} else {
  // Si no hay nada empezar en 0
  contador = 0;
}

if (guardado2 !== null) {
  // Si hay valor → convertirlo a número
  sumador = parseInt(guardado2);
} else {
  // Si no hay nada empezar en 0
  sumador = 1;
}


let guardadoauto = localStorage.getItem("auto");

if (guardadoauto !== null) {
  auto = parseInt(guardadoauto);
} else {
auto = 0 
}





// 5. Mostrar valor inicial en pantalla
texto.textContent = contador;
texto2.textContent = sumador;


//  6. Cuando haces click en sumar
boton.onclick = function() {

  // Sumar 1
  contador = contador + sumador;

  // Actualizar pantalla
  texto.textContent = contador;

  // Guardar en localStorage
  localStorage.setItem("contador", contador);
};

//  7. Botón reset
reset.onclick = function() {

  // Volver a 0
  contador = 0;
  sumador = 1;
  auto = 0;
  coste = 15;

  // Actualizar pantalla
  texto.textContent = contador;
  texto2.textContent = sumador;


  // Borrar guardado
  localStorage.removeItem("contador");
  localStorage.removeItem("sumador");
};

boton2.onclick = function() {

  // funcion principal
  
if (contador >= coste) {
  contador = contador - coste;
  sumador = sumador + 1;
  texto2.textContent = sumador;
  texto.textContent = contador;
  coste = coste + 20;
}

  // Actualizar pantalla
  texto2.textContent = sumador;


  // Guardar en localStorage
  localStorage.setItem("sumador", sumador);
};


	// auto click
	
setInterval(function() {

  contador = contador + auto;

  texto.textContent = contador;

  localStorage.setItem("contador", contador);
  
  textoauto.textContent = auto;

}, 1000);



	//boton autoclick
	
let botonauto = document.getElementById("botonauto");
	
botonauto.onclick = function() {

  if (contador >= 50) {
    contador -= 50;
    auto += 1;

    texto.textContent = contador;
    textoauto.textContent = auto;

    localStorage.setItem("contador", contador);
    localStorage.setItem("auto", auto);
  }

};


