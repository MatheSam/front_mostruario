import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';

const Carrosel = ({ config: { imgs, height, space, slides, interaction, autoplay, cover } }) => {
  const swiperRef = useRef(null);

  return (
    <section>
      <Swiper
        modules={autoplay && [Autoplay, Navigation]}
        spaceBetween={space}
        slidesPerView={slides}
        loop={true}
        speed={500}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{
          delay: 2000,
          disableOnInteraction: interaction, // True Permite que a autoplay continue após interação do usuário
        }}
      >
        {
          imgs && imgs.map((item, index) => (
            
            <SwiperSlide key={index}>
              
              <div className='flex flex-col text-center gap-5'>
                <div key={index} className={`w-full ${height} overflow-hidden`}>
                  <img className={`w-full rounded h-full ${cover && 'object-cover'}`} src={item.img} />
                </div>
                {item.descr &&
                  <div className='text-thi flex flex-col justify-between h-[80px]'>
                    <p className='font-semibold'>{item.descr} {item.qtde && - item.qtde}</p> 
                    {item.prirce && <p className=''>R$ {item.price}</p>}
                  </div>
                }
              </div>
            </SwiperSlide>
                           
          ))
          
        }
 
      </Swiper>
    </section>
  )
}

export default Carrosel;