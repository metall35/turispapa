import Establecimientos from "./establecimientosEnt";
function Entretenimiento() {
    return (
      <section className="w-[90%]">
        <h1 className="font-bold text-xl text-center text-[#14A44D] my-4">
          Servicios de Entretenimiento
        </h1>
        <article className="w-full flex items-center justify-center flex-row gap-5 flex-wrap mb-8">
          <Establecimientos />
        </article>
      </section>
    );
}

export default Entretenimiento;