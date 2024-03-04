import Card from "../../Components/CardShort"
import tumbarancho from "../../assets/img/restaurante.jpg"
import imgHeader from "../../assets/img/cascada-parque.jpg"
import { TbBrandWhatsapp } from "react-icons/tb"
import { TbBrandInstagram } from "react-icons/tb"
import { BsFacebook } from "react-icons/bs"
import { BiArrowToRight } from "react-icons/bi"
import useGetData from "../../hooks/useGetData"
import { useContext } from "react"
import { TurisContext } from "../../Context"

function Restaurantes() {
  const {setImageNav} = useContext(TurisContext)
  setImageNav(imgHeader)
  const data = useGetData("establecimiento")
  const dataRestaurante = data.filter(establecimiento => {
    return establecimiento.tipo_negocio === "Restaurante"
  })

  return (
    <section className="w-[90%]">
      <h1 className="font-bold text-3xl text-center text-[#14A44D] my-4">
        Restaurantes
      </h1>
      <article className="w-full flex items-center justify-center flex-row gap-5 flex-wrap mb-8">

        {/* /* El código `evento?.map(data => (<Card key={data.id} data={data} />))` se asigna sobre
              la matriz `evento` y representa un componente `Card` para cada elemento en la matriz. */}
        {dataRestaurante?.map((data) => (
          <Card key={data.id_establecimiento} data={data}/>
        ))}
      </article>
    </section>
  );
}

export default Restaurantes