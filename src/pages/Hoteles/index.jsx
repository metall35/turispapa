import { useContext } from "react"
import { TurisContext } from "../../Context"
import Card from "../../Components/CardShort"
import imgHeader from "../../assets/img/cascada-parque.jpg"
import useGetData from "../../hooks/useGetData"

function Hoteles() {
  const {setImageNav} = useContext(TurisContext)
  setImageNav(imgHeader)
  const data = useGetData("establecimiento")
  const dataHotel = data.filter(establecimiento => {
    return establecimiento.tipo_negocio === "Hotel"
  })

  return (
    <section className="w-[90%]">
      <h1 className="font-bold text-xl text-center text-[#14A44D] my-4">
        Hoteles
      </h1>
      <article className="w-full flex items-center justify-center flex-row gap-5 flex-wrap mb-8">
        {/* /* El código `evento?.map(data => (<Card key={data.id} data={data} />))` se asigna sobre
              la matriz `evento` y representa un componente `Card` para cada elemento en la matriz. */}
        {dataHotel?.map((data) => (
          <Card key={data.id_establecimiento} data={data} />
        ))}
      </article>
    </section>
  );
}

export default Hoteles