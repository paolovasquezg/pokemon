import {useState } from 'react';
import pokeball from './assets/pokeball.svg';


function App() {

  const type_colors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD"
};

  const [pokemon, setpokemon] = useState("")
  const [svg, setsvg] = useState("")
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [types, settypes] = useState([])

    const get_pokemon = async (pokemon: string) => {
      setsvg("")
      seterror(false)
      if (!pokemon) return;
      setloading(true);
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Pokémon not found');
        const data = await response.json();
        setsvg(data.sprites.front_default)
        let types = data.types.map((type: any) => type.type.name)
        settypes(types)
        setpokemon("")
      } catch (error) {
        seterror(true)
      }

      setloading(false);
  };

  return (
  <div className="p-4 h-screen flex justify-center items-center">
      <div className="flex flex-col justify-evenly bg-gray-500 h-150 w-150 rounded-lg border-4 border-black">
        <p className="font-mono font-bold text-3xl text-center text-bol">Find your Pokemon</p>

          {svg == "" ? (
            <>
              <img src={pokeball} alt="Pokeball" className={`mt-10 mx-auto h-50 w-50 ${loading ? "animate-spin" : ""}`} />
              {error && <p className='text-center font-mono text-white'>Pokemon not found</p>}
            </>
          ) : (
            <>
              <img src={svg} alt="Pokemon" className={`mt-10 mx-auto h-80 w-80`}/>
              <div className='flex flex-row justify-center gap-x-2'>
              {types.map((type) => 
                <p style={{backgroundColor: type_colors[type]}} className="text-white font-mono rounded p-2" key={type}>{type}</p>
              )}
              </div>
            </> 
          )}
          
          <div className='flex flex-row justify-center gap-x-4'>
          <input
            type="text"
            placeholder="Enter the pokemon"
            title="Pokémon name"
            onChange={e => setpokemon(e.target.value)}
            className='font-mono bg-white rounded-sm block h-10 mt-10 p-2'/>
          <button
            onClick={() => get_pokemon(pokemon)}
            title="Search Pokémon"
            className="font-mono bg-blue-500 hovered:bg-blue-600 text-white rounded-sm h-10 mt-10 px-4">
            Search
          </button>
          </div>

      </div>
  </div>
    )
}

export default App
