import Experiencias from "../../Components/home/Experiencias"
import MapaIndex from "../../Components/home/MapaIndex"
import Slider from "../../Components/home/Slider/index."

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