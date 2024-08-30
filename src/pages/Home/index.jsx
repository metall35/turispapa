import { useContext, useEffect, useState } from "react";
import { TurisContext } from "../../Context";
import Experiencias from "../../Components/home/Experiencias";
import MapaIndex from "../../Components/home/MapaIndex";
import Slider from "../../Components/Slider";
import imgHeader from '../../assets/imgHeader.svg'; 
import useGetData from "../../hooks/useGetData";

function Home() {
    const { setImageNav } = useContext(TurisContext);
    const { slider } = useGetData(["slider"]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const dataEventos = () => {
            const imagenes = slider.map(item => item.imagen);
            setData(imagenes);
        }
        setTimeout(() => {
            dataEventos()
        }, 50);
        
    }, [slider])

    return (
        <>
            <h1 className="mb-6 text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-550 to-yellow-500 text-center">
                Vive La Unión: Más que un destino, una experiencia
            </h1>

            <Experiencias />
            <h2 className='m-4 text-center font-bold text-2xl text-green-500'>
                La Unión: Un Mundo de Experiencias
            </h2>
            <Slider
                width={'w-[80%]'}
                data={data}
            />
            <MapaIndex />
        </>
    );
}

export default Home;
