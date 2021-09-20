var articulos = [];

function classNumber1() {
    let nombre = prompt("ingresa tu nombre");
    let apellido = prompt("ingresa tu apellido");
    let anioNacimiento = prompt("en que anio naciste?");
    let mesNacimiento = prompt("En que mes naciste?");
    let diaNacimiento = prompt("En que dia naciste?");
    let year = new Date().getFullYear();
    let fechaNacimiento = new Date(year, mesNacimiento - 1, diaNacimiento);
    let now = new Date();
    let edad = year - anioNacimiento;
    console.log(fechaNacimiento);
    console.log(now)
    if (fechaNacimiento > now) {
        edad = edad - 1;

    }
    alert("Hola " + nombre + " " + apellido + " tu edad es: " + edad);


};