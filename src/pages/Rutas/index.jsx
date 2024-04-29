import React, { useContext } from 'react';
import imgHeader from "../../assets/img/burro.jpg"
import Mapa from '../../Components/Ruta/MapaInteractivo';
import { TurisContext } from '../../Context';

function Rutas() {
    const {setImageNav} = useContext(TurisContext)
    setImageNav(imgHeader)
    return (
        <section className='w-[90%] '>
            <Mapa />
        </section>
    )
}

export default Rutas