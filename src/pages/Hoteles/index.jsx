import { useContext } from "react"
import { TurisContext } from "../../Context"
import Card from "../../Components/CardLong"
import hotel from "../../assets/img/hotel1.png"
import imgHeader from "../../assets/img/cascada-parque.jpg"
import { TbBrandWhatsapp } from "react-icons/tb"
import { TbBrandInstagram } from "react-icons/tb"
import { BsFacebook } from "react-icons/bs"
import { BiArrowToRight } from "react-icons/bi"
import useGetData from "../../hooks/useGetData"

function Hoteles() {
  const {setImageNav} = useContext(TurisContext)
  setImageNav(imgHeader)
  const data = useGetData("establecimiento")
  const dataHotel = data.filter(establecimiento => {
    return establecimiento.tipo_negocio === "Hotel"
  })
  const hoteles = [
    {
      id: 1,
      title: 'Hotel El Tesoro',
      img: hotel,
      direction: "Boulevard Kukulcan km 1 Zona Turistica",
      linkWhatsApp: "https://web.whatsapp.com/",
      linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
      linkFacebook: "https://es-la.facebook.com/"
    },
    {
      id: 3,
      title: 'Hotel Experience',
      img: hotel,
      direction: "Boulevard Kukulcan km 1 Zona Turistica",
      linkWhatsApp: "https://web.whatsapp.com/",
      linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
      linkFacebook: "https://es-la.facebook.com/"
    },
  ]

  return (
    <section className="w-[90%]">
      <h1 className="font-bold text-xl text-center text-[#14A44D] my-4">
        Hoteles
      </h1>
      <article className="w-full flex items-center justify-center flex-col">
        {/* /* El código `evento?.map(data => (<Card key={data.id} data={data} />))` se asigna sobre
              la matriz `evento` y representa un componente `Card` para cada elemento en la matriz. */}
        {dataHotel?.map((data) => (
          <Card key={data.id_establecimiento} data={data}>
            <section className="w-[90%] flex justify-between items-center">
              <div className="mx-3">
                <h2 className="font-normal text-2xl my-4">{data.nombre}</h2>
                <p className=" font-light text-gray-800 my-2">
                  {data.descripcion}
                </p>
                <p className=" font-light text-gray-500 my-2">
                  <span className="font-bold">Dirección:</span>
                  {data.direccion}
                </p>
                <p className=" font-light text-gray-500 my-2">
                  <span className="font-bold">Telefono:</span>
                  {data.telefono}
                </p>
                <div className="flex gap-2 text-2xl font text-gray-500 md:mb-2">
                  <a href={data.linkWhatsApp}>
                    <TbBrandWhatsapp />
                  </a>
                  <a href={data.linkInstagram}>
                    <TbBrandInstagram />
                  </a>
                  <a href={data.linkFacebook}>
                    <BsFacebook />
                  </a>
                </div>
              </div>

              <div className="text-gray-500 ">
                <a href="" className="flex text-lg items-center hover:text-black">
                  <span>Ver Más</span>
                  <BiArrowToRight className="mr-3" />
                </a>
              </div>
            </section>
          </Card>
        ))}
      </article>
    </section>
  );
}

export default Hoteles