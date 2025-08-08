import React, { useEffect, useRef, useState } from 'react'

const TestCard = ({imgUrl}) => {
const imgRef=useRef()
const canvasRef=useRef()
const [dominantColor,setDominantColors]=useState([])
useEffect(()=>{
    if(!imgUrl)return
    const img=imgRef.current
    
    img.crossOrigin = "anonymous"; // Needed for cross-origin image URLs
     img.onload = () => {
      extractColor();
    }
},[imgUrl])

function extractColor(){
const img=imgRef.current
const canvas=canvasRef.current
const ctx=canvas.getContext('2d')
canvas.width=img.width
canvas.height=img.height
ctx.drawImage(img,0,0)


// // pixelData
const imgData=ctx.getImageData(0,0,canvas.width,canvas.height)
const pixels =imgData.data
console.log(
    'imgdata=>',imgData,
    'Pixels=>',pixels,
);

const colorCount={}
const skip=4*10
for (let i=0;i<pixels.length;i+=skip){
    const r=pixels[i]
    const g=pixels[i+1]
    const b=pixels[i+2]
    const a=pixels[i+3]

    if(a===0)continue;
    const colorkey=`${r},${g},${b}`
     colorCount[colorkey] = (colorCount[colorkey] || 0) + 1;
}
 const sortedColors = Object.entries(colorCount).sort((a, b) => b[1] - a[1]);
    const topColors = sortedColors.slice(0, 2).map(([rgb]) => {
      const [r, g, b] = rgb.split(',');
      return `rgb(${r}, ${g}, ${b})`;
    });

    setDominantColors(topColors);
    
  };
useEffect(() => {
  console.log('Updated dominant colors:', dominantColor);
}, [dominantColor]);

  return (
    <div>
        <canvas className='bg-yellow-400' ref={canvasRef}></canvas>
        <img src={imgUrl} ref={imgRef} alt="Img" className= 'w-48   max-w-none'/>
    </div>
  )
}

export default TestCard