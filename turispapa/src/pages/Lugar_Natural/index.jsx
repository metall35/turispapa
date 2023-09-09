import { useState } from 'react'
import IglesiaGrid from '../../assets/img/IglesiaGrid.jpg'
import ChapGrid from '../../assets/img/ChapGrid.jpg'
import estatua from '../../assets/img/estatua.jpg'
import CampGrid from '../../assets/img/CampGrid.jpg'

function Lugar_Natural() {
    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(true);
      };
    
      const handleLeave = () => {
        setHovered(false);
      };

    return (
      <section className="w-[50%] flex flex-col items-center mb-4">
        <h1 className=" text-4xl font-bold mb-4 text-[#14A44D]">
          Galería de Imagenes
        </h1>

        <div className="grid grid-cols-4 gap-4">
          <div
            className="rounded h-[200px] col-span-2 overflow-hidden relative"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <img className="h-[100%] w-[100%] object-cover" src={IglesiaGrid} />

            <div
              className={`w-[100%] h-[100%] top-0 text-[#fff] absolute bg-[#1f3d4738] backdrop-blur-sm p-[30px] flex flex-col   items-center transition-opacity ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className="uppercase text-xl font-semibold">
                Iglesia Nuestra Señora de las mercedes
              </h1>
              <p className="capitalize text-sm font-medium ">
                Iglesia de La Unión.
              </p>
            </div>
          </div>

          <div
            className="rounded h-[200px] col-span-1 overflow-hidden relative  "
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <img className="h-[100%] w-[100%] object-cover" src={ChapGrid} />

            <div
              className={`w-[100%] h-[100%] top-0 text-[#fff] absolute bg-[#1f3d4738] backdrop-blur-sm p-[30px] flex flex-col   items-center transition-opacity ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className="uppercase text-2xl font-semibold">Chapeco</h1>
              <p className="capitalize text-sm font-medium">
                Lugar de Homenaje.
              </p>
            </div>
          </div>

          <div
            className="rounded h-[200px] col-span-1 overflow-hidden relative  "
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <img className="h-[100%] w-[100%] object-cover" src={ChapGrid} />

            <div
              className={`w-[100%] h-[100%] top-0 text-[#fff] absolute bg-[#1f3d4738] backdrop-blur-sm p-[30px] flex flex-col   items-center transition-opacity ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className="uppercase text-2xl font-semibold">Chapeco</h1>
              <p className="capitalize text-sm font-medium">
                Lugar de Homenaje.
              </p>
            </div>
          </div>

          <div
            className="rounded h-[200px] col-span-2 overflow-hidden relative  "
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <img className="h-[100%] w-[100%] object-cover" src={estatua} />

            <div
              className={`w-[100%] h-[100%] top-0 text-[#fff] absolute bg-[#1f3d4738] backdrop-blur-sm p-[30px] flex flex-col   items-center transition-opacity ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className="uppercase text-2xl font-semibold">
                {" "}
                Felix María Restrepo Londoño
              </h1>
              <p className="capitalize text-sm font-medium">
                Reconocido intelectual.
              </p>
            </div>
          </div>

          <div
            className="rounded col-span-2 row-span-6 overflow-hidden relative "
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <img className="h-[100%] w-[100%] object-cover" src={ChapGrid} />

            <div
              className={`w-[100%] h-[100%] top-0 text-[#fff] absolute bg-[#1f3d4738] backdrop-blur-sm p-[30px] flex flex-col   items-center transition-opacity ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className="uppercase text-2xl font-semibold">Chapeco</h1>
              <p className="capitalize text-sm font-medium">
                Lugar de Homenaje.
              </p>
            </div>
          </div>

          <div
            className="rounded h-[200px] col-span-2 overflow-hidden relative  "
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <img className="h-[100%] w-[100%] object-cover" src={estatua} />

            <div
              className={`w-[100%] h-[100%] top-0 text-[#fff] absolute bg-[#1f3d4738] backdrop-blur-sm p-[30px] flex flex-col   items-center transition-opacity ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className="uppercase text-2xl font-semibold">
                {" "}
                Felix María Restrepo Londoño
              </h1>
              <p className="capitalize text-sm font-medium">
                Reconocido intelectual.
              </p>
            </div>
          </div>

          <div
            className="rounded h-[200px] col-span-2 overflow-hidden relative  "
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <img className="h-[100%] w-[100%] object-cover" src={estatua} />

            <div
              className={`w-[100%] h-[100%] top-0 text-[#fff] absolute bg-[#1f3d4738] backdrop-blur-sm p-[30px] flex flex-col   items-center transition-opacity ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className="uppercase text-2xl font-semibold">
                {" "}
                Felix María Restrepo Londoño
              </h1>
              <p className="capitalize text-sm font-medium">
                Reconocido intelectual.
              </p>
            </div>
          </div>

          <div
            className="rounded h-[200px] col-span-4 overflow-hidden relative  "
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <img className="h-[100%] w-[100%] object-cover" src={CampGrid} />

            <div
              className={`w-[100%] h-[100%] top-0 text-[#fff] absolute bg-[#1f3d4738] backdrop-blur-sm p-[30px] flex flex-col   items-center transition-opacity ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className="uppercase text-2xl font-semibold">
                {" "}
                Vereda Pantalio
              </h1>
              <p className="capitalize text-sm font-medium">
                Campos Unitenses.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Lugar_Natural