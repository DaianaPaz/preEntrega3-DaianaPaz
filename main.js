/*ENTRADAS AL CINE*/

function saludar(){
    alert("Bienvenido/a");
}

class Persona{
    constructor(info){
        this.nombre = info.tuNombre;
        this.edad = info.tuEdad;
        this.entrada = info.tuEntrada;
        this.formaDePago = info.tuFormaDePago;
    }
}

saludar();

let tuNombre;
let tuEdad;
let tuEntrada;
let tuFormaDePago;
const arrayPersonas = []

for(let i = 0; i < 2; i++){

    tuNombre= prompt("Ingresar nombre");
    tuNombre = tuNombre.toUpperCase();
    tuEdad= parseInt(prompt("Ingresar edad"));
    if(tuEdad > 17){
                alert("Puede entrar");
    }else{
                alert("Debe entrar con un adulto");
    }
    tuEntrada= prompt("Tipo de entrada: 2D, 3D o 4D");
    tuEntrada = tuEntrada.toUpperCase();
    while(tuEntrada != "2D" && tuEntrada != "3D" && tuEntrada != "4D"){
        tuEntrada= prompt("Tipo de entrada: 2D, 3D o 4D");
        tuEntrada = tuEntrada.toUpperCase();
    }
    tuFormaDePago= prompt("Forma de pago: EFECTIVO, CREDITO o DEBITO");
    tuFormaDePago = tuFormaDePago.toUpperCase();
    while(tuFormaDePago != "EFECTIVO" && tuFormaDePago != "CREDITO" && tuFormaDePago != "DEBITO"){
        tuFormaDePago= prompt("Forma de pago: EFECTIVO, CREDITO o DEBITO");
        tuFormaDePago = tuFormaDePago.toUpperCase();
    }
    const persona = new Persona(
        {tuNombre,
        tuEdad,
        tuEntrada,
        tuFormaDePago,}
    );

    arrayPersonas.push(persona);
}

console.log(arrayPersonas);
//MOSTRAR EL NOMBRE Y LA FORMA DE PAGO DE CADA USUARIO
for(const item of arrayPersonas){
    console.log(item.nombre);
    console.log(item.formaDePago);
}

//OPERACIONES A UTILIZAR
function operaciones(operacion){
if(operacion === "sumar"){
    return (x, y) => x + y;
}

if(operacion === "restar"){
    return (x, y) => x - y;
}

if(operacion === "multiplicar"){
    return (x, y) => x * y;
}

if(operacion === "dividir"){
    return (x, y) => x / y;
}
}

//SUMAR LAS EDADES INGRESADAS
let sumaEdades = 0;
function iterador(arrayPersonas, funcion){
    for(const persona of arrayPersonas){
        sumaEdades += persona.edad;
    }
}

iterador(arrayPersonas, operaciones("sumar"));
console.log(sumaEdades);

//  MOSTRAR USUARIOS MAYORES DE 18 AÑOS
let usuario = arrayPersonas.filter(item => item.edad > 18);
console.log(usuario);

