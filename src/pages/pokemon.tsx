import {useState } from 'react';
import {type_colors} from "../components/constants"
import { First_Mayus } from '../components/functions';
import pokeball from '../assets/pokeball.svg';


const Pokemon = () => {
 
  const [pokemon, setpokemon] = useState("")
  const [svg, setsvg] = useState("")
  const [title, settitle] = useState("");
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
        settitle("#" + data.id + ": " + First_Mayus(pokemon))
        settypes(types)
        setpokemon(""); 
      } catch (error) {
        seterror(true)
      }
      setloading(false);
  };

  return (
      <div className="flex flex-col justify-evenly bg-gray-500 h-150 w-150 rounded-lg border-4 border-black">
        <p className="font-mono font-bold text-3xl text-center text-bol">Pokémon</p>

          {svg == "" ? (
            <>
              <img src={pokeball} alt="Pokeball" className={`mt-10 mx-auto h-50 w-50 ${loading ? "animate-spin" : ""}`} />
              {error && <p className='text-center font-mono text-white'>Pokemon not found</p>}
            </>
          ) : (
            <>
              <p className='text-center font-mono'>{title}</p>
              <img src={svg} alt="Pokemon" className={`mt-10 mx-auto h-80 w-80`}/>
              <div className='flex flex-row justify-center gap-x-2'>
              {types.map((type) => 
                <p style={{backgroundColor: type_colors[type]}} className="text-white font-mono rounded p-2" key={type}>{First_Mayus(type)}</p>
              )}
              </div>
            </> 
          )}
          
          <div className='flex flex-row justify-center gap-x-4'>
          <input
            type="text"
            value={pokemon}
            placeholder="Enter the Pokémon"
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
    )
}

export default Pokemon
