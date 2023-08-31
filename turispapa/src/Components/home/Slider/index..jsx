import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import "./style.css"
import p1 from "../../../assets/img/aventura.jpg";
import p2 from "../../../assets/img/entretenimiento.jpg";
import p3 from '../../../assets/img/naturaleza.jpg';
import p4 from '../../../assets/img/gastronomia.jpg'

register();

export default function Slider() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <section className='w-[80%] h-[450px]'>
      <swiper-container
        class="mySwiper rounded-lg overflow-hidden"
        ref={swiperElRef}
        thumbs-swiper=".mySwiper2"
        space-between="10"
        navigation="true">
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </swiper-slide>
      </swiper-container>

      <swiper-container
        class="mySwiper2"
        space-between="10"
        slides-per-view="4"
        free-mode="true"
        watch-slides-progress="true">
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </swiper-slide>
      </swiper-container>
    </section>
  );
};