/* eslint-disable react/prop-types */
/**
 * El componente CardLong es un componente de React que representa una tarjeta con una imagen y texto,
 * con la imagen y el texto colocados de manera diferente según la identificación de los datos que se
 * le pasan.
 * @returns un elemento JSX.
 */
export default function CardShort({data, children}) {
    return (
      <div className="flex flex-col gap-3 max-w-xl">
        <figure className="max-w-[360px] h-[180px] rounded-lg overflow-hidden my-2 shadow-md shadow-zinc-500 ">
          <img src={data.imagen} alt={data.tipo} />
        </figure>
        <div className="flex flex-col justify-center">
          {children}
        </div>
      </div>
    );
}

