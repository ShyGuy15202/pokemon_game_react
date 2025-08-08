import React, { useEffect,useState } from 'react'
import { pokemontypedata } from '../utilities/PokemonType';


const CardBaseSvg=({typeData})=>{
const [cardColor,setcardColor]=useState(null)
useEffect(()=>{
 const pokcolor=pokemontypedata.find((e)=>typeData[0]?.type.name==e.type)
  if(pokcolor){
    setcardColor(pokcolor)}
  }
,[typeData])


  return (
<svg width="320" height="440" viewBox="0 0 320 440"  xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M309.5 354.5C315.299 354.5 320 359.201 320 365V421C320 431.493 311.493 440 301 440H19C8.50659 440 0 431.493 0 421V151.97C0 146.132 4.73249 141.4 10.5703 141.4V141.4C16.4081 141.4 21.1406 136.667 21.1406 130.83V74.5703C21.1406 68.7325 16.4081 64 10.5703 64V64C4.73249 64 0 59.2675 0 53.4297V19C0 8.50659 8.50659 0 19 0H301C311.493 0 320 8.50659 320 19V266.6C320 272.399 315.299 277.1 309.5 277.1V277.1C303.701 277.1 299 281.801 299 287.6V344C299 349.799 303.701 354.5 309.5 354.5V354.5Z" fill="url(#paint0_radial_899_1281)"/>
<defs>

<radialGradient  id="paint0_radial_899_1281" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-1.29637e-05 20) rotate(51.3402) scale(512.25 202.965)">
<stop  className='transition-all duration-300 ease-custom' offset="0.138965" stopColor={cardColor?.Gradient.light}
/>
<stop  className='transition-all duration-300 ease-custom' offset="1" stopColor={cardColor?.Gradient.dark}
/>
</radialGradient>
</defs>
</svg>
)}

export default CardBaseSvg




{/* <svg width="320" height="400" viewBox="0 0 320 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M309.5 314.5C315.299 314.5 320 319.201 320 325V381C320 391.493 311.493 400 301 400H19C8.50659 400 0 391.493 0 381V151.97C0 146.132 4.73249 141.4 10.5703 141.4V141.4C16.4081 141.4 21.1406 136.667 21.1406 130.83V74.5703C21.1406 68.7325 16.4081 64 10.5703 64V64C4.73249 64 0 59.2675 0 53.4297V19C0 8.50659 8.50659 0 19 0H301C311.493 0 320 8.50659 320 19V226.6C320 232.399 315.299 237.1 309.5 237.1V237.1C303.701 237.1 299 241.801 299 247.6V304C299 309.799 303.701 314.5 309.5 314.5V314.5Z" fill="url(#paint0_radial_899_1281)"/>
<defs>
<radialGradient id="paint0_radial_899_1281" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(51.3402) scale(512.25 202.965)">
<stop offset="0.138965" stop-color="#8BBE8A"/>
<stop offset="1" stop-color="#619267"/>
</radialGradient>
</defs>
</svg> */}