window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("navbar").classList.add("small");
    document.getElementById("logo").classList.add("small");
  } else {
    document.getElementById("navbar").classList.remove("small");
    document.getElementById("logo").classList.remove("small");
  }
  
}

function enviarEmail() {
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var asunto = document.getElementById("asunto").value;
  var mensaje = document.getElementById("mensaje").value;
  var link = "mailto:sierra.ivana.is@gmail.com" + "?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent("Nombre: " + nombre + "\nCorreo: " + correo + "\nMensaje: " + mensaje);
  window.location.href = link;
}

function ocultarDivsEnPantallaPequena() {
  if (window.innerWidth < 767) {
    var elementos = document.querySelectorAll('#overlay');
    for (var i = 0; i < elementos.length; i++) {
      elementos[i].style.display = 'none';
    }
  }
}



