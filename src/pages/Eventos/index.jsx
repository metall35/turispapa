import React, { useContext } from "react"
import { TurisContext } from "../../Context"
import imgHeader from '../../assets/img/IglAtardecer1.jpg';
import Card from "../../Components/CardLong"
import useGetData from "../../hooks/useGetData"

function Eventos() {
    const { setImageNav } = useContext(TurisContext)
    setImageNav(imgHeader)
    const evento = useGetData("eventos")
    // const evento = [
    //     {
    //         id: 1,
    //         title: 'Fiestas de la Papa',
    //         img: PAPA,
    //         date: "21/08/2023",
    //         description: 'Desde la ultima semana de Junio, hasta la primera semana de Julio se celebran las reconocidas Fiestas de la papa. En estas se reconoce el valor económico y cultural de un producto representativo en el municipio como sería la Papa.'
    //     },
    //     {
    //         id: 2,
    //         title: 'Fiestas Patronales de Nuestra Señora de las Mercedes',
    //         img: virgen,
    //         date: "24/02/2023",
    //         description: 'La Virgen de la Merced o Nuestra Señora de las Mercedes es una advocación mariana venerada por los católicos de la bienaventurada Virgen María. Es equivalente también el nombre de Virgen de la Misericordia. Su fiesta se celebra el día 24 de septiembre.'
    //     },
    // ]

    return (
        <section className="w-[90%]" >
            <h1 className="font-bold text-xl text-center text-[#14A44D] my-4">Fiestas Y Eventos en el Municipio</h1>
            <article className="w-full flex items-center justify-center flex-col">
                {/* /* El código `evento?.map(data => (<Card key={data.id} data={data} />))` se asigna sobre
              la matriz `evento` y representa un componente `Card` para cada elemento en la matriz. */}
                {evento?.map(data => (
                    <Card
                        key={data.id_eventos}
                        data={data}
                    >
                        <>
                            <h2 className='font-semibold my-4'>
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