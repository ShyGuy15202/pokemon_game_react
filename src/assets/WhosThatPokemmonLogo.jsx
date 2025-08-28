import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { MorphSVGPlugin } from 'gsap/all'
import React, { useRef } from 'react'
import { finalPath0,finalPath1,finalPath2,finalPath3 } from '../components/utilities/whosthatPOkemon-Logo'
gsap.registerPlugin(MorphSVGPlugin)


export default function WhosThatPokemmonLogo() {
  const [path0, path1, path2, path3] = [...Array(4)].map(() => useRef(null))
  const blobPath0 = "M60,20 Q100,0 140,20 T180,80 Q160,120 120,140 T60,120 Q20,100 20,60 T60,20 Z";
const blobPath1 = "M70,40 Q90,10 120,30 T160,80 Q140,120 100,100 T50,70 Q30,50 50,40 Z";
 const blobPath2 = "M100,50 Q150,0 200,50 T250,100 Q200,150 150,100 T100,50 Z";
const blobPath3 = "M160,60 Q200,20 240,60 T260,120 Q220,160 180,120 T160,60 Z";
  useGSAP(() => {
    MorphSVGPlugin.convertToPath(path0.current,path1.current,path2.current,path3.current)
   
    gsap.from(path0.current, {
      morphSVG:blobPath0,
      duration: 1,
      yoyo: true,
    })
    gsap.from(path1.current, {
        morphSVG:blobPath1,
      duration: 1,
      yoyo: true,
    })
    gsap.from(path2.current, {
      morphSVG:blobPath2,
      duration: 1,
      yoyo: true,
    })
    gsap.from(path3.current, {
      morphSVG:blobPath3,
      duration: 1,
      yoyo: true,
    })
    

    },[])
  return (
<svg  width="200"  viewBox="0 0 720 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<path ref={path0} d={finalPath0} className=' fill-brandColors-white'/>
<path ref={path1} d={finalPath1} className=' fill-brandColors-white'/>
<path ref={path2} d={finalPath2} className=' fill-brandColors-white'/>
<path ref={path3} d={finalPath3} className=' fill-brandColors-white'/>
</svg>
  )
}

