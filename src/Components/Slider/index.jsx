import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import "./style.css"

/* Se llama a la función `register()` para registrar el paquete de elementos Swiper. Esto es necesario
para utilizar el componente Swiper en el código. */
register();

export default function Slider({ width, data }) {
  /* El código está creando una referencia (`swiperElRef`) usando el gancho `useRef`. Esta referencia se
  utiliza para acceder al elemento DOM del contenedor swiper. */
  const swiperElRef = useRef(null);


  return (
    <>
      <section className={`${width} h-[820px]`}>
        {/* /* El código está creando un componente contenedor Swiper utilizando el elemento `swiper-container`.
Este contenedor se encarga de mostrar una presentación de diapositivas de imágenes. */}
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

        <swiper-container
          class="mySwiper2"
          space-between="10"
          slides-per-view="4"
          free-mode="true"
          watch-slides-progress="true">
          {data?.map(img => (
            <swiper-slide lazy="true"  key={img}>
              <img src={img} loading='lazy' />
            </swiper-slide>
          ))}
        </swiper-container>
      </section >
    </>
  );
};