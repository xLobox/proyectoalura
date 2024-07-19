  let texto = document.getElementById("subcontenedor1TextArea");
  let textoTrabajado = document.getElementById("textoTrabajado");
  let muneco = document.getElementById("muneco");
 
  let warning = document.getElementById("subcontenedor2__warning");
  let info = document.getElementById("subcontenedor2__info");
  /*
  La letra "e" es convertida para "enter"
  La letra "i" es convertida para "imes"
  La letra "a" es convertida para "ai"
  La letra "o" es convertida para "ober"
  La letra "u" es convertida para "ufat"
  */

  //declarando las vocales y las palabras por las cuales serán reemplazadas
  let reemplazos = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };
  //devolviendo las vocales desde las palabras encriptadas
  let desreemplazar = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  function encriptar() {
    if (texto.value.length > 0) {
      textoTrabajado.innerHTML = reemplazarLetras(texto.value, reemplazos);
      textoTrabajado.removeAttribute("hidden");
      muneco.setAttribute("hidden", "true");
      botonCopiar.removeAttribute("hidden");
      botonCopiar.style.position = "static";
      warning.setAttribute("hidden", "true");
      info.setAttribute("hidden", "true");
    } else {
      alert("No se ha encontrado ningun texto.");
     textoTrabajado.setAttribute("hidden", "true");
      muneco.removeAttribute("hidden");
      botonCopiar.setAttribute("hidden","true");
      botonCopiar.style.position = "static";
      warning.removeAttribute("hidden");
      info.removeAttribute("hidden");
    }
  }

  function desencriptar() {
    if (texto.value.length > 0) {
      textoTrabajado.innerHTML = reemplazarLetras(texto.value, desreemplazar);
      textoTrabajado.removeAttribute("hidden");
      muneco.setAttribute("hidden", "true");
      botonCopiar.removeAttribute("hidden");
      botonCopiar.style.position = "static";
      warning.setAttribute("hidden", "true");
      info.setAttribute("hidden", "true");  
    } else {
     alert("No se ha encontrado ningun texto.");
     textoTrabajado.setAttribute("hidden", "true");
      muneco.removeAttribute("hidden");
      botonCopiar.setAttribute("hidden","true");
      botonCopiar.style.position = "static";
      warning.removeAttribute("hidden");
      info.removeAttribute("hidden");
    }
  }

  function limpiar(){
      texto.value = "";
  }

  function copiar() {
    copiarPortapapeles();
    alert("El texto ha sido copiado");
  }

  function copiarPortapapeles() {
    navigator.clipboard.writeText(textoTrabajado.value);
  }

  function reemplazarLetras(texto, reemplazos) {
    let buscador = new RegExp(Object.keys(reemplazos).join("|"), "g");
    return texto.replace(buscador, (coincidencias) => reemplazos[coincidencias]);
  }

  function reemplazarPalabras(texto, desreemplazar) {
    let buscador = new RegExp(Object.keys(desreemplazar).join("|"), "g");
    return texto.replace(
      buscador,
      (coincidencias) => desreemplazar[coincidencias]
    );
  }
