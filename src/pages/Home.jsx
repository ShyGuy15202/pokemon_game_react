import React, { useEffect, useRef, useState } from 'react'
import pikachuVideo from '../assets/video/Pikachu Pixel Animated Loop.mp4'
import PokemonLogo from '../assets/img/pokemon-logo.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin'
gsap.registerPlugin(ScrambleTextPlugin)
import pokedex from '../assets/img/pokedex.png'
import {  NavLink } from 'react-router'

const Home = () => {
  const pokedexTxt=useRef(null)
  const guessThePokemon=useRef(null)
  const pokedexImgRef=useRef(null)
  
  const videoSelector=useRef(null)
  const [videoDuration,setVideoDuration]= useState(0)
  const [videoProgress,setvideoProgress]= useState(0)

function handleLoadMetaData (){
const video=videoSelector.current
if(video){setVideoDuration(video.duration);
  console.log(video.duration);
  
}
}


useGSAP(()=>{
gsap.to('.choose',{
  duration:3,
  scrambleText:{
    text:'Choose to one:',
    chars:'X0',
    speed:0.01}})

gsap.to(pokedexTxt.current,{
  duration:3,
  scrambleText:{
    text:'Pokedex',
    chars:'X0',
    speed:0.01}})

gsap.to(guessThePokemon.current,{
  duration:3,
  scrambleText:{
    text:'Whos That Pokemon ?',
    chars:'X0',
    speed:0.01}})
})


  return (
    <div className='h-[100vh] overflow-hidden relative  flex items-center justify-center'>
        <div className=' top-0 z-[1] flex flex-col items-center justify-center absolute text-brandColors-white  font-headings'>  
        <img  src={PokemonLogo} className='h-36 md:h-32 lg:h-36' alt="Pokemon Logo" />
        <h2 className='choose text-3xl mt-8 text-brandColors-black'>Choose one:</h2>
        <NavLink to='/pokedex'>
        <button className='w-80 h-14 text-lg font-semibold font-paragraph rounded-full  mt-5 bg-brandColors-yellow text-brandColors-black border-brandColors-darkBlue border-[3px] flex items-center justify-center gap-2'>
         <img ref={pokedexImgRef} src={pokedex} alt="POkedexIcon" className='h-8 ' />
         <span ref={pokedexTxt}>
         Pokedex
          </span>
         </button>
        </NavLink>
        <button className='w-80 h-14 text-lg font-semibold font-paragraph rounded-full  mt-5 bg-brandColors-yellow text-brandColors-black border-brandColors-darkBlue border-[3px] flex items-center justify-center gap-2'>
         <img src='https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png' alt="POkedexIcon" className='h-8 grayscale brightness-0 -scale-x-100' />
          <span ref={guessThePokemon}>Whos That Pokemon ?</span> 
          </button>
        </div>
        <video 
        autoPlay 
        loop muted 
        className='h-[130%] max-w-none' 
        ref={videoSelector}  
        onProgress={(event)=>{console.log(event);}}
        onLoadedMetadata={handleLoadMetaData} >
        <source src={pikachuVideo} type="video/mp4" />
        </video>
    </div>
  )

}
export default Home