import Card from "../../Components/CardShort"
import hawai from "../../assets/img/disco.jpg"
import bodegon from "../../assets/img/disco3.jpg"
import bohio from "../../assets/img/disco2.jpg"
import niagara from "../../assets/img/niagara.jpg"
import angely from "../../assets/img/angely.jpg"
import drinkhause from "../../assets/img/drinkhause.jpg"
import { TbBrandWhatsapp } from "react-icons/tb"
import { TbBrandInstagram } from "react-icons/tb"
import { BsFacebook } from "react-icons/bs"

function establecimiEntretenimiento() {
    const establecEntretenimiento = [
        {
          id: 1,
          title: 'Hawai',
          img: hawai,
          description: "Discoteca / Bar ",
          direction: "Zona rosa",
          linkWhatsApp: "https://web.whatsapp.com/",
          linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
          linkFacebook: "https://es-la.facebook.com/"
        },
        {
          id: 2,
          title: 'Licorera Bodegon Azul',
          img: bodegon,
          description: "Discoteca",
          direction: "Carrera 10 #10-10 ",
          linkWhatsApp: "https://web.whatsapp.com/",
          linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
          linkFacebook: "https://es-la.facebook.com/"
        },
        {
          id: 3,
          title: 'Licorera El Bohío',
          img: bohio,
          description: "Bar",
          direction: "Carrera 10 N°10-10",
          linkWhatsApp: "https://web.whatsapp.com/",
          linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
          linkFacebook: "https://es-la.facebook.com/"
        },
        // {
        //   id: 4,
        //   title: 'Salón social Niágara',
        //   img: niagara,
        //   description: "Citio de ocio nocturno, bar",
        //   direction: "Crr10 n10.05",
        //   linkWhatsApp: "https://web.whatsapp.com/",
        //   linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
        //   linkFacebook: "https://es-la.facebook.com/"
        // },
        // {
        //   id: 5,
        //   title: 'Angely disco bar',
        //   img: angely,
        //   description: "Disco-bar",
        //   direction: "Cll10 n10-20",
        //   linkWhatsApp: "https://web.whatsapp.com/",
        //   linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
        //   linkFacebook: "https://es-la.facebook.com/"
        // },
        // {
        //   id: 6,
        //   title: 'Drink hause',
        //   img: drinkhause,
        //   description: "Bar discoteca",
        //   direction: "Calle del comercio",
        //   linkWhatsApp: "https://web.whatsapp.com/",
        //   linkInstagram: "https://www.instagram.com/hoteleltesorosonson/?hl=en",
        //   linkFacebook: "https://es-la.facebook.com/"
        // },
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