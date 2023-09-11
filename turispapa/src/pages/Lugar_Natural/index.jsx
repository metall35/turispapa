import { useState } from 'react';
import iglGrid from '../../assets/imgHeader.svg';

function Lugar_Natural() {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <section className="w-[80%] flex flex-col items-center mb-4">
      <h1 className="text-4xl font-bold mb-4 text-[#14A44D]">Galería de Imagenes</h1>

      <div className="grid grid-cols-4 gap-4">
        <div
          className="rounded h-[200px] col-span-2 overflow-hidden relative"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <img className="h-[100%] w-[100%] object-cover" src={iglGrid} />

          <div
            className={`w-[100%] h-[100%] top-0 text-[#fff] absolute bg-[#1f3d4738] backdrop-blur-sm p-[30px] flex flex-col items-center transition-opacity ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h1 className="uppercase text-5xl font-semibold">Iglesia</h1>
            <p className="capitalize text-sm font-medium">Iglesia de La Unión</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lugar_Natural;
