import React, { useEffect, useState } from "react"; 
import img_capa from './../../../imagens/imgs/capa.jpeg';
import img_retrato from './../../../imagens/imgs/logo_retrato.jpg';
import Header from "../header/header";

const Capa = () => {
  const [tipoImg, setTipoImg] = useState(img_retrato);

  useEffect(() => {
    const changeMenu = () => {
      if (window.innerWidth >= 800) {
        setTipoImg(img_capa);
      } else {
        setTipoImg(img_retrato);
      }
    }

    changeMenu();
    window.addEventListener('resize', changeMenu)

    return () => {
      window.removeEventListener('resize', changeMenu);
    }
  })

  return (
    <section className="relative">
      <Header className='w-full !p-[0px]' />
      <img className="absolute top-[0] z-[-1] w-[100%]" src={tipoImg}/>
    </section>
  )
}

export default Capa;