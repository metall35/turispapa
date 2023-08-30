import Experiencias from "../../Components/Experiencias"
import MapaIndex from "../../Components/MapaIndex"
import Slider from "../../Components/Slider/index."

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