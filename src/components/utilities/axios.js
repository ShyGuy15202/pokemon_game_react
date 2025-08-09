import axios from "axios";
import { useState } from "react";
export const Api=axios.create({
    baseURL:'https://pokeapi.co/api/v2/pokemon/'
})

const ApiAll=axios.create()
 let randomData
async function showRandom() {
    const totalPokemon=1302
    const limitrandom=1
    const offset=Math.round(Math.random()*(totalPokemon-limitrandom+1))
    const url=`https://pokeapi.co/api/v2/pokemon?limit=${limitrandom}&offset=${offset}`
    const res=await ApiAll.get(url)
    console.log(res.data.results);
    randomData=res.data.results
    return randomData}

export {showRandom,randomData}