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
      {/* <Leaderboard/> */}
      <div className='w-full border-2 grid grid-cols-6'>
        <div className='col-span-6 grid place-items-center'>
          <GuessPokemonBase/>
        </div>
        <div className='col-span-6 grid grid-cols-subgrid'>
          <h1 className='col-span-6 text-2xl text-white font-headings '>Whos That Pokemon?</h1>
          <div className='col-span-3'>
            <button>
              <span>Option1</span>
              </button>
          </div>
          <div className='col-span-3'>
            <button>
              <span>Option1</span>
              </button>
          </div>
          <div className='col-span-3'>
            <button>
              <span>Option1</span>
              </button>
          </div>
          <div className='col-span-3'>
            <button>
              <span>Option1</span>
              </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default WhosthatPokemon