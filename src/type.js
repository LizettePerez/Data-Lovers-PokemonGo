import data from './data/pokemon/pokemon.js';
import { filterPokemonByType } from './data.js';


const pokemonContainer = document.querySelector(".pokemon-container");

const bugButton = document.querySelector(".bug-button");
const darkButton = document.querySelector(".dark-button");
const dragonButton = document.querySelector(".dragon-button");
const electricButton = document.querySelector(".electric-button");
const fairyButton = document.querySelector(".fairy-button");
const fightingButton = document.querySelector(".fighting-button");
const fireButton = document.querySelector(".fire-button");
const flyingButton = document.querySelector(".flying-button");
const ghostButton = document.querySelector(".ghost-button");
const grassButton = document.querySelector(".grass-button");
const groundButton = document.querySelector(".ground-button");
const iceButton = document.querySelector(".ice-button");
const normButton = document.querySelector(".norm-button");
const poisonButton = document.querySelector(".poison-button");
const psychicButton = document.querySelector(".psychic-button");
const rockButton = document.querySelector(".rock-button");
const steelButton = document.querySelector(".steel-button");
const waterButton = document.querySelector(".water-button");


//agregar imagen a cada elemento
const typeImages = {
  grass: "./img/elementos/grass.png",
  poison: "./img/elementos/poison.png",
  fire: "./img/elementos/fire.png",
  flying: "./img/elementos/flying.png",
  water: "./img/elementos/water.png",
  bug: "./img/elementos/bug.png",
  normal: "./img/elementos/normal.png",
  electric: "./img/elementos/electric.png",
  ground: "./img/elementos/ground.png",
  fighting: "./img/elementos/fight.png",
  psychic: "./img/elementos/psychic.png",
  rock: "./img/elementos/rock.png",
  ice: "./img/elementos/ice.png",
  ghost: "./img/elementos/ghost.png",
  dragon: "./img/elementos/dragon.png",
  fairy: "./img/elementos/fairy.png",
  dark: "./img/elementos/dark.png",
  steel: "./img/elementos/steel.png",
};


// Plantilla de cadena de texto para una tarjeta de Pokémon
function cardTemplate(pokemon) {
  return `
    <div class="pokemon-card" data-name="${pokemon.name}">
      <div class="pokemon-img-container">
        <img src="${pokemon.img}" alt="${pokemon.name}" />
      </div>
      <p class="pokemon-num">#${pokemon.num}</p>
      <h2 class="pokemon-name">${pokemon.name}</h2>
      <div class="pokemon-type">
        ${pokemon.type.map(function (type) {
    return `
              <img
                src="${typeImages[type]}"
                alt="${type}"
                class="pokemon-type-img"
                title="${type.charAt(0).toUpperCase() + type.slice(1)}"
                style="width: 25px; height: 25px; display: inline-block; margin-right: 2px;"
              />
            `;
  }).join("")}
      </div>
    </div>
  `;
}


// Crear card de cada pokemon
function createPokemonCards(pokemonList) {
  pokemonContainer.innerHTML = "";

  for (let i = 0; i < pokemonList.length; i++) {
    const pokemon = pokemonList[i];

    const card = document.createElement("div");
    card.className = "pokemon-card";
    card.setAttribute("data-name", pokemon.name);
    card.innerHTML = cardTemplate(pokemon);

    // Agregar un event listener al hacer clic en la tarjeta de Pokémon
    card.addEventListener("click", function () {
      goToPokemonDetails(pokemon.name);
    });

    pokemonContainer.appendChild(card);
  }
}




function goToPokemonDetails(pokemonName) {
  const pokemonDetailsUrl = "./pokemon-details.html?name=" + pokemonName;
  window.location.href = pokemonDetailsUrl;
}

function addFilterButtonType(button, type) {
  button.addEventListener("click", function () {
    const filteredPokemon = filterPokemonByType(type, data.pokemon);
    createPokemonCards(filteredPokemon);
    pokemonContainer.classList.remove("hidden");
  });
}

addFilterButtonType(bugButton, "bug");
addFilterButtonType(darkButton, "dark");
addFilterButtonType(dragonButton, "dragon");
addFilterButtonType(electricButton, "electric");
addFilterButtonType(fairyButton, "fairy");
addFilterButtonType(fightingButton, "fighting");
addFilterButtonType(fireButton, "fire");
addFilterButtonType(flyingButton, "flying");
addFilterButtonType(ghostButton, "ghost");
addFilterButtonType(grassButton, "grass");
addFilterButtonType(groundButton, "grounvd");
addFilterButtonType(iceButton, "ice");
addFilterButtonType(normButton, "normal");
addFilterButtonType(poisonButton, "poison");
addFilterButtonType(psychicButton, "psychic");
addFilterButtonType(rockButton, "rock");
addFilterButtonType(steelButton, "steel");
addFilterButtonType(waterButton, "water");







const botonArriba = document.querySelector('.arriba');
botonArriba.addEventListener('click', function () {
  // Usa la función "scrollTo" para moverte al inicio del documento
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});





//EVENTO HAMBURGER
const btnHamburger = document.getElementById("hamburger");
btnHamburger.addEventListener("click", burgerDisplay);
function burgerDisplay() {
  const navbarElement  = document.getElementById("myNavbar");
  if (navbarElement.classList.contains("responsive")) {
    navbarElement.classList.remove("responsive");
  } else {
    navbarElement.classList.add("responsive");
  }
}
