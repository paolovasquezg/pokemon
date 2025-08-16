
import { useState } from "react"
import { type_data } from "../components/constants"
import { First_Mayus } from "../components/functions";
import ToBegin from "../components/visual";

const Types = () => {

    const [loading, setloading] = useState(false);
    const [info, setinfo] = useState(false);
    const [error, seterror] = useState(false)
    const [type, settype] = useState("");
    const [index, setindex] = useState("")

  const [doubleDamageFrom, setDoubleDamageFrom] = useState<string[]>([]);
  const [doubleDamageTo, setDoubleDamageTo] = useState<string[]>([]);
  const [halfDamageFrom, setHalfDamageFrom] = useState<string[]>([]);
  const [halfDamageTo, setHalfDamageTo] = useState<string[]>([]);
  const [noDamageFrom, setNoDamageFrom] = useState<string[]>([]);
  const [noDamageTo, setNoDamageTo] = useState<string[]>([]);


    const get_type = async (type: string) => {
      setinfo(false);
      if (!type) return;
      setloading(true);
      const url = `https://pokeapi.co/api/v2/type/${type}`;
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Type not found');
        const data = await response.json();
        setindex(type);
        setDoubleDamageFrom(data.damage_relations.double_damage_from.map((t: any) => t.name));
        setDoubleDamageTo(data.damage_relations.double_damage_to.map((t: any) => t.name));
        setHalfDamageFrom(data.damage_relations.half_damage_from.map((t: any) => t.name));
        setHalfDamageTo(data.damage_relations.half_damage_to.map((t: any) => t.name));
        setNoDamageFrom(data.damage_relations.no_damage_from.map((t: any) => t.name));
        setNoDamageTo(data.damage_relations.no_damage_to.map((t: any) => t.name));
        setinfo(true);
        seterror(false);
        settype("");
      } catch (error) {
        seterror(true);
      }
      setloading(false);
    };

  return (
  <div className="flex flex-col bg-gray-500 rounded-lg border-4 border-white p-4 sm:p-8 md:p-10 w-full max-w-3xl mx-auto min-h-[24rem] justify-between">
    <div className='absolute top-0 left-0'>
        <ToBegin/>
    </div>
        <p className="font-mono font-bold text-5xl text-center text-yellow-400 text-bold mt-5" style={{ WebkitTextStroke: '1px #3b82f6' }}>Types</p>

        {info ? (
          <div className="flex flex-col md:flex-row items-start gap-8 mt-10">
            <div className="flex flex-col items-center gap-4 mb-8 md:mb-0">
              <div key={index} className={`rounded-full p-4 flex items-center justify-center w-40 h-40 sm:w-56 sm:h-56 md:w-70 md:h-70 ${loading ? "animate-spin" : ""}`} style={{ backgroundColor: type_data[index as keyof typeof type_data].color }}>
                <img src={type_data[index as keyof typeof type_data].src} alt={index} className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40" />
              </div>
              <p className="text-white text-center font-mono text-xl rounded p-2" key={index}>{First_Mayus(index)}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ml-0 md:ml-5 mt-0 md:mt-10 w-full">
              <div>
                <p className="text-blue-300 font-bold text-lg mb-2">Double Damage From</p>
                {doubleDamageFrom.length ? doubleDamageFrom.map(t => (
                  <span key={t} className="text-white font-mono text-base mb-1 rounded px-2 py-1 inline-block" style={{ backgroundColor: type_data[t as keyof typeof type_data]?.color || '#888' }}>
                    {First_Mayus(t)}
                  </span>
                )) : <p className="text-gray-400">None</p>}
              </div>
              <div>
                <p className="text-green-300 font-bold text-lg mb-2">Double Damage To</p>
                {doubleDamageTo.length ? doubleDamageTo.map(t => (
                  <span key={t} className="text-white font-mono text-base mb-1 rounded px-2 py-1 inline-block" style={{ backgroundColor: type_data[t as keyof typeof type_data]?.color || '#888' }}>
                    {First_Mayus(t)}
                  </span>
                )) : <p className="text-gray-400">None</p>}
              </div>
              <div>
                <p className="text-yellow-300 font-bold text-lg mb-2">Half Damage From</p>
                {halfDamageFrom.length ? halfDamageFrom.map(t => (
                  <span key={t} className="text-white font-mono text-base mb-1 rounded px-2 py-1 inline-block" style={{ backgroundColor: type_data[t as keyof typeof type_data]?.color || '#888' }}>
                    {First_Mayus(t)}
                  </span>
                )) : <p className="text-gray-400">None</p>}
              </div>
              <div>
                <p className="text-pink-300 font-bold text-lg mb-2">Half Damage To</p>
                {halfDamageTo.length ? halfDamageTo.map(t => (
                  <span key={t} className="text-white font-mono text-base mb-1 rounded px-2 py-1 inline-block" style={{ backgroundColor: type_data[t as keyof typeof type_data]?.color || '#888' }}>
                    {First_Mayus(t)}
                  </span>
                )) : <p className="text-gray-400">None</p>}
              </div>
              <div>
                <p className="text-gray-300 font-bold text-lg mb-2">No Damage From</p>
                {noDamageFrom.length ? noDamageFrom.map(t => (
                  <span key={t} className="text-white font-mono text-base mb-1 rounded px-2 py-1 inline-block" style={{ backgroundColor: type_data[t as keyof typeof type_data]?.color || '#888' }}>
                    {First_Mayus(t)}
                  </span>
                )) : <p className="text-gray-400">None</p>}
              </div>
              <div>
                <p className="text-gray-300 font-bold text-lg mb-2">No Damage To</p>
                {noDamageTo.length ? noDamageTo.map(t => (
                  <span key={t} className="text-white font-mono text-base mb-1 rounded px-2 py-1 inline-block" style={{ backgroundColor: type_data[t as keyof typeof type_data]?.color || '#888' }}>
                    {First_Mayus(t)}
                  </span>
                )) : <p className="text-gray-400">None</p>}
              </div>
            </div>
          </div>
        ): (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-10 ml-0">
              {Object.entries(type_data).map(([name, { src, color }]) => (
                <div key={name} className={`rounded-full p-4 flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 ${loading ? "animate-spin" : ""}`} style={{ backgroundColor: color }}>
                  <img src={src} alt={name} className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-1" />
                </div>
              ))}
            </div>
        )}

        {error && <p className='text-center font-mono text-white mt-16'>Type not found</p>}

        <div className='flex flex-row justify-center gap-x-4 mt-auto pt-10'>
          <input
            type="text"
            value={type}
            onChange={e => settype(e.target.value)}
            placeholder="Enter the type"
            title="Pokémon type"
            className='font-mono bg-white rounded-sm block h-10 p-2'/>
          <button
            title="Search Pokémon"
            onClick={() => {get_type(type)}}
            className="font-mono bg-yellow-500 hover:bg-yellow-600 text-white rounded-sm h-10 px-4 border border-blue-500">
            Search
          </button>
        </div>
        </div>
    )
}

export default Types
