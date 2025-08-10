import React, { useEffect, useRef, useState } from 'react'
import PokedexBg from '../assets/img/Bg/1179208-final (1) copy.webp'
import { Search, RefreshCw } from 'lucide-react'
import { pokemontypedata } from '../components/utilities/PokemonType' 
import {Api, showRandom} from '../components/utilities/axios'
import Button from '../components/button/Button'
import Card from '../components/card/Card'
import Nav from '../components/navComp/Nav'
import Loader from '../components/Loader'


const Pokedex = () => {
  const [loading,setLoading]=useState(true)
  const [cardLoading,setcardLoading]=useState(false)
  // collects Input data
  const [inputvalue,setInputValue]=useState('')         //Stores Input Value
  const prevValue=useRef()                            //stores last value (made to avoid re-render)
  const [searchh,setSearch]=useState(null)            //Value to be fetched

  //Checks Value and trims to avoid gaps and gives value to searchh
  function handlepokemonfetch(){
    if (!inputvalue.trim()) return
    setSearch( inputvalue.trim().toLowerCase())
    setInputValue('')}

  //Final function to fech searched Value
  useEffect(()=>{   
  if(searchh && searchh !== prevValue.current){
    prevValue.current=searchh
    pokefetch(searchh)
    setSearch('')}
  },[searchh])
  
///////////////////////////////////////////

// setting the fetch data into card
const [cardData,setcardData]=useState(null)
const [typeArray,setTypeArray]=useState([])

const [cardImg,setcardImg]=useState(null)
///////////////////////////////////////////
async function handlerandom() {
  setcardLoading(true)
  try{
    const result = await showRandom();
   let random= result[Math.floor(Math.random()*result.length)]
   await pokefetch(random.name)  }
  catch(error) { console.log(error)}

}
 
//Also Getting img from hosted url
useEffect(()=>{
  
if(!cardData)setcardImg(null)
setcardImg(`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${cardData?.id?.toString().padStart(3, '0')}.png`)

let type=[]
//Injecting same types into type array
pokemontypedata.map((e)=>{
    cardData?.types.map((t)=> {
    if(t.type.name==e.type){
    type=[...type,e.btnBgColor]}
  })    
})
console.log(type);
setTypeArray(type)
},[cardData])


async function pokefetch(e) {
setcardLoading(true)
return Api.get(`/${e}`)
.then((res)=>{
setcardData(res.data)

})
.catch((err)=>{
console.log(err)
setcardLoading(false)
})
}


useEffect(()=>{
  setTimeout(()=>{
    setLoading(false)

  },2000)
})



  if (loading) {
    return <Loader/>; // Only loader until ready
  }

  return (
    <div className={`relative`}> 
    {/* Bg*/}
    <div className='fixed w-full h-screen flex items-end justify-center  bg-white'>
    <img src={PokedexBg} alt="" className='max-w-none h-full opacity-30' />
    </div>

      <div className='absolute z-[1] top-0 left-0 w-full flex flex-col items-center'>
      <Nav/>
      <div className='flex flex-col mt-2'>
        <h1 className='-mb-2 font-paragraph'>Search for Pokemon</h1>    
    
        <div className='flex items-center mt-3 gap-5'>
        <input type="text" value={inputvalue}
         onChange={(e)=>setInputValue(e.target.value)} 
         onKeyDown={(e)=>{
          if (e.key=='Enter'){
            console.log(e);
            e.preventDefault()
         handlepokemonfetch()}}}  className='w-[18rem] md:w-96 lg:w-96 font-paragraph font-normal text-brandColors-black bg-gray-50 h-14 border-2 border-gray-900 focus:border-b-4  focus:outline-none rounded-md px-4 transition-all  ease-in' />
        <button onClick={handlepokemonfetch} 
        className='h-14 w-14 rounded-md flex gap-2
        justify-center items-center border-2 border-gray-900 text-brandColors-black bg-brandColors-yellow'>
        <Search color='#141414' size={28} />
        </button>  
        </div>
      
        <div className='mt-2 flex gap-5'>
        <Button onlyicon={true} onclick={handlerandom}  >
        <h1>Random</h1>
        <RefreshCw size={20} />
        </Button>
        <Button onlyicon={true} >
        <h1>Show All</h1>
        <RefreshCw size={20} />
        </Button>
      </div>
      </div>
    
      <div>
      {/* {cardLoading ?
       ( cardData ?
        (<div>Loading...</div>) : null ) : (cardData && <Card  fetchedData={cardData} fetchImgUrl={cardImg} pokemonType={typeArray} />)
        
       } */}
       {/* {(cardLoading && !cardData) ?<h1>loading</h1>  : <Card  fetchedData={cardData} fetchImgUrl={cardImg} pokemonType={typeArray} /> }
       */}

        {cardLoading && <h1>loading</h1>}
        {cardData && <Card removeloading={{setcardLoading}} fetchedData={cardData} fetchImgUrl={cardImg} pokemonType={typeArray} />}

      </div>

 
      </div>

      </div>
  )
}

export default Pokedex