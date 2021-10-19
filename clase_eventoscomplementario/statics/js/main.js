document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    let p = document.createElement("h1");
    p.innerHTML = usuario;

    
    let listado  = document.getElementById("listado");
    listado.appendChild(p);


  }