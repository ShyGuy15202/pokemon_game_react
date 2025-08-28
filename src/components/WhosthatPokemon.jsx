import React from 'react'
import Loader from './Loader'
import WhosThatPokemmonLogo from '../assets/WhosThatPokemmonLogo'
import Nav from './navComp/Nav'
import Leaderboard from './Leaderboard'
import GuessPokemonBase from './card/GuessPokemonBase'


const WhosthatPokemon = () => {
  return (
    <div className='w-full h-screen   bg-brandColors-black'>
      {/* Nav */}
      <Nav>
       <WhosThatPokemmonLogo />
      </Nav>

      <Leaderboard/>
        {/* Main */}
      <div className='w-full border-2 px-5 grid grid-cols-6 gap-5'>
        <div className='col-span-6 '>
          <h1>Hi</h1>
          <input type="text" readOnly='true' value='Abhishek' className=' max-w-fit font-headings text-lg'/>
        </div>
        <div className='col-span-6 lg:col-span-2 grid place-items-center'>
          <GuessPokemonBase/>
        </div>
        {/* Mcq Options */}
        <div className='col-span-6 lg:col-span-4 grid grid-cols-subgrid gap-5 place-items-center'>
          <h1 className='col-span-6 text-3xl text-white font-headings '>Whos That Pokemon?</h1>
         {/* buttons */}
          <div className='col-span-3 lg:col-span-2'>
            <button className='px-14 py-2 rounded-md bg-slate-200'>
              <span>Option1</span>
              </button>
          </div>
          <div className='col-span-3 lg:col-span-2'>
            <button className='px-14 py-2 rounded-md bg-slate-200'>
              <span>Option1</span>
              </button>
          </div>
          <div className='col-span-3 lg:col-span-2'>
            <button className='px-14 py-2 rounded-md bg-slate-200'>
              <span>Option1</span>
              </button>
          </div>
          <div className='col-span-3 lg:col-span-2'>
            <button className='px-14 py-2 rounded-md bg-slate-200'>
              <span>Option1</span>
              </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default WhosthatPokemon