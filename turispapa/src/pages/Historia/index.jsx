import Slider from "../../Components/Slider"

function Historia() {
    return (
        <section className="w-[80%] flex flex-col items-center mb-4">
            <div className="">
                <h1 className=" text-4xl font-light mb-4 text-[#14A44D]">
                    Emporio Papero
                </h1>
                <div className="flex flex-col gap-2">
                    <p className="">
                        La Unión surge como otro de los distritos de la región oriental de Antioquia que aparece como efecto de la colonización espontánea de toda esta zona centro oriental de Antioquia. Otros distritos como Abejorral, La Ceja y Sonsón surgieron del mismo modo, todo ello durante el siglo XVIII.
                        El año 1778 del mismo se considera el año oficial de la fundación de esta localidad, pues fue entonces cuando los fundadores alzaron el primer caserío en sus propios terrenos. Inicialmente lo bautizaron Vallejuelo.
                    </p>
                    <p className="">
                        En el año de 1877 el gobierno de Antioquia creó el distrito de La Unión, compuesto por fracciones de terrenos de las localidades de La Ceja y El Carmen de Viboral. Posteriormente sería despojado de esta categoría pero, en 1886, comenzó a crearse una corriente de opinión de los habitantes y de varios personajes influyentes de las zonas circundantes, a favor de la existencia del distrito especialmente por ser parte del camino más corto para dirigirse a los departamentos de Tolima y Cundinamarca.
                        Sólo hasta 1911, y conjuntamente con otras jurisdicciones, se creó nuevamente el municipio de La Unión.
                    </p>
                    <p className="">
                        El municipio es tristemente conocido, por el siniestro aéreo del 28 de noviembre de 2016, al estrellarse en este municipio el vuelo 2933 de la aerolínea boliviana LaMia, resultando 71 víctimas fatales y 6 heridos, el cual provenía del Aeropuerto Internacional Viru Viru (Santa Cruz de la Sierra) y se dirigía al Aeropuerto Internacional José María Córdova (Rionegro). Este transportaba al equipo de fútbol brasileño Chapecoense, que iba rumbo a jugar el primer partido de la final de la Copa Sudamericana 2016 ante el cuadro Atlético Nacional. El accidente se dio en La Unión, en la vereda Pantalio,3​ al noroccidente del municipio; la zona está conformada por colinas y cerros, en uno de los cuales (denominado Cerro Gordo), ocurrió la tragedia. El lugar del siniestro pasaría luego a denominarse Cerro Chapecoense, en honor a las víctimas por acuerdo municipal.
                        La economía de La Unión ha girado tradicionalmente en torno al cultivo de la papa, y la ganadería lechera.
                    </p>
                    <p className="mb-4">
                        Actualmente, cuenta con un nivel de producción de 360 toneladas semanales de este tubérculo y un área sembrada de 14 kilómetros cuadrados aproximadamente.
                    </p>
                </div>
            </div>
            <Slider
            width={'w-[110%]'}
            />
        </section >
    )
}

export default Historia