import { useContext, useState, useEffect } from "react"
import { TurisContext } from "../../Context"
import Card from "../../Components/CardShort"
import imgHeader from "../../assets/img/cascada-parque.jpg"
import useGetData from "../../hooks/useGetData"
import LoaderCard from "../../Components/Loader/LoaderCard"

function Hoteles() {
  const [data, setData] = useState([])
  const { setImageNav } = useContext(TurisContext)
  setImageNav(imgHeader)
  const { establecimiento } = useGetData(["establecimiento"])
  useEffect(() => {
    const dataHotel = () => {
      setData(
        establecimiento.filter(establecimiento => {
          return establecimiento.tipo_negocio === "Hotel" && establecimiento.estados === "activo"
        }))
    }
    setTimeout(() => {
      dataHotel()
    }, 50);
  }, [establecimiento])

  return (
    <section className="w-[90%]">
      <h1 className="font-bold text-3xl text-center text-[#14A44D] my-4">
        Hoteles
      </h1>
      <article className="w-full flex items-center justify-center flex-row gap-5 flex-wrap mb-8">
        {/* /* El código `evento?.map(data => (<Card key={data.id} data={data} />))` se asigna sobre
              la matriz `evento` y representa un componente `Card` para cada elemento en la matriz. */}
        {establecimiento ? data.length > 0 ? data?.map((data) => (
          <Card key={data.id_establecimiento} data={data} />
        )) :
          <p className="font-bold text-xl  text-center mt-6">
            ¡No hay Hoteles disponibles en este momento!
          </p> :
          <LoaderCard />}
      </article>
    </section>
  );
}

export default Hoteles