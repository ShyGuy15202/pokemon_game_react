import React, { useEffect, useState } from 'react'
import api from '../components/utilities/axios'

// export default function usePokedexfetch(pokedexselectedPokemon) {
//   const [pokemondata,setPokemondata]=useState(null)
//   const [pokemonimg,setPokemonimg]=useState(null)
//   useEffect(()=>{
//     if (!pokedexselectedPokemon)return
//     const url=`https://pokeapi.co/api/v2/pokemon/${pokedexselectedPokemon}`
//     fetch(url)
//     .then((res)=>res.json())
//     .then((res)=>{
//       setPokemondata(res)
//       let val=String(res.id)
//       if(val.length>=1){val=`00${val}`}
//       else if(val.length>=2){val=`0${val}`}
//       const img=`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${val}.png`
//     setPokemonimg(img)
//     })
//   },[pokedexselectedPokemon])
//     return {pokemondata,pokemonimg}
// }

export default function usePokedexfetch(pokedexselectedPokemon) {
  const [pokemondata,setPokemondata]=useState(null)
  const [pokemonimg,setPokemonimg]=useState(null)
  useEffect(()=>{
  api.get(`/${pokedexselectedPokemon}`)
  .then((res)=>res.data)
  .then((res)=>console.log(res))
  .catch((err)=>{console.log(err)})
  },[pokedexselectedPokemon])

    return {pokemondata,pokemonimg}
}
