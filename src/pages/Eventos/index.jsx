import React, { useContext } from "react"
import { TurisContext } from "../../Context"
import imgHeader from '../../assets/img/IglAtardecer1.jpg';
import Card from "../../Components/CardLong"
import useGetData from "../../hooks/useGetData"

function Eventos() {
    const { setImageNav } = useContext(TurisContext)
    setImageNav(imgHeader)
    const evento = useGetData("eventos")

    return (
        <section className="w-[90%]" >
            <h1 className="font-bold text-3xl text-center text-[#14A44D] my-4">Fiestas Y Eventos en el Municipio</h1>
            <article className="w-full flex items-center justify-center flex-col">
                {/* /* El código `evento?.map(data => (<Card key={data.id} data={data} />))` se asigna sobre
              la matriz `evento` y representa un componente `Card` para cada elemento en la matriz. */}
                {evento?.map(data => (
                    <Card
                        key={data.id_eventos}
                        data={data}
                    >
                        <>
                            <h2 className='font-semibold my-4 text-xl'>
                                {data.nombre}
                            </h2>
                            <p className=' font-extralight my-2'>
                                {data.descripcion}
                            </p>
                            <span className=' text-xs font text-gray-400 '>
                                {data.fecha}
                            </span>
                        </>
                    </Card>
                ))}
            </article>
        </section>
    )
}

export default Eventos