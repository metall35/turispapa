import Card from "../../Components/CardShort"
import teatro from "../../assets/img/teatro.jpg"
import cine from "../../assets/img/cine.jpg"
import oficina from "../../assets/img/oficina.jpg"
import disco from "../../assets/img/disco.jpg"
import disco2 from "../../assets/img/disco2.jpg"
import disco3 from "../../assets/img/disco3.jpg"
import { TbBrandWhatsapp } from "react-icons/tb"
import { TbBrandInstagram } from "react-icons/tb"
import { BsFacebook } from "react-icons/bs"

function establecimiEntretenimiento() {
    const establecEntretenimiento = [
        {
          id: 1,
          title: 'Teatro Municipal',
          img: teatro,
          description: "Un espacio para el arte",
          direction: "Boulevard Kukulcan km 1 Zona Turistica",
          linkWhatsApp: "https://web.whatsapp.com/",
          linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
          linkFacebook: "https://es-la.facebook.com/"
        },
        {
          id: 2,
          title: 'Museo',
          img: cine,
          description: "El mejor lugar para la historia",
          direction: "Centro Kukulcan km 1 Zona Turistica",
          linkWhatsApp: "https://web.whatsapp.com/",
          linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
          linkFacebook: "https://es-la.facebook.com/"
        },
        {
          id: 3,
          title: 'Hotel Experience',
          img: oficina,
          description: "Hermoso lugar",
          direction: "Boulevard Kukulcan km 1 Zona Turistica",
          linkWhatsApp: "https://web.whatsapp.com/",
          linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
          linkFacebook: "https://es-la.facebook.com/"
        },
        {
          id: 4,
          title: 'Discoteca La Madame',
          img: disco,
          description: "Un espacio para el disfrute",
          direction: "Boulevard Zona Rosa",
          linkWhatsApp: "https://web.whatsapp.com/",
          linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
          linkFacebook: "https://es-la.facebook.com/"
        },
        {
          id: 5,
          title: 'Discoteca Murcia',
          img: disco2,
          description: "El mejor lugar para la historia",
          direction: "Boulevard Zona Rosa",
          linkWhatsApp: "https://web.whatsapp.com/",
          linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
          linkFacebook: "https://es-la.facebook.com/"
        },
        {
          id: 6,
          title: 'Discoteca Landanada',
          img: disco3,
          description: "Hermoso lugar",
          direction: "Boulevard Zona Rosa",
          linkWhatsApp: "https://web.whatsapp.com/",
          linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
          linkFacebook: "https://es-la.facebook.com/"
        },
    ]
    return (
      <>
        {establecEntretenimiento.map((data) => (
          <Card key={data.id} data={data}>
            <div className="leading-relaxed">
              <h3 className="text-lg font-semibold">{data.title}</h3>
              <p>-{data.description}</p>
              <p>-{data.direction}</p>
            </div>

            <div className="flex gap-2 text-2xl font text-gray-500 md:mb-2 mt-1">
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
          </Card>
        ))}
      </>
    );
}

export default establecimiEntretenimiento