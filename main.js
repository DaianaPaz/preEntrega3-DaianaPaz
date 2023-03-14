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

    tuNombre= prompt("Ingresar su nombre");
    tuEdad= parseInt(prompt("Ingresar su edad"));
    if(tuEdad > 17){
                alert("Puede entrar");
    }else{
                alert("Debe entrar con un adulto");
    }
    tuEntrada= prompt("Tipo de entrada: 2D, 3D o 4D");
    tuFormaDePago= prompt("Forma de pago: efectivo, credito o debito");

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
function iterador(arrayPersonas, funcion){
    for(const numero of arrayPersonas){
        funcion(numero);
    }
}

iterador([numero.tuEdad], operaciones("sumar"));
console.log(iterador);


