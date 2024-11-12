import React from 'react';

const Li = ({icon, text}) => {
  return (
    <li className={`flex text-start px-[10px]`}>
      <p className='pt-[4px]'>{icon}</p>
      <p className='ml-[4px]'>{text}</p>
    </li>
  )
}

export default Li;