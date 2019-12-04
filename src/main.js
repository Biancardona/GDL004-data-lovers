import dataSet from './data/rickandmorty/rickandmorty.js';
import {
  humans,
  aliens,
  humanoids,
  unknowns,
  poopybuttholes,
  mythologs,
  animals,
  vampires,
  robots,
  cronenbergs,
  diseases,
  parasites,
  sortAnythingByName
} from './data.js';

const imgCharacters = document.querySelectorAll('.imgCharacters');
const idBotton = document.querySelector('#btnOrder');
const idContainer = document.querySelector('#contenedor');

const showInfo = (showTypes) => {
  for (let i = 0; i < showTypes.length; i++) {
    const allTypes = document.createElement('div');
    allTypes.className = 'characters';
    allTypes.innerHTML = `<img src=${showTypes[i].image}></img>` + `<p>Name: ${showTypes[i].name}</p>` + `<p>Specie: ${showTypes[i].species}</p>` + `<p>Status: ${showTypes[i].status}</p>` + `<p>Gender: ${showTypes[i].gender}</p`;
    document.querySelector('#resultados').appendChild(allTypes);
  }
};
//agregando id al boton buscador 
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultados');
const noResultado = document.querySelector('#no_result');
//funcion buscador
const search = () => {
  event.preventDefault()
  let characters = []
  //Obteniendo informacion del usuario
  const texto = formulario.value.toLowerCase();
  //condicional para cuando no agrega character
  if (formulario.value.length === 0) {
    window.alert("Enter the name of a character")
  } else {
    //Loop dataSet
    for (let character of dataSet.results) {
      //Busca el nombre del dataSet.results y lo convierte a minusculas
      let characterLowerCase = character.name.toLowerCase();
      //Comparando resultados (si es completamente igual a 0 si lo encontro)
      if (characterLowerCase.indexOf(texto) === 0) {
        //limpiando pantalla de resultados
        resultado.innerHTML = '';
        //agregando el resultado a la posicion 0 del array vacio (characters)
        characters[0] = character;

        document.querySelector('#inicio').classList.add('esconder');
        document.querySelector('#resultados').classList.remove('esconder');
        document.querySelectorAll('#resultados').innerHTML = showInfo(characters);
        break;
      }
    }
    //Si el array esta vacio (longitud = 0) no se encontro el personaje
    if (characters.length === 0) {
      noResultado.innerHTML = 'Not found';
    }
  }
}
document.querySelector('#search').addEventListener('click', search)
//boton dinamico 
function dinButton() {
  //aquí instanciamos al componente padre
  let resultados = document.getElementById("resultados");
  //aquí agregamos el componente de tipo input
  let input = document.createElement("BUTTON");
  input.id = 'dinButon';
  input.className = 'inputStyle';
  //aquí indicamos que es un input de tipo button
 // input.type = 'button';
  input.innerText = 'GO TO HOME';
  //y por ultimo agreamos el componente creado al padre
  resultados.appendChild(input);
  document.querySelector('#dinButon').addEventListener('click', goToHome);
}
window.onload = function () {
  //Aquí referenciamos el botón que realizara la acción
  document.querySelector('#search').addEventListener('click', dinButton)
}
// Agregando funcion a boton dinamico (ir a inicio)
function goToHome() {
  document.querySelector('#contenedor').classList.add('esconder');
  document.querySelector('#inicio').classList.remove('esconder');
  document.querySelector('#resultados').classList.add('esconder');
  document.querySelector('#btnFin').classList.add('esconder');
  window.location.reload();
}
// traer contenedor de especies y ocultar primer pantalla de inicio
document.querySelector('#btnInicio').addEventListener('click', () => {
  document.querySelector('#inicio').classList.add('esconder');
  document.querySelector('#contenedor').classList.remove('esconder');
});
document.querySelector('#btnFin').addEventListener('click', () => {
  document.querySelector('#contenedor').classList.add('esconder');
  document.querySelector('#resultados').classList.add('esconder');
  document.querySelector('#inicio').classList.remove('esconder');
  document.querySelector('#btnFin').classList.add('esconder');
  window.location.reload();
});

// funcion para ejecutar el e.currentTarget
function newFunction(event) {
  const eventId = event.currentTarget.id;
  idContainer.classList.add('esconder');
  document.querySelector('#btnFin').classList.remove('esconder');
  // aqui traemos la data de humanos
  document.querySelector('#resultados').classList.remove('esconder');
  event.preventDefault()
  if (eventId === 'imgHumano') {
    //se asigna un id al boton para que al dar click en la imagen de humans traiga el filtro de humans 
    document.querySelector('#btnOrder').className = 'humans';
    document.querySelectorAll('#resultados').innerHTML = showInfo(humans);
  }
  if (eventId === 'imgAlien') {
    document.querySelector('#btnOrder').className = 'aliens';
    document.querySelectorAll('#resultados').innerHTML = showInfo(aliens);
  }
  if (eventId === 'imgUnknown') {
    document.querySelector('#btnOrder').className = 'unknowns';
    document.querySelectorAll('#resultados').innerHTML = showInfo(unknowns);
  }
  if (eventId === 'imgPoopybutthole') {
    document.querySelector('#btnOrder').className = 'poopybuttholes';
    document.querySelectorAll('#resultados').innerHTML = showInfo(poopybuttholes);
  }
  if (eventId === 'imgMytholog') {
    document.querySelector('#btnOrder').className = 'mythologs';
    document.querySelectorAll('#resultados').innerHTML = showInfo(mythologs);
  }
  if (eventId === 'imgAnimal') {
    document.querySelector('#btnOrder').className = 'animals';
    document.querySelectorAll('#resultados').innerHTML = showInfo(animals);
  }
  if (eventId === 'imgVampire') {
    document.querySelector('#btnOrder').className = 'vampires';
    document.querySelectorAll('#resultados').innerHTML = showInfo(vampires);
  }
  if (eventId === 'imgRobot') {
    document.querySelector('#btnOrder').className = 'robots';
    document.querySelectorAll('#resultados').innerHTML = showInfo(robots);
  }
  if (eventId === 'imgCronenberg') {
    document.querySelector('#btnOrder').className = 'cronenbergs';
    document.querySelectorAll('#resultados').innerHTML = showInfo(cronenbergs);
  }
  if (eventId === 'imgDiseas') {
    document.querySelector('#btnOrder').className = 'diseases';
    document.querySelectorAll('#resultados').innerHTML = showInfo(diseases);
  }
  if (eventId === 'imgParasito') {
    document.querySelector('#btnOrder').className = 'parasites';
    document.querySelectorAll('#resultados').innerHTML = showInfo(parasites);
  }
  if (eventId === 'imgHumanoide') {
    document.querySelector('#btnOrder').className = 'humanoids';
    document.querySelectorAll('#resultados').innerHTML = showInfo(humanoids);
  }
}
//funcion que crea el evento (del target id) con un forEach
imgCharacters.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    newFunction(event);
  });
});

idBotton.addEventListener('click', (event) => {
  let sortedByName = [];
  const eventClassName = event.currentTarget.className;


  if (eventClassName === 'humans') {
    sortedByName = sortAnythingByName(humans);
  }
  if (eventClassName === 'aliens') {
    sortedByName = sortAnythingByName(aliens);
  }
  if (eventClassName === 'unknowns') {
    sortedByName = sortAnythingByName(unknowns);
  }
  if (eventClassName === 'poopybuttholes') {
    sortedByName = sortAnythingByName(poopybuttholes);
  }
  if (eventClassName === 'mythologs') {
    sortedByName = sortAnythingByName(mythologs);
  }
  if (eventClassName === 'animals') {
    sortedByName = sortAnythingByName(animals);
  }
  if (eventClassName === 'vampires') {
    sortedByName = sortAnythingByName(vampires);
  }
  if (eventClassName === 'robots') {
    sortedByName = sortAnythingByName(robots);
  }
  if (eventClassName === 'cronenbergs') {
    sortedByName = sortAnythingByName(cronenbergs);
  }
  if (eventClassName === 'vampires') {
    sortedByName = sortAnythingByName(vampires);
  }
  if (eventClassName === 'diseases') {
    sortedByName = sortAnythingByName(diseases);
  }
  if (eventClassName === 'parasites') {
    sortedByName = sortAnythingByName(parasites);
  }
  if (eventClassName === 'humanoids') {
    sortedByName = sortAnythingByName(humanoids);
  }
  document.querySelector('#resultados').innerHTML = '';
  document.querySelectorAll('#resultados').innerHTML = showInfo(sortedByName);
})
