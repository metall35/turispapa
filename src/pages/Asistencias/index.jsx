import { useContext } from "react";
import { TurisContext } from "../../Context";
import imgHeader from "../../assets/img/ImgAsistencias.jpg"
import Card from "../../Components/CardShort"
import useGetData from "../../hooks/useGetData"
import LoaderCard from "../../Components/Loader/LoaderCard";

function Asistencias() {
  const { setImageNav } = useContext(TurisContext)
  setImageNav(imgHeader)
  const { asistencia } = useGetData(["asistencia"])

  return (
    <section className="w-[90%]">
      <h1 className="font-bold text-3xl text-center text-[#14A44D] my-4">
        Asistencias
      </h1>
      <article className="w-full flex items-center justify-center flex-row gap-5 flex-wrap mb-8">
        {asistencia ? asistencia.length > 0 ? asistencia?.map((data) => (
          <Card key={data.id_establecimiento} data={data} />
        )) :
          <p className="font-bold text-xl  text-center mt-6">
            ¡No hay Asistencias disponibles en este momento!
          </p> :
          <LoaderCard />}
      </article>
    </section>
  );
}

export default Asistencias