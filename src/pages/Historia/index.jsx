import { useContext } from "react";
import { TurisContext } from "../../Context";
import Slider from "../../Components/Slider"
import imgHeader from '../../assets/img/IglAtardecer1.jpg';
import historia1 from '../../assets/img/historia1.jpg'
import historia2 from '../../assets/img/historia2.jpg'
import historia3 from '../../assets/img/historia3.jpg'
import historia4 from '../../assets/img/historia4.jpg'
import historia5 from '../../assets/img/historia5.jpg'
import historia6 from '../../assets/img/historia6.jpg'
import historia7 from '../../assets/img/historia7.jpg'
import historia8 from '../../assets/img/historia8.jpg'
function Historia() {
    const { setImageNav } = useContext(TurisContext)
    setImageNav(imgHeader)
    return (
        <section className="w-[90%] flex flex-col items-center mb-4">
            <section className="grid md:grid-cols-4 grid-rows-1 gap-6 mb-4">
                <div className="md:col-span-3">
                    <h1 className=" text-4xl font-light mb-4 text-[#14A44D]">
                        Historia del municipio
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
                            El municipio es tristemente conocido, por el siniestro aéreo del 28 de noviembre de 2016, al estrellarse en este municipio el vuelo 2933 de la aerolínea boliviana LaMia, resultando 71 víctimas fatales y 6 heridos, el cual provenía del Aeropuerto Internacional Viru Viru (Santa Cruz de la Sierra) y se dirigía al Aeropuerto Internacional José María Córdova (Rionegro). Este transportaba al equipo de fútbol brasileño Chapecoense, que iba rumbo a jugar el primer partido de la final de la Copa Sudamericana 2016 ante el cuadro Atlético Nacional. El accidente se dio en La Unión, en la vereda Pantalio 3,​ al noroccidente del municipio; la zona está conformada por colinas y cerros, en uno de los cuales (denominado Cerro Gordo), ocurrió la tragedia. El lugar del siniestro pasaría luego a denominarse Cerro Chapecoense, en honor a las víctimas por acuerdo municipal.
                            La economía de La Unión ha girado tradicionalmente en torno al cultivo de la papa, y la ganadería lechera.
                        </p>
                        <p className="mb-4">
                            Actualmente, cuenta con un nivel de producción de 360 toneladas semanales de este tubérculo y un área sembrada de 14 kilómetros cuadrados aproximadamente.
                        </p>
                    </div>
                </div>
                {/* /* El código que proporcionó es un componente JSX en una aplicación React. Representa una sección de
                artículo con información sobre las generalidades de La Unión. */ }
                <article className="cmd:ol-span-1 border h-full border-gray-200 rounded-lg p-2 shadow-lg">
                    <h2 className="text-center text-[#14A44D] text-xl mb-4">Generalidades de La Uniòn</h2>
                    <div className="flex md:flex-col flex-wrap w-full flex-row gap-2">
                        <div className="p-3">
                            <h3 className="font-semibold">Demografìa</h3>
                            <p className="border-b-2">Población Total: 21 475 hab.
                                Población Urbana: 12 724,
                                Población Rural: 8 751,
                                Alfabetismo: 91,2%,
                                Zona urbana: 93,6%,
                                Zona rural: 88,4%.
                            </p>

                            <h3 className="text-end font-semibold">Etnografìa</h3>
                            <p className="text-end border-b-2">
                                Mestizos y caucásicos   (99,6%),
                                Afrodescendientes (0,4%).
                            </p>

                            <h3 className="font-semibold">Fundaciòn</h3>
                            <p className="border-b-2">
                                1 Julio 1778,
                                José María Londoño y Vicente Toro,
                                Emporio papero.
                            </p>

                            <h3 className="text-end font-semibold">Economìa</h3>
                            <p className="text-end border-b-2">
                                Agricultura,
                                Ganaderia,
                                Mineria,
                                Piscicultura.
                            </p>

                            <h3 className=" font-semibold">Agricultura</h3>
                            <p className="">
                                Papa, Maìz, Frijol, Legumbre, Fresa, Uchuva, Mora, Aguacate.
                            </p>
                        </div>
                    </div>
                </article>
            </section>
            {/* implementacion de slider */}
            <h1 className=" text-4xl font-light mb-4 text-[#14A44D] mt-2">
                La Unión a través del tiempo
            </h1>
            <Slider
                width={'w-[100%]'}
                data={[historia1, historia2, historia3, historia4, historia5, historia6, historia7, historia8]}
            />
        </section >
    )
}

export default Historia