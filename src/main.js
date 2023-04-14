import data from './data/pokemon/pokemon.js';
import { btnHamburger, burgerDisplay } from './data.js';
import { botonArriba } from './data.js';
import { goToPokemonDetails } from './data.js';


//EVENTO HAMBURGER
btnHamburger.addEventListener("click", burgerDisplay);

const pokemonContainer = document.querySelector(".pokemon-container");
const searchInput = document.querySelector("#search-input");
const sortSelect = document.querySelector("#sort-select");


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
        ${pokemon.type.map(function(type) {
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


// Bucle para crear las tarjetas de Pokémon
for (let i = 0; i < data.pokemon.length; i++) {
  const pokemon = data.pokemon[i];
  
  const card = document.createElement("div");
  card.className = "pokemon-card";
  card.setAttribute("data-name", pokemon.name);
  card.innerHTML = cardTemplate(pokemon);

  // Agregar un event listener al hacer clic en la tarjeta de Pokémon
  card.addEventListener("click", function() {
    goToPokemonDetails(pokemon.name);
  });

  pokemonContainer.appendChild(card);
};


// Event listener para detectar el cambio en el input de búsqueda
searchInput.addEventListener("input", function(search) {
  const searchText = search.target.value.toLowerCase();
  searchPokemon(searchText);
});

// Función para buscar Pokémon por nombre o número
function searchPokemon(searchText) {
  const cards = document.querySelectorAll(".pokemon-card");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const name = card.dataset.name.toLowerCase();
    const num = card.querySelector(".pokemon-num").textContent.toLowerCase();
    if (name.includes(searchText) || num.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}


// Ordenar por nombre o número, ascendente o descendente
sortSelect.addEventListener("change", () => {
  const optionValue = sortSelect.value;
  let sortedData;

  if (optionValue === "name-asc") {
    sortedData = data.pokemon.sort((a, b) => a.name.localeCompare(b.name));
  } else if (optionValue === "name-desc") {
    sortedData = data.pokemon.sort((a, b) => b.name.localeCompare(a.name));
  } else if (optionValue === "num-asc") {
    sortedData = data.pokemon.sort((a, b) => a.num - b.num);
  } else if (optionValue === "num-desc") {
    sortedData = data.pokemon.sort((a, b) => b.num - a.num);
  }

  // Limpiar la sección de tarjetas de Pokémon y volver a crearlas con el nuevo orden
  pokemonContainer.innerHTML = "";
  for (let i = 0; i < sortedData.length; i++) {
    const pokemon = sortedData[i];
    
    const card = document.createElement("div");
    card.className = "pokemon-card";
    card.setAttribute("data-name", pokemon.name);
    card.innerHTML = cardTemplate(pokemon);
  
    // Agregar un event listener al hacer clic en la tarjeta de Pokémon
    card.addEventListener("click", function() {
      goToPokemonDetails(pokemon.name);
    });
  
    pokemonContainer.appendChild(card);
  };
});




/* eslint-disable no-console */
console.log(data);
/* eslint-enable no-console */

// fetch("./data/pokemon/pokemon.json")
// .then(response => {
//    return response.json();
// })
// .then(jsondata => console.log(jsondata));
