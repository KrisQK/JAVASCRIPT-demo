//fetch = make http request to fetch data from API
// async
//fetch(url, {options})
//fetch(url,{method:"GET"})
//------------
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("could not fetch data, response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
//---------------
// fetchData();
async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error("could not fetch data, response was not ok");
    }
    const data = await response.json();
    // console.log(data);
    const pokemonSprite = data.sprites.front_default;
    const imageElement = document.getElementById("pokemonSprite");
    imageElement.src = pokemonSprite;
    imageElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
