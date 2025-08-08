import React, { useState } from 'react'
const Button = ({onclick,onlyicon,children}) => {

  return (<>
        <button onClick={onclick} className={`${ !onlyicon ? 'h-14 w-14':'h-8 w-28' } rounded-md flex gap-2
        justify-center items-center border-2 border-gray-900 text-brandColors-black bg-brandColors-yellow`}>
         { children  }
        </button> 
        
    
  </>

    
   
  )
}

export default Button