import Experiencias from "../../Components/home/Experiencias"
import MapaIndex from "../../Components/home/MapaIndex"
import Slider from "../../Components/Slider"

/**
 * La función Inicio devuelve un elemento JSX que incluye un encabezado, un componente llamado
 * Experiencias, un componente llamado Slider y un componente llamado MapaIndex.
 */
function Home() {
    return (
        <>
            <h1 className="mb-6 text-2xl font-semibold">¡La Unión, el tesoro papero!</h1>
            <Experiencias />
            <h2 className=' text-center m-4 font-semibold text-lg '>50 Experiencias para vivir en La Unión</h2>
            <Slider
            width={'w-[80%]'}
            />
            <MapaIndex />
        </>
    )
}

export default Home