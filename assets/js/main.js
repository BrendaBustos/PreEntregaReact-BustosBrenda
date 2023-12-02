//declarar funcion para la bienvenida
function hola() {
    alert("Bienvenidos a GreenClan, esta es una breve encuesta");
}


//declaracion de variables globales 
let Reciclaje = "1-actividades de reciclaje";
let Sustentable = "2-proyectos sustentables";
let FestivalesEco = "3-festivales ecologicos";
let Alimentos = "4-alimentacion organica";

hola();

//declaro funciones
function mostrarActividad(){
    alert("Estas son algunas de nuestras actividades");
    alert(`
    ${Reciclaje}
    ${Sustentable}
    ${FestivalesEco}
    ${Alimentos}`);
}

mostrarActividad();

let elegirActividad = true;
let elecciones = "";
let resultado = 0;

while (elegirActividad){
    let selectActividad = parseInt(prompt(`
    Ingrese el numero de la Actividad que desea realizar:
    1. Reciclaje
    2. Sustentable
    3. FestivalesEco
    4. Alimentos
    Para salir, escriba "SALIR"`));


switch (selectActividad) {
    case 1:
        elecciones += "Actividades de Reciclaje\n";
        resultado += 35;
        alert("Actividad de recicleje seleccionada");
        break;

    case 2:
        elecciones += "Actividades Sustentables\n";
        resultado += 30;
        alert("Actividad sustentable seleccionada");
        break;

    case 3:
        elecciones += "FestivalesEco\n";
        resultado += 15;
        alert("FestivalesEco seleccionada");
        break;

    case 4:
        elecciones += "Alimentacion Organica\n";
        resultado += 20;
        alert("Actividad de alimentacion organica seleccionada");
        break;

    case SALIR:
        alert("Regresando..");
        elegirActividad = false;
        break;

    default:
        alert("Opcion invalida, volver a ingresar una opcion correcta.");
        break;
}

if (elegirActividad) {
    elegirActividad = confirm("Desea seleccionar otra actividad de interes?");
   }
}

alert("Gracias por participar en la ecuesta");
alert(`
Actividades Seleccionadas:
${elecciones}
resultado de la encuesta:
puntos${resultado}
`);

seleccionar();