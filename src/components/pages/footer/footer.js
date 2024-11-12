import React from 'react';
import { ADDRESS, EMAIL, MAPS, PADDING, PHONE_NUMBER, WPP_LINK  } from '../../../utils/constants';
import { SiGooglemaps } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {

  const tagStyle = 'cursor-pointer flex gap-[5px]';
  const iconStyle = 'text-xl'

  return (
    <footer className={`${PADDING} bg-qua font-roboto text-pri pb-[50px] flex flex-col gap-[20px]`}>
      <div className='flex flex-col gap-[10px] md:grid md:grid-cols-2 lg:grid-cols-[1fr_0.7fr_1fr] '>
        <a className={`${tagStyle}`} href={`mailto:${EMAIL}`}><MdEmail className={iconStyle}/> {EMAIL}</a>
        <a className={`${tagStyle}`} href={`${WPP_LINK}`}><FaWhatsapp className={iconStyle} /> {PHONE_NUMBER}</a>
        <a className={`${tagStyle} md:col-span-2 lg:col-span-1`} href={`${MAPS}`}><SiGooglemaps className={iconStyle} /> {ADDRESS}</a>
      </div>

      <div className='flex flex-col text-sm md:flex-row md:gap-[20px]'>
        <p>© {new Date().getFullYear()} HAMADA IT solutions.</p>
        <p>Todos os direitos reservados</p>
      </div>
      
    </footer>
  )
}

export default Footer;