import { useContext } from "react";
import { TurisContext } from "../../Context";
import imgHeader from "../../assets/img/ImgAsistencias.jpg"
import Card from "../../Components/CardShort"
import useGetData from "../../hooks/useGetData"

function Asistenciass() {
  const {setImageNav} = useContext(TurisContext)
  setImageNav(imgHeader)
  const establecEntretenimiento = useGetData("asistencia")
    return (
      <section className="w-[90%]">
        <h1 className="font-bold text-xl text-center text-[#14A44D] my-4">
          Asistencias
        </h1>
        <article className="w-full flex items-center justify-center flex-row gap-5 flex-wrap mb-8">
          {establecEntretenimiento?.map((data) => (
            <Card key={data.id_asistencias} data={data}>
              <div className="leading-relaxed">
                <h3 className="text-lg font-semibold">{data.tipo}</h3>
                <p>-{data.direccion}</p>
                <p>-{data.contacto}</p>
              </div>

              {/* <div className="flex justify-center text-2xl font text-gray-500 md:mb-2 mt-1">
                <a href={data.linkWhatsApp}>
                  <TbBrandWhatsapp />
                </a>
              </div> */}
            </Card>
          ))}
        </article>
      </section>
    );
}

export default Asistenciass