import axios from "axios";
import { useState } from "react";
export const Api=axios.create({
    baseURL:'https://pokeapi.co/api/v2/pokemon/'
})

// const ApiAll=axios.create()
//  async function showRandom() {
//     const totalPokemon=1302
//     const limitrandom=Math.round(Math.random()*1302)
//     const maxOffset=totalPokemon-15
//     const offset=Math.floor(Math.random()*(maxOffset+1))  
//     const url=`https://pokeapi.co/api/v2/pokemon?limit=${15}&offset=${offset}`
//     const res=await ApiAll.get(url)
//     console.log(res);
    
//     return res.data.results}

// export {showRandom}


const axiosAll = axios.create();

async function showRandom() {
  const totalPokemon = 1000;
  const limit = 15;

  // ensure offset + limit ≤ totalPokemon
  const maxOffset = totalPokemon - limit;
  const offset = Math.floor(Math.random() * (maxOffset + 1)); 

  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const res = await axiosAll.get(url);

  return res.data.results;
}

async function suggestionPokemon() {
 const suggestionLimit=100000

  const url = `https://pokeapi.co/api/v2/pokemon?limit=${suggestionLimit}&offset=0`
  const res = await axiosAll.get(url)
  return res.data.results
}


export { showRandom,suggestionPokemon };
