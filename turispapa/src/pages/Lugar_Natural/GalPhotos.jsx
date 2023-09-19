/* eslint-disable react/prop-types */
import  { useState } from 'react'                                                                                            
import { photos } from './MyPhotos';

const Photo = ({ photo }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={photo.estilo + " rounded h-[200px] overflow-hidden relative"}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      key={photo.id}
    >
      <img className="h-[100%] w-[100%] object-cover" src={photo.imagen} />

      <div
        className={`w-[100%] h-[100%] top-0 text-[#fff] absolute bg-[#1f3d4738] backdrop-blur-sm p-[30px] flex flex-col items-center justify-center transition-opacity ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="uppercase text-3xl font-semibold text-center">{photo.titulo}</h1>
        <p className="capitalize text-sm font-medium">{photo.descripcion}</p>
      </div>
    </div>
  );
};

export const GalPhotos = () => {
  return (
    <>
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </>
  );
};
