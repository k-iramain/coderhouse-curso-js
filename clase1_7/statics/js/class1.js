//algoritmo simple clase 1

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


//Algoritmo con un condicional clase 3

function classNumber2() {
    let nombre = prompt("ingresa tu nombre");
    let apellido = prompt("ingresa tu apellido");
    let DNI = prompt("ingresa tu DNI sin puntos");
    let sueldo = prompt("ingrese su sueldo bruto mensual");
    let sueldoMinimo = 40000;

    if (sueldo >= sueldoMinimo) {

        alert("Hola " + nombre + " " + apellido + " DNI " + DNI + " El monto maximo que podemos otorgarte es de: $" + sueldo * 3);


    } else {
        alert("lo sentimos en este momento no podemos otorgarte el credito");
    }




};


// Algoritmo con ciclo Clase 3

function classNumber3() {
    let nombreCompleto = "";
    while (nombreCompleto === "") {
        nombreCompleto = prompt("ingresa aqui nombre completo");
    };
    let DNI = ""
    while (DNI === "") {
        DNI = prompt("ingresa tu DNI sin puntos");
    };
    let sueldo = ""
    while (sueldo === "") {
        sueldo = prompt("ingrese su sueldo bruto mensual");
    };
    let mensajeFinal = "";
    const sueldoMinimo = 50000;
    const cuotasValor = {
        3: 1.50,
        6: 1.70,
        12: 2.00
    }



    if (sueldo >= sueldoMinimo) {
        mensajeFinal = "Hola " + nombreCompleto + " DNI " + DNI + " El monto maximo que podemos otorgarte es de: $" + sueldo * 3;
        for (let i = 1; i <= 12; i++) {
            let cuota = cuotasValor[i];
            if (cuota) {
                mensajeFinal = mensajeFinal + "\nsi lo pagas en " + i + " cuotas pagas: " + (sueldo * 3) * cuota;
            }
        };
        alert(mensajeFinal);
    } else {
        alert("lo sentimos en este momento no podemos otorgarte el credito");
    }




};


// Clase 4

function simularPrestamo() {
    // pedir datos al usuario
    let datos = ingresarDatosDelUsuario();
    console.log(datos)
    //verificar si se puede otorgar credito
    let esApto = esAptoCredito(datos.sueldo);
    console.log(esApto);
    if (esApto) {
        //valor de importe a prestar
        let importeAPrestar = importeMaximoAPrestar(datos.sueldo);
        //calcular el interes en base a las cuotas 3-6-12
        let valorCuotas = calcularCuotas(importeAPrestar);
        console.log(valorCuotas);
        //mostramos mensaje con datos en pantalla 
        let mensajeFinal = "Hola " + datos.name + " DNI " + datos.dni + " El monto maximo que podemos otorgarte es de: $" + importeAPrestar + valorCuotas;

        alert(mensajeFinal);
    } else {
        alert("lo sentimos en este momento no podemos otorgarte el credito");
    }

};

function ingresarDatosDelUsuario() {
    let nombreCompleto = prompt("Ingresar nombre completo");
    let DNI = prompt("Ingrese numero sin puntos ");
    let sueldo = prompt("Ingresa sueldo bruto ");
    return {
        name: nombreCompleto,
        dni: DNI,
        sueldo: sueldo
    }
};

function esAptoCredito(sueldo) {
    const sueldoMinimo = 50000;
    return sueldo >= sueldoMinimo

};

function importeMaximoAPrestar(sueldo) {
    return sueldo * 3;

};

function calcularCuotas(importeAPrestar) {
    const valorCuotas = {
        3: 1.50,
        6: 1.70,
        12: 2.00
    };

    let cuotas = ""
    for (let i = 1; i <= 12; i++) {
        let cuota = valorCuotas[i];
        if (cuota) {
            cuotas = cuotas + "\nsi lo pagas en " + i + " cuotas pagas: " + importeAPrestar * cuota;
        }
    };
    return cuotas
};



//clase 4 complementario funciones 

function facturaDeLuz() {
    //ingresar datos para determinar el consumo
    let datos = datosUsuario();
    console.log(datos)
    //calcular el valor de consumo
    let valor = valorConsumo(datos.lectura_actual, datos.ultima_lectura);
    console.log(valor)
    //mostrar importe final 
    let importeFinal = mostrarImporteFinal(datos, valor);
    console.log(importeFinal);
    alert(importeFinal)
};

function datosUsuario() {
    let nombreCompleto = prompt("ingrese nombre del usuario");
    let numeroDeCuenta = prompt("Ingrese numero de cuenta");
    let ultimaLectura = prompt("ingrese ultima lectura del medidor");
    let lecturaActual = prompt("Ingrese lectura actual")

    return {
        name: nombreCompleto,
        cuenta: numeroDeCuenta,
        ultima_lectura: ultimaLectura,
        lectura_actual: lecturaActual

    };
};

function valorConsumo(lecturaActual, ultimaLectura) {
    const montoFijo = 3000;
    const precioKW = 100;
    let monto = montoFijo + ((lecturaActual - ultimaLectura) * precioKW);

    return monto;
}

function mostrarImporteFinal(datos, importeFinal) {
    let mensaje = "Hola " + datos.name + " tu importe total es: $" + importeFinal;
    return mensaje;
}


//clase 5 objetos

class Usuario {
    constructor(nombreCompleto, DNI, sueldo) {
        this.nombreCompleto = nombreCompleto;
        this.DNI = DNI;
        this.sueldo = sueldo;
    }

    ingresarDatos() {
        this.nombreCompleto = "";
        while (this.nombreCompleto === "") {
            this.nombreCompleto = prompt("ingresa aqui nombre completo");
        };
        this.DNI = ""
        while (this.DNI === "") {
            this.DNI = prompt("ingresa tu DNI sin puntos");
        };
        this.sueldo = ""
        while (this.sueldo === "") {
            this.sueldo = prompt("ingrese su sueldo bruto mensual");
        };

    }
}

class Cuota {
    constructor(cuota, interes) {
        this.cuota = cuota;
        this.interes = interes;
    }

    calcularCuota(importeAPrestar) {
        return importeAPrestar * this.interes
    }
}

class Credito {
    constructor(usuario, sueldoMinimo, cuota3, cuota6, cuota12) {
        this.sueldoMinimo = sueldoMinimo;
        this.usuario = usuario;
        this.cuota3 = cuota3;
        this.cuota6 = cuota6;
        this.cuota12 = cuota12;
    }

    esAptoCredito() {
        return this.sueldoMinimo <= this.usuario.sueldo;
    }

    montoMaximoAPrestar() {
        return this.usuario.sueldo * 3;
    }

    mensajeFinal(importeFinal) {
        let mensaje = "Hola " + this.usuario.nombreCompleto + " DNI: " + this.usuario.DNI + " tu importe final es: $" + importeFinal;
        mensaje = mensaje + "\nsi lo sacas en " + this.cuota3.cuota + " cuotas pagas: " + this.cuota3.calcularCuota(importeFinal);
        mensaje = mensaje + "\nsi lo sacas en " + this.cuota6.cuota + " cuotas pagas: " + this.cuota6.calcularCuota(importeFinal);
        mensaje = mensaje + "\nsi lo sacas en " + this.cuota12.cuota + " cuotas pagas: " + this.cuota12.calcularCuota(importeFinal);
        alert(mensaje);
    }

    calcularCuotas() {
        let esApto = this.esAptoCredito();
        if (esApto) {
            let montoMaximoAPrestar = this.montoMaximoAPrestar();
            this.mensajeFinal(montoMaximoAPrestar);

        } else {
            alert("Lo sentimos no es apto para otorgarle el credito");
        }
    }



}

function classNumber5() {
    const cuota3 = new Cuota(3, 1.50);
    const cuota6 = new Cuota(6, 1.70);
    const cuota12 = new Cuota(12, 2.0);
    const sueldoMinimo = 50000;
    let usuario = new Usuario("", "", "");
    usuario.ingresarDatos();

    let credito = new Credito(usuario, sueldoMinimo, cuota3, cuota6, cuota12);
    credito.calcularCuotas();

}



//clase 6 Array

class CreditoConArray extends Credito {
    constructor(usuario, sueldoMinimo, cuotas) {
        super(usuario, sueldoMinimo, cuotas[0], cuotas[1], cuotas[2])
        this.cuotas = cuotas;
    }

    mensajeFinal(importeFinal) {
        let mensaje = "Hola " + this.usuario.nombreCompleto + " DNI: " + this.usuario.DNI + " tu importe final es: $" + importeFinal;
        this.cuotas.forEach(
            element => {
                mensaje = mensaje + "\nsi lo sacas en " + element.cuota + " cuotas pagas: " + element.calcularCuota(importeFinal);
            }
        );
        alert(mensaje);
    }


}

function classNumber6() {
    let cuotas = [new Cuota(3, 1.50), new Cuota(6, 1.70), new Cuota(12, 2.0)];
    const sueldoMinimo = 50000;
    let usuario = new Usuario("", "", "");
    usuario.ingresarDatos();

    let credito = new CreditoConArray(usuario, sueldoMinimo, cuotas);
    credito.calcularCuotas();

}


//clase seis complementario

class CreditoConArrayOrdenado extends CreditoConArray {
    constructor(usuario, sueldoMinimo, cuotas) {
        super(usuario, sueldoMinimo, cuotas);
        this.cuotas.sort(
            function(a, b) {
                return a.cuota - b.cuota 
            }
        )
        

    }
   
}

function classNumber6c() {
    let cuotas = [new Cuota(6, 1.50), new Cuota(12, 1.70), new Cuota(3, 1.30), new Cuota(18, 2.00)];
    const sueldoMinimo = 50000;
    let usuario = new Usuario("", "", "");
    usuario.ingresarDatos();

    let credito = new CreditoConArrayOrdenado(usuario, sueldoMinimo, cuotas);
    credito.calcularCuotas();

}

