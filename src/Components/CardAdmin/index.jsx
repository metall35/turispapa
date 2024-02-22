/* eslint-disable react/prop-types */

export default function CardAdmin({data}) {
    return (
        <div className="flex items-center justify-center bg-white p-4 rounded shadow h-28 cursor-pointer">
            {<data.icono className={data.color + " text-7xl"}/>}
            <h3  className="font-semibold text-2xl">{data.nombre}</h3>
        </div>
    )
}

