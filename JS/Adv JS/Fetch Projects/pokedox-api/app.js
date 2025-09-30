
const getPokemon = async () => {

    try {
        const pokemonName = document.getElementById('searchName').value.toLowerCase()
        const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!pokemonData.ok){
            throw new Error('Could not find pokemon')
        }

        const data = await pokemonData.json();
        const pokemonImg = data.sprites.front_default;

        const displayPokemon = document.getElementById('pokemonImg')

        displayPokemon.src = pokemonImg
        displayPokemon.style.display = 'block'   
    } catch (error) {
        console.log(error)
    }
} 

const pokemonBtn = document.getElementById('searchBtn')
pokemonBtn.addEventListener('click', getPokemon) 

pokemonBtn.addEventListener('keypress', (e) => {
    if(e.key === 'Enter' || e.key === 'Return'){
        getPokemon()
    }
})