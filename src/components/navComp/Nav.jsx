import React from 'react'
import { CircleArrowLeft } from 'lucide-react'
import { replace, useNavigate } from 'react-router'
const Nav = (props) => {
const navigate=useNavigate()
function handleNavigate() {
  navigate('/',{replace:true})
}


  return (
    <div className='relative w-full h-16 flex items-center justify-center '>
       <div onClick={handleNavigate} className='absolute flex items-center cursor-pointer gap-2 font-paragraph left-5'>
            <CircleArrowLeft size={28} /> 
            <h2 className='hidden  lg:block '>Back</h2>
       </div>
        <div className='flex gap-3  font-headings items-center'>
       {props.children}
       
      </div>
    </div>
     
  )
}

export default Nav