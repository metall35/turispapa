import Card from "../../Components/CardLong"
import tumbarancho from "../../assets/img/restaurante.jpg"
import arepas_chocolo from "../../assets/img/arepas_chocolo.jpg"
import deli_pollo from "../../assets/img/deli_pollo.jpg"
import { TbBrandWhatsapp } from "react-icons/tb"
import { TbBrandInstagram } from "react-icons/tb"
import { BsFacebook } from "react-icons/bs"
import { BiArrowToRight } from "react-icons/bi"

function Restaurantes() {
    const restaurantes = [
      {
        id: 1,
        title: "Tumbarancho",
        img: tumbarancho,
        direction: "Cr.9 #9-08",
        linkWhatsApp: "https://web.whatsapp.com/",
        linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
        linkFacebook: "https://es-la.facebook.com/",
      },
      {
        id: 3,
        title: "Arepas de chocolo la mejor ",
        img: tumbarancho,
        direction: "Cr.9 #8-61",
        linkWhatsApp: "https://web.whatsapp.com/",
        linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
        linkFacebook: "https://es-la.facebook.com/",
      },
      {
        id: 5,
        title: "Deli pollo ",
        img: tumbarancho,
        direction: "Cr.9 #8-62 Dos cuadras del parque principal",
        linkWhatsApp: "https://web.whatsapp.com/",
        linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
        linkFacebook: "https://es-la.facebook.com/",
      },
    ];

    return (
      <section className="w-[90%]">
        <h1 className="font-bold text-xl text-center text-[#14A44D] my-4">
          Restaurantes
        </h1>
        <article className="w-full flex items-center justify-center flex-col">
          {/* /* El código `evento?.map(data => (<Card key={data.id} data={data} />))` se asigna sobre
              la matriz `evento` y representa un componente `Card` para cada elemento en la matriz. */}
          {restaurantes?.map((data) => (
            <Card key={data.id} data={data}>
              <section className="w-[90%] flex justify-between items-center">
                <div className="mx-3">
                  <h2 className="font-normal text-2xl my-4">{data.title}</h2>
                  <p className=" font-light text-gray-500 my-2">
                    <span className="font-bold">Dirección:</span>
                    {data.direction}
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
                    <BiArrowToRight  className="mr-3"/>
                  </a>
                </div>
              </section>
            </Card>
          ))}
        </article>
      </section>
    );
}

export default Restaurantes