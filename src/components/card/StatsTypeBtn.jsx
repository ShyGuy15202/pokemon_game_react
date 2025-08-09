
import React from 'react';
import { pokemontypedata } from '../utilities/PokemonType';
const StatsTypeBtn = ({ children, className, btnTypeColor }) => {
const match=pokemontypedata.find((f)=>f.type==children)
const bgmatchcolor=match?.btnBgColor

  return (
   
        <button
          className={className}
          style={{ background: bgmatchcolor }}
        >
          <h2 className='text-brandColors-white'>{children}</h2>
        </button>
  

  );
};

export default StatsTypeBtn;
