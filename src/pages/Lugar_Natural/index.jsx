import { GalPhotos } from './GalPhotos';
function Lugar_Natural() {

  return (
    <section className="w-[80%] flex flex-col items-center mb-4">
      <h1 className="text-4xl font-bold mb-4 text-[#14A44D]">Galería de Imagenes</h1>

      <div className="grid grid-cols-4 gap-2 max-lg:flex flex-col h-auto w-auto">
        <GalPhotos />
      </div> 

    </section>
  );
}

export default Lugar_Natural;
