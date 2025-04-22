import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import "./style.css"

// Registrar Swiper al cargar el componente
register();

export default function Slider({ width, data }) {
  const swiperElRef = useRef(null);

  useEffect(() => {
    if (swiperElRef.current) {
      swiperElRef.current.initialize(); // Asegurar inicialización
    }
  }, [data]); // Se ejecuta cada vez que cambia "data"

  return (
    <>
      <section className={`${width} h-[520px]`}>
        {/* Contenedor principal del slider */}
        <swiper-container
          class="mySwiper rounded-lg overflow-hidden"
          ref={swiperElRef}
          thumbs-swiper=".mySwiper2"
          space-between="10"
          autoplay-delay="2500"
          autoplay-disable-on-interaction="false"
          navigation="true"
        >
          {data?.map(img => (
            <swiper-slide lazy="true" key={img}>
              <img src={img} loading='lazy' />
            </swiper-slide>
          ))}
        </swiper-container>

        {/* Contenedor del slider secundario */}
        <swiper-container
          class="mySwiper2"
          space-between="10"
          slides-per-view="4"
          free-mode="true"
          watch-slides-progress="true">
          {data?.map(img => (
            <swiper-slide lazy="true" key={img}>
              <img src={img} loading='lazy' />
            </swiper-slide>
          ))}
        </swiper-container>
      </section>
    </>
  );
};
