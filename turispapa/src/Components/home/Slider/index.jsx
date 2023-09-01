import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import "./style.css"
import p1 from "../../../assets/img/aventura.jpg";
import p2 from "../../../assets/img/entretenimiento.jpg";
import p3 from '../../../assets/img/naturaleza.jpg';
import p4 from '../../../assets/img/gastronomia.jpg'
import p5 from '../../../assets/img/ala.jpg'
import p6 from '../../../assets/img/avion.jpg'
import p7 from '../../../assets/img/cruz.jpg'
import p8 from '../../../assets/img/papa.jpg'
import p9 from '../../../assets/img/vista_avion.jpg'

register();

export default function Slider() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });
  }, []);

  return (
    <>
      <h2 className=' text-center m-4 font-semibold text-lg '>50 Experiencias para vivir en La Unión</h2>
      <section className='w-[80%] h-[520px]'>
        <swiper-container
          class="mySwiper rounded-lg overflow-hidden"
          ref={swiperElRef}
          thumbs-swiper=".mySwiper2"
          space-between="10"
          autoplay-delay="2500"
          autoplay-disable-on-interaction="false"
          navigation="true"
        >
          <swiper-slide lazy="true">
            <img src={p1} loading='lazy' />
          </swiper-slide>
          <swiper-slide lazy="true">
            <img src={p2} loading='lazy' />
          </swiper-slide>
          <swiper-slide lazy="true">
            <img src={p3} loading='lazy' />
          </swiper-slide>
          <swiper-slide lazy="true">
            <img src={p4} loading='lazy' />
          </swiper-slide>
          <swiper-slide lazy="true">
            <img src={p5} loading='lazy' />
          </swiper-slide>
          <swiper-slide lazy="true">
            <img src={p6} loading='lazy' />
          </swiper-slide>
          <swiper-slide lazy="true">
            <img src={p7} loading='lazy' />
          </swiper-slide>
          <swiper-slide lazy="true">
            <img src={p8} loading='lazy' />
          </swiper-slide>
          <swiper-slide lazy="true">
            <img src={p9} loading='lazy' />
          </swiper-slide>
        </swiper-container>

        <swiper-container
          class="mySwiper2"
          space-between="10"
          slides-per-view="4"
          free-mode="true"
          watch-slides-progress="true">
          <swiper-slide lazy="true">
            <img src={p1} loading='lazy' />
          </swiper-slide>
          <swiper-slide lazy="true">
            <img src={p2} loading='lazy' />
          </swiper-slide>
          <swiper-slide lazy="true">
            <img src={p3} loading='lazy' />
          </swiper-slide>
          <swiper-slide lazy="true">
            <img src={p4} loading='lazy' />
          </swiper-slide>
          <swiper-slide lazy="true">
            <img src={p5} loading='lazy' />
          </swiper-slide>
          <swiper-slide lazy="true">
            <img src={p6} loading='lazy' />
          </swiper-slide>
          <swiper-slide lazy="true">
            <img src={p7} loading='lazy' />
          </swiper-slide>
          <swiper-slide lazy="true">
            <img src={p8} loading='lazy' />
          </swiper-slide>
          <swiper-slide lazy="true">
            <img src={p9} loading='lazy' />
          </swiper-slide>
        </swiper-container>
      </section >
    </>
  );
};