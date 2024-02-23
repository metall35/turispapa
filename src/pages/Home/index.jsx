import { useContext } from "react";
import { TurisContext } from "../../Context";
import Experiencias from "../../Components/home/Experiencias"
import MapaIndex from "../../Components/home/MapaIndex"
import Slider from "../../Components/Slider"
import imgHeader from '../../assets/imgHeader.svg';
import p2 from '../../assets/img/entretenimiento.jpg';
import p3 from '../../assets/img/naturaleza.jpg';
import p4 from '../../assets/img/gastronomia.jpg'
import p7 from '../../assets/img/cruz.jpg'
import p8 from '../../assets/img/papa.jpg'
/**
 * La función Inicio devuelve un elemento JSX que incluye un encabezado, un componente llamado
 * Experiencias, un componente llamado Slider y un componente llamado MapaIndex.
 */
function Home() {
    const { setImageNav } = useContext(TurisContext)
    setImageNav(imgHeader)
    return (
        <>
            <h1 className="mb-6 text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-550 to-yellow-500">
            Vive La Unión: Más que un destino, una experiencia
            </h1>

            <Experiencias />
            <h2 className='m-4 text-center font-bold text-2xl text-green-500'>La Unión: Un Mundo de Experiencias</h2>
            <Slider
                width={'w-[80%]'}
                data={[p2, p3, p4, p7, p8]}
            />
            <MapaIndex />
        </>
    )
}

export default Home