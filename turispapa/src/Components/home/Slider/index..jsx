import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import p1 from "../../../assets/img/aventura.jpg";
import p2 from "../../../assets/img/entretenimiento.jpg";
import p3 from '../../../assets/img/naturaleza.jpg';
import p4 from '../../../assets/img/gastronomia.jpg'
import { useRef } from "react";

export default function Slider() {
  const thumbsImages = [p1, p2, p3, p4];

  const mainOptions = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
  };

  const style = {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    margin:"8px 0",
    "border-radius": "12px"
  };

  const btn_img = {
    width: "70px",
    height: "70px",
    overflow: "hidden",
    listStyle: "none",
    margin: "0 0.2rem",
    cursor: "pointer",
  }

  const thumbnailsstyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    listStyle: "none"
  }

  const mainRef = useRef(null);

  const handleThumbs = (id) => {
    if (mainRef.current) {
      mainRef.current.go(id);
    }
  };

  return (
      <div className="flex flex-col justify-center items-center m-4 w-[95%] md:w-[70%]" >
        <h2 className=" text-xl mb-2 font-bold">50 experiencias para vivir en La Unión.</h2>
        <div>
          <Splide options={mainOptions} ref={mainRef} style={{}} className="">
            <SplideSlide>
              <img src={p1} alt="product imag 1" style={style} />
            </SplideSlide>
            <SplideSlide>
              <img src={p2} alt="product imag 2" style={style} />
            </SplideSlide>

            <SplideSlide>
              <img src={p3} alt="product imag 2" style={style} />
            </SplideSlide>

            <SplideSlide>
              <img src={p4} alt="product imag 2" style={style} />
            </SplideSlide>
          </Splide>

          <ul style={thumbnailsstyle} >
            {thumbsImages?.map((thumbnail, index) => (
              <li key={thumbnail}>
                <button onClick={() => handleThumbs(index)}>
                  <img
                    src={thumbnail}
                    alt="product thumbnail"
                    style={btn_img}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
  );
}
