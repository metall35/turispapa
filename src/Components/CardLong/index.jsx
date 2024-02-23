/* eslint-disable react/prop-types */
/**
 * El componente CardLong es un componente de React que representa una tarjeta con una imagen y texto,
 * con la imagen y el texto colocados de manera diferente según la identificación de los datos que se
 * le pasan.
 * @returns un elemento JSX.
 */
export default function CardLong({data, children}) {
    return (
        <div className={`flex flex-wrap-reverse ${data.id_eventos % 2 == 0 ? 'flex-row-reverse' : 'flex-row' } lg:justify-evenly items-center justify-center w-full border-b-2 border-[#14A44D] p-2 mb-4`}>
            <figure className='max-w-[360px] rounded-lg overflow-hidden my-2 shadow-md shadow-zinc-500 '> 
                <img src={data.imagen} alt={data.nombre} />
            </figure>
            <div className='lg:w-[50%] flex flex-col ml-3'>
            {children}
            </div>
        </div>
    )
}

