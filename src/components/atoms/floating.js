import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { WPP_LINK, WPP_NUMBER } from '../../utils/constants';

const FloatingButton = () => {
  return (
    <button className="fixed opacity-70 hover:opacity-100 bottom-2 left-2 bg-[#0dbf43] text-[#fff] py-2 px-2 rounded-full shadow-lg hover:bg-sec transition duration-300 z-[100]">
      <a target='_blank' href={WPP_LINK}><FaWhatsapp className="text-3xl"/></a>
    </button>
  );
};

export default FloatingButton;
