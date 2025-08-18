import React, { useEffect, useRef, useState } from 'react'
import PokedexBg from '../assets/img/Bg/1179208-final (1) copy.webp'
import pokedex from '../assets/img/pokedex.png'
import { Search, RefreshCw } from 'lucide-react'
import { pokemontypedata } from '../components/utilities/PokemonType'
import { Api, showRandom } from '../components/utilities/axios'
import Button from '../components/button/Button'
import Card from '../components/card/Card'
import Nav from '../components/navComp/Nav'
import Loader from '../components/Loader'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Pokedex = () => {
  const [loading, setLoading] = useState(true)
  const [cardLoading, setCardLoading] = useState(false)
  const [error, setError] = useState(null)

  const [inputValue, setInputValue] = useState('')
  const prevValue = useRef()
  const [searchQuery, setSearchQuery] = useState(null)

  const [cardData, setCardData] = useState(null)
  const [typeArray, setTypeArray] = useState([])
  const [cardImg, setCardImg] = useState(null)

  // Refs for GSAP
  const searchSectionRef = useRef(null)
  const cardRef = useRef(null)

  // Splash loader then search bar animation
  useGSAP(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      gsap.from(searchSectionRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      })
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  function handlePokemonFetch() {
    if (!inputValue.trim()) return
    setSearchQuery(inputValue.trim().toLowerCase())
    setInputValue('')
  }

  useEffect(() => {
    if (searchQuery && searchQuery !== prevValue.current) {
      prevValue.current = searchQuery
      pokeFetch(searchQuery)
      setSearchQuery('')
    }
  }, [searchQuery])

  async function handleRandom() {
    try {
      setCardLoading(true)
      setError(null)
      const result = await showRandom()
      let random = result[Math.floor(Math.random() * result.length)]
      await pokeFetch(random.name)
    } catch (error) {
      setError('Failed to get random Pokémon')
      setCardLoading(false)
    }
  }

  async function pokeFetch(name) {
    setCardLoading(true)
    setError(null)

    // Animate out old card
    if (cardRef.current && cardData) {
      await gsap.to(cardRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: 'power2.inOut'
      })
    }

    try {
      const res = await Api.get(`/${name}`)
      const data = res.data

      // Prepare image & wait for load
      const imgUrl = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${data?.id
        ?.toString()
        .padStart(3, '0')}.png`

      await new Promise((resolve) => {
        const img = new Image()
        img.src = imgUrl
        img.onload = resolve
        img.onerror = resolve // still resolve on error to avoid hang
      })

      setCardData(data)
      setCardImg(imgUrl)

      // Animate in new card
      requestAnimationFrame(() => {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
        )
      })
    } catch (err) {
      console.log(err)
      setError('Pokémon not found!')
      setCardData(null)
    } finally {
      setCardLoading(false)
    }
  }

  useEffect(() => {
    if (!cardData) {
      setTypeArray([])
      return
    }

    let typeColors = []
    pokemontypedata.forEach((e) => {
      cardData?.types.forEach((t) => {
        if (t.type.name === e.type) {
          typeColors.push(e.btnBgColor)
        }
      })
    })
    setTypeArray(typeColors)
  }, [cardData])

  if (loading) return <Loader />

  return (
    <div className="relative">
      {/* Background */}
      <div className="fixed w-full h-screen flex items-end justify-center bg-white">
        <img src={PokedexBg} alt="" className="max-w-none h-full opacity-30" />
      </div>

      <div className="absolute z-[1] top-0 left-0 w-full flex flex-col items-center">
        <Nav>
         <img src={pokedex} alt="POkedex Image" className='h-10' />
          <h1 className='text-[2rem]'>Pokedex</h1>
        </Nav>


        {/* Search */}
        <div ref={searchSectionRef} className="flex flex-col mt-2">
          <h1 className="-mb-2 font-paragraph">Search for Pokémon</h1>

          <div className="flex items-center mt-3 gap-5">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  handlePokemonFetch()
                }
              }}
              className="w-[18rem] md:w-96 lg:w-96 font-paragraph font-normal text-brandColors-black bg-gray-50 h-14 border-2 border-gray-900 focus:border-b-4 focus:outline-none rounded-md px-4 transition-all ease-in"
            />
            <button
              onClick={handlePokemonFetch}
              className="h-14 w-14 rounded-md flex gap-2 justify-center items-center border-2 border-gray-900 text-brandColors-black bg-brandColors-yellow"
            >
              <Search color="#141414" size={28} />
            </button>
          </div>

          {/* Buttons */}
          <div className="mt-2 flex gap-5">
            <Button onlyicon={true} onclick={handleRandom}>
              <h1>Random</h1>
              <RefreshCw size={20} />
            </Button>
            <Button onlyicon={true}>
              <h1>Show All</h1>
              <RefreshCw size={20} />
            </Button>
          </div>
        </div>

        {/* Pokémon Card */}
        <div className="mt-5 min-h-[350px]" ref={cardRef}>
          {cardLoading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1 className="text-red-600">{error}</h1>
          ) : cardData ? (
            <Card
              removeloading={{ setCardLoading }}
              fetchedData={cardData}
              fetchImgUrl={cardImg}
              pokemonType={typeArray}
            />
          ) : (
            <h1>Search or get a random Pokémon</h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default Pokedex
