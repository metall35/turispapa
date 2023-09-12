import React from 'react'

/**
 * El componente CardLong es un componente de React que representa una tarjeta con una imagen y texto,
 * con la imagen y el texto colocados de manera diferente según la identificación de los datos que se
 * le pasan.
 * @returns un elemento JSX.
 */
export default function CardLong({data}) {
    return (
        <div className={`flex flex-wrap-reverse ${data.id % 2 == 0 ? 'flex-row-reverse' : 'flex-row' } lg:justify-evenly items-center justify-center w-full border-b-2 border-[#14A44D] p-2 mb-4`}>
            <figure className='max-w-[360px] rounded-lg overflow-hidden my-2'> 
                <img src={data.img} alt={data.title} />
            </figure>
            <div className='lg:w-[50%] flex flex-col justify-between'>
                <h2 className='font-semibold my-4'>
                    {data.title}
                </h2>
                <p>
                    {data.description}
                </p>
            </div>
        </div>
    )
}

