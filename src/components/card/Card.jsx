import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import CardBaseSvg from './CardBaseSvg'
import { BasicStatsSvgs } from '../utilities/BasicStatsName'
import StatsTypeBtn from './StatsTypeBtn'

const Card = ({ value, fetchedData, fetchImgUrl, pokemonType }) => {
  const imgRef = useRef(null)

  // Animate Pokémon image pop-in
  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: 'back.out(1.7)',
          delay: 0.1
        }
      )
    }
  }, [fetchImgUrl])

  return (
    <div className="relative mt-2 w-96 flex items-center justify-center">
      {/* Card SVG Background Shape */}
      {fetchedData && fetchedData?.name && (
        <CardBaseSvg typeData={fetchedData?.types} />
      )}

      {/* Card Content */}
      <div className="absolute">
        <div className="w-full flex flex-col justify-center gap-3">
          {/* Top Heading */}
          <h1 className="text-brandColors-white font-headings text-4xl/[2rem] text-center capitalize">
            {fetchedData?.name}
          </h1>

          {/* Gradient Text */}
          <h1
            className={`bg-clip-text text-transparent bg-gradient-to-b from-white from-10% to-[#7daf7e00] to-75% font-paragraph font-regular text-8xl/[5.5rem] text-center`}
          >
            {fetchedData?.id?.toString().padStart(3, '0')}
          </h1>

          {/* Pokémon Img */}
          <div className="relative flex justify-center">
            {fetchedData && fetchedData.name && (
              <>
                <img
                  ref={imgRef}
                  src={fetchImgUrl}
                  className="w-48 absolute max-w-none bottom-0"
                  alt={fetchedData?.name}
                />
              </>
            )}

            {/* Img Bg Box */}
            {fetchedData && fetchedData.name && (
              <span className="w-48 h-24 rounded-xl bg-brandColors-black" />
            )}
          </div>

          {/* Type Button */}
          <div className="flex-wrap flex gap-2 justify-center">
            {fetchedData &&
              fetchedData?.types &&
              fetchedData.types.map((e) => (
                <StatsTypeBtn
                  key={e.type.name}
                  btnTypeColor={pokemonType}
                  className="px-4 py-[0.1rem] rounded-md font-paragraph capitalize"
                >
                  {e.type.name}
                </StatsTypeBtn>
              ))}
          </div>

          {/* Basic Stats Heading */}
          {fetchedData && fetchedData.name && (
            <h2 className="text-white text-2xl/6 font-headings text-center">
              Basic Stats
            </h2>
          )}

          {/* Basic Stats data */}
          <div className="flex w-72 gap-x-4 justify-center flex-wrap">
            {fetchedData &&
              fetchedData.stats &&
              fetchedData.stats.map((e, index) => (
                <div
                  key={e.stat.name}
                  className="flex text-white items-center justify-center gap-1"
                >
                  {/* Basic Stats Icon */}
                  <svg
                    width={BasicStatsSvgs[index].svg.width}
                    height={BasicStatsSvgs[index].svg.height}
                    viewBox={BasicStatsSvgs[index].svg.viewBox}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d={BasicStatsSvgs[index].svg.path}
                      fill="white"
                    />
                  </svg>
                  <div>
                    <span className="font-headings">
                      {BasicStatsSvgs[index].svg.name}:
                    </span>
                    <span className="font-paragraph">
                      {e.base_stat}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
