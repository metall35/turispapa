import Card from "../../Components/CardShort"
import imgHeader from "../../assets/img/cascada-parque.jpg"
import useGetData from "../../hooks/useGetData"
import { useContext, useState } from "react"
import { TurisContext } from "../../Context"
import { useEffect } from "react"

function Restaurantes() {
  const [data, setData] = useState([])
  const { setImageNav } = useContext(TurisContext)
  setImageNav(imgHeader)
  const { establecimiento } = useGetData(["establecimiento"])
  useEffect(() => {
    const dataRestaurante = () => {
      setData(
        establecimiento.filter(establecimiento => {
          return establecimiento.tipo_negocio === "Restaurante"
        }))
    }
    setTimeout(() => {
      dataRestaurante()   
    }, 1000);
  }, [establecimiento])

  return (
    <section className="w-[90%]">
      <h1 className="font-bold text-3xl text-center text-[#14A44D] my-4">
        Restaurantes
      </h1>
      <article className="w-full flex items-center justify-center flex-row gap-5 flex-wrap mb-8">

        {/* /* El código `evento?.map(data => (<Card key={data.id} data={data} />))` se asigna sobre
              la matriz `evento` y representa un componente `Card` para cada elemento en la matriz. */}
        {data?.map((data) => (
          <Card key={data.id_establecimiento} data={data} />
        ))}
      </article>
    </section>
  );
}

export default Restaurantes