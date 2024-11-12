import React from 'react';

const MyButton = ({href, texto}) => {
  return (
    <button className='bg-[#64cf55] w-fit self-center rounded px-[10px] py-[5px] hover:bg-[#1f7013] text-[#1f7013] hover:text-[#64cf55]'>
      <a
        target='_blank'
        href={href}
      >{texto}</a>
    </button>
  )
}

export default MyButton;