import Card from "../../Components/CardShort"
import mercado_precio_especial from "../../assets/img/mercado_precio_especial.jpg"
import d1 from "../../assets/img/d1.jpg"
import auto_servicio from "../../assets/img/auto_servicio.jpg"
import ganadero_popular from "../../assets/img/ganadero_popular.jpg"
import rebaratas from "../../assets/img/rebaratas.jpg"
import confiar from "../../assets/img/confiar.jpg"
import agrario from "../../assets/img/agrario.jpg"
import { TbBrandWhatsapp } from "react-icons/tb"

function Asistenciass() {
    const establecEntretenimiento = [
        {
          id: 1,
          title: 'Mercados precio especial',
          img: mercado_precio_especial,
          description: "Sitio para el abastecimiento de víveres",
          direction: "Crr8 n9-02",
          linkWhatsApp: "https://web.whatsapp.com/",
          linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
          linkFacebook: "https://es-la.facebook.com/"
        },
        {
          id: 2,
          title: 'Tienda D1',
          img: d1,
          description: "Sitio para el abastecimiento de víveres",
          direction: "Crr9 n10-42",
          linkWhatsApp: "https://web.whatsapp.com/",
          linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
          linkFacebook: "https://es-la.facebook.com/"
        },
        {
          id: 3,
          title: 'Auto servicio merque-casa',
          img: auto_servicio,
          description: "Sitio para el abastecimiento de víveres",
          direction: "Crr10 n9-45",
          linkWhatsApp: "https://web.whatsapp.com/",
          linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
          linkFacebook: "https://es-la.facebook.com/"
        },
        {
          id: 4,
          title: 'Ganadero Popular',
          img: ganadero_popular,
          description: "Venta y distribución de medicamentos",
          direction: "Crr9 n11-52",
          linkWhatsApp: "https://web.whatsapp.com/",
          linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
          linkFacebook: "https://es-la.facebook.com/"
        },
        {
          id: 5,
          title: 'Drogas rebaratas La Union',
          img: rebaratas,
          description: "Sitio para el abastecimiento de víveres",
          direction: "Crr10 n9-45",
          linkWhatsApp: "https://web.whatsapp.com/",
          linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
          linkFacebook: "https://es-la.facebook.com/"
        },
        {
          id: 6 ,
          title: 'Confiar',
          img: confiar,
          description: "Oficina bancaria",
          direction: "Cll n8-63",
          linkWhatsApp: "https://web.whatsapp.com/",
          linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
          linkFacebook: "https://es-la.facebook.com/"
        },
    ]
    return (
      <section className="w-[90%]">
        <h1 className="font-bold text-xl text-center text-[#14A44D] my-4">
          Asistencias
        </h1>
        <article className="w-full flex items-center justify-center flex-row gap-5 flex-wrap mb-8">
          {establecEntretenimiento.map((data) => (
            <Card key={data.id} data={data}>
              <div className="leading-relaxed">
                <h3 className="text-lg font-semibold">{data.title}</h3>
                <p>-{data.description}</p>
                <p>-{data.direction}</p>
              </div>

              <div className="flex justify-center text-2xl font text-gray-500 md:mb-2 mt-1">
                <a href={data.linkWhatsApp}>
                  <TbBrandWhatsapp />
                </a>
              </div>
            </Card>
          ))}
        </article>
      </section>
    );
}

export default Asistenciass