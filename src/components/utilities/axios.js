import axios from "axios";
export const Api=axios.create({
    baseURL:'https://pokeapi.co/api/v2/pokemon/'
})

const ApiAll=axios.create()
async function showRandom(limitrandom,Offset) {
    const totalPokemon=1302
    const minVal=1
    const maxVal=10
    limitrandom=Math.round(Math.random()*(maxVal-minVal+1))
    console.log('limitrandom=>',limitrandom);
    Offset=Math.round(Math.random()*(totalPokemon-limitrandom+1))
    const url=`https://pokeapi.co/api/v2/pokemon?limit=${limitrandom}&offset=${Offset}`
    const res=await ApiAll.get(url)
    console.log(res.data.results);}

export {showRandom}