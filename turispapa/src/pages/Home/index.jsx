import Experiencias from "../../Components/home/Experiencias"
import MapaIndex from "../../Components/home/MapaIndex"
import Slider from "../../Components/home/Slider"

/**
 * La función Inicio devuelve un elemento JSX que incluye un encabezado, un componente llamado
 * Experiencias, un componente llamado Slider y un componente llamado MapaIndex.
 */
function Home() {
    return (
        <>
            <h1 className="mb-6 text-2xl font-semibold">¡La Unión, el tesoro papero!</h1>
            <Experiencias />
            <Slider/>
            <MapaIndex/>
        </>
    )
}

export default Home