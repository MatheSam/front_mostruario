import React, { useState } from 'react';
import { PADDING, WPP_LINK } from '../constants';
import { VscError } from "react-icons/vsc";
import { FaCheck } from "react-icons/fa6";
import Li from '../components/li';
import Button from '../components/button';

const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const produtos = [
    {
      categoria: 'Site profissional',
      tempo: '10 dias úteis',
      de: '1.699,00',
      qtde: '2x de',
      por: '559,50',
      estatico: <VscError className='text-red-500' />,
      blog: <VscError className='text-red-500' />,
      texto: 'Quero preço baixo'
    },
  ];

  return (
    <section id='produtos' className='bg-qua font-roboto py-[20px]'>
      <article className={`${PADDING} flex flex-col text-center gap-[20px] relative overflow-hidden`}>
        <p className='text-pri text-2xl font-bold'>PRODUTOS DISPONÍVEIS</p>
        <div className='flex flex-col gap-[20px] sm:grid sm:grid-cols-2 lg:grid-cols-3'>
          {produtos.map((prod, index) => {
            const { categoria, tempo, de, qtde, por, estatico, blog, texto } = prod;
            return (
              <div style={{
                animationDuration: 300,
                boxShadow: hoveredIndex === index ? '1px 5px 30px 4px rgba(0,0,0,0.94)' : 'none',
                transition: 'box-shadow 0.5s ease',
              }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                key={index} className={`flex flex-col bg-[#f0f7fa] rounded py-[20px] transform hover:scale-105 transition-transform duration-500 ease-in-out ${index === 2 && 'mb-[50px]'} lg:mb-[50px] gap-[20px]`}>
                <p className='text-con font-bold text-xl'>{categoria}</p>
                <ul className='flex flex-col'>
                  <Li icon={<FaCheck />} text={`Entrega em ${tempo}`} />
                </ul>
                <div className='text-lg font-semibold mt-[10px]'>
                  <p className='line-through font-semibold text-con'>de R$ {de}</p>
                  <p className='text-tex'>por {qtde}</p>
                  <p className='text-3xl text-tit font-bold'>R$ {por}</p>
                </div>
                <Button texto={texto.toUpperCase()} href={`${WPP_LINK}?text=Olá, possuo interesse no ${categoria}`} />
              </div>
            )
          })}
        </div>
      </article>
    </section>
  )
}

export default Products;