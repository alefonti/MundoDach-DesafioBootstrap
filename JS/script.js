function iniciarCuestionario(){
    let preguntas = [pregunta1(), pregunta2(), pregunta3(), pregunta4(), pregunta5(), pregunta6(), pregunta7(), pregunta8(), pregunta9(), pregunta10()];
    let puntaje = 0;
    for (pregunta of preguntas) {
        if (pregunta){
            puntaje++;
        }
    }
    return resultado(puntaje);
}

function resultado(puntaje){
    if (puntaje<=3){
        alert("Lo siento! No sabes practicamente nada de perros salchicha, deberias aprender antes de tener uno!!!"); 
    }
    else if (puntaje<=6){
        alert("No esta tan mal, pero deberias aprender un poco mas acerca de nuestros amigos caninos!!!");
    }
    else if (puntaje<=9){
        alert("Muy bien! Casi perfecto! Sos casi un experto en perros salchicha, felicidades!!!");
    }
    else {
        alert("Felicidades!! Sos un experto de los perros salchicha, seguro tu amigo canino lo aprecia mucho!!")
    }
}

function pregunta1(){
    let respuesta = prompt("¿Cuantos tipos de pelajes puede tener un Dachshund? \n A - 2 \n B - 3 \n C - 4");
    respuesta = respuesta.toUpperCase();
    return respuesta=="B";
}
function pregunta2(){
    let respuesta = prompt("¿Cual es el pais de origen de los Dachshunds? \n A - Alemania \n B - Suecia \n C - Inglaterra");
    respuesta = respuesta.toUpperCase();
    return respuesta=="A";
}
function pregunta3(){
    let respuesta = prompt("¿Cual es el tipo de pelaje mas usual en los Dachshunds \n A - Corto \n B - Largo \n C - Duro");
    respuesta = respuesta.toUpperCase();
    return respuesta=="A";
}
function pregunta4(){
    let respuesta = prompt("¿Con que otro nombre se conoce al Dachshund? \n A - Pastor \n B - Sabueso \n C - Tejonero");
    respuesta = respuesta.toUpperCase();
    return respuesta=="C";
}
function pregunta5(){
    let respuesta = prompt("¿Cual es la enfermedad a la que son propensos los Dachshunds? \n A - Displacia \n B - Artrosis \n C - Condrodistrofia");
    respuesta = respuesta.toUpperCase();
    return respuesta=="C";
}
function pregunta6(){
    let respuesta = prompt("¿En que año data el primer estandar de la raza Dachshund? \n A - 1792 \n B - 1888 \n C - 1905");
    respuesta = respuesta.toUpperCase();
    return respuesta=="B";
}
function pregunta7(){
    let respuesta = prompt("¿Cuanto pesa un Dachshund estandar? \n A - De 10 a 12 kilos \n B - De 8 a 10 kilos \n C - De 6 a 9 kilos");
    respuesta = respuesta.toUpperCase();
    return respuesta=="C";
}
function pregunta8(){
    let respuesta = prompt("¿Que es cierto del comportamiento de los Dachshunds? \n A - Son miedosos \n B - Son glotones \n C - Son independientes");
    respuesta = respuesta.toUpperCase();
    return respuesta=="C";
}
function pregunta9(){
    let respuesta = prompt("¿Cual es la mascota principal de nuestra página web? \n A - Obi \n B - Pipo \n C - Peanut");
    respuesta = respuesta.toUpperCase();
    return respuesta=="B";
}
function pregunta10(){
    let respuesta = prompt("¿Cual es la mejor raza de perros? \n A - Dachshund \n B - Dachshund \n C - Dachshund");
    respuesta = respuesta.toUpperCase();
    return (respuesta=="A" || respuesta=="B" || respuesta=="C");
}