import PhotoSphere from '../../PhotoShere'
import memoria from '../../../assets/img/memoriaChapeco.jpg'
import liston from '../../../assets/liston.svg'
export default function InicioChapeco() {

    return (
        <article className="flex justify-between items-center flex-wrap my-4 w-full relative">
            <figure className='absolute w-10 top-0'>
                <img src={liston} />
            </figure>
            <div className="w-[100%] md:w-[45%] md:mt-0 mt-20">
                <h1 className="text-2xl font-bold mb-4 text-[#14A44D]">
                    En memoria al equipo Chapecoense
                </h1>
                <p className=" text-sm mb-4">
                    Recordamos y honramos a las víctimas del trágico accidente de Chapecoense en La Unión. Hace unos años,
                    el mundo del fútbol sufrió una pérdida inimaginable. Un equipo entero de jugadores,
                    entrenadores, periodistas y tripulantes de la aeronave fallecieron en un instante.
                </p>
            </div>
            <figure className='w-[100%] md:w-[50%] max-h-[400px] rounded-lg overflow-hidden'>
                <PhotoSphere
                    img={memoria}
                    height={'400px'}
                />
            </figure>
        </article>
    )
}