$(document).ready(function () {
  $("#contenedor-form").hide();
  $("#formulario").validate({
    rules: {
      nombre: {
        required: true,
        minlength: 3
      },
      apellido: {
        required: true,
        minlength: 3
      },
      DNI: {
        required: true,
        number: true,
        maxlength: 9
      },
      sueldo: {
        required: true,
        number: true,
        min: 50000
      },
      weight: {
        required: {
          depends: function (elem) {
            return $("#sueldo").val() > 50
          }
        },
        number: true,
        min: 0
      }
    },
    messages: {
      nombre: {
        required: "Por favor  ingrese aquí su nombre",
        minlength: "El nombre debe tener tres caracteres "
      },
      apellido: {
        required: "Por favor ingrese su apellido",
        minlength: "El apellido debe tener tres caracteres"
      },
      DNI: {
        required: "Ingrese aquí su DNI sin puntos",
        maxlength: "El DNI no debe superar los 9 caracteres"
      },
      sueldo: {
        required: "Por favor ingrese su sueldo bruto",
        min: "el sueldo no debe ser menor a 50000"
      },
      weight: {
        required: "El sueldo a ingresar debe ser mayor a 50000",
        number: "introduzca  su sueldo bruto como valor numerico",
        min: "El sueldo no debe ser menor a 50000"
      }
    }

  });
  
});

$("#boton").click(function(event){
  event.preventDefault();
  $("#contenedor-form").fadeIn(1000).show(); 
  $("#simular").hide();


})










