import {useState } from 'react';
import {type_data} from "../components/constants"
import { First_Mayus } from '../components/functions';
import pokeball from '../assets/pokeball.svg';
import ToBegin from '../components/visual';


const Pokemon = () => {
 
  const [pokemon, setpokemon] = useState("")
  const [svg, setsvg] = useState("")
  const [title, settitle] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [types, settypes] = useState<string[]>([])

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
  
  <div className="flex flex-col justify-evenly bg-gray-500 rounded-lg border-4 border-white p-4 sm:p-8 md:p-10 w-full max-w-md mx-auto min-h-[24rem]">

          <div className='absolute top-0 left-0'>
            <ToBegin/>
          </div>

        <p className="font-mono font-bold text-5xl text-center text-yellow-400 text-bol" style={{ WebkitTextStroke: '1px #3b82f6' }}>Pokémon</p>
          {svg == "" ? (
            <>
              <img src={pokeball} alt="Pokeball" className={`mt-8 mx-auto h-32 w-32 sm:h-40 sm:w-40 ${loading ? "animate-spin" : ""}`} />
              {error && <p className='text-center font-mono text-white'>Pokemon not found</p>}
            </>
          ) : (
            <>
              <p className='text-center font-mono'>{title}</p>
              <img src={svg} alt="Pokemon" className="mt-8 mx-auto h-40 w-40 sm:h-56 sm:w-56 md:h-80 md:w-80" />
              <div className='flex flex-wrap justify-center gap-2 mt-4'>
              {types.map((type) => 
                <p style={{backgroundColor: type_data[type as keyof typeof type_data].color}} className="text-white font-mono rounded p-2" key={type}>{First_Mayus(type)}</p>
              )}
              </div>
            </> 
          )}
          
          <div className='flex flex-col sm:flex-row justify-center gap-4 mt-8'>
            <input
              type="text"
              value={pokemon}
              placeholder="Enter the Pokémon"
              title="Pokémon name"
              onChange={e => setpokemon(e.target.value)}
              className='font-mono bg-white rounded-sm block h-10 p-2 w-full sm:w-48'/>
            <button
              onClick={() => get_pokemon(pokemon)}
              title="Search Pokémon"
              className="font-mono bg-blue-500 hover:bg-blue-600 text-white rounded-sm h-10 px-4 border border-yellow-500 w-full sm:w-auto">
              Search
            </button>
          </div>

      </div>
    )
}

export default Pokemon
