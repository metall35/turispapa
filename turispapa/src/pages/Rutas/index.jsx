import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import React from 'react';
import plano from "../../assets/img/PLANO_CRUZ.jpg"

function Rutas() {
    
    return (
        <section className='max-h-[540ox] w-[90%] '>
            <h1 className='mb-3'>RUTAS</h1>
            <div className='mb-6 rounded-xl overflow-hidden'>
            <ReactPhotoSphereViewer src={plano} height={'540px'} width={'100%'}></ReactPhotoSphereViewer>
            </div>
        </section>
    )
}

export default Rutas