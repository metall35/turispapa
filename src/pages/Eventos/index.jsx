import React, { useContext, useEffect, useState } from "react"
import { TurisContext } from "../../Context"
import imgHeader from '../../assets/img/IglAtardecer1.jpg';
import Card from "../../Components/CardLong"
import useGetData from "../../hooks/useGetData"
import LoaderCard from "../../Components/Loader/LoaderCard";

function Eventos() {
    const { setImageNav } = useContext(TurisContext)
    const [data, setData] = useState([])
    setImageNav(imgHeader)
    const { eventos } = useGetData(["eventos"])
    useEffect(() => {
        const dataEventos = () => {
            setData(
                eventos.filter(eventos => {
                    return eventos.estados === "activo"
                }))
        }
        setTimeout(() => {
            dataEventos()
        }, 50);
    }, [eventos])
    return (
        <section className="w-[90%] mb-10" >
            <h1 className="font-bold text-3xl text-center text-[#14A44D] my-4">Fiestas Y Eventos en el Municipio</h1>
            <article className="w-full flex items-center justify-center flex-col">
                {/* /* El código `evento?.map(data => (<Card key={data.id} data={data} />))` se asigna sobre
              la matriz `evento` y representa un componente `Card` para cada elemento en la matriz. */}
                {eventos ? data.length > 0 ? data.map(data => (
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
                )) :
                    <p className="font-bold text-xl  text-center mt-6">
                        ¡No hay eventos disponibles en este momento!
                    </p> :
                    <LoaderCard />}
            </article>
        </section>
    )
}

export default Eventos