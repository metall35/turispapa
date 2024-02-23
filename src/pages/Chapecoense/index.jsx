import { useContext } from "react";
import { TurisContext } from "../../Context";
import InicioChapeco from "../../Components/Chapeco/Inicio"
import imgHeader from '../../assets/img/chapeco.png';
import Slider from "../../Components/Slider"
import cruz from '../../assets/img/cruz2.jpg'
import p1 from '../../assets/img/aventura.jpg';
import p5 from '../../assets/img/ala.jpg'
import p6 from '../../assets/img/avion.jpg'
import p9 from '../../assets/img/vista_avion.jpg'
function Chapecoense() {
    const {setImageNav} = useContext(TurisContext)
    setImageNav(imgHeader)
    return (
        <section className="w-[90%]">
            <InicioChapeco />
            <article >
                <h2 className="font-semibold text-lg text-center mt-4 py-4 text-[#14A44D]">Imagenes chapecoense</h2>
                <Slider
                    width={'100%'}
                    data={[p1,p5,p6,p9]}
                />
            </article>
            <section className="my-8 flex max-md:flex-col items-center gap-4">
                <figure className='max-h-80 max-w-xs rounded overflow-hidden'>
                    <img src={cruz} alt="Cruz" className=" shadow-lg " />
                </figure>

                <div>
                    <h2 className="text-2xl font-light mb-2 text-[#14A44D]">
                        El Acontecimiento
                    </h2>
                    <p>
                        El 28 de noviembre de 2016, el mundo del fútbol se estremeció con
                        la noticia del trágico accidente aéreo en La Unión, Colombia.
                    </p>

                    <p>
                        El suceso conmovió al mundo entero y dejó un vacío en la comunidad
                        futbolística. Chapecoense era un equipo modesto que había logrado
                        llegar a una final continental, y lo había hecho con un estilo de
                        juego valiente y aguerrido. Había unido a todo un país detrás de
                        él y había ganado admiración en todo el continente.
                    </p>

                    <p>
                        El accidente trajo consigo un dolor inmenso para los familiares de
                        las víctimas y para el mundo del fútbol en general, pero también
                        puso de manifiesto la solidaridad y la unidad del deporte. Equipos
                        y jugadores de todo el mundo mostraron su apoyo a Chapecoense y a
                        las familias de las víctimas, ofreciendo mensajes de condolencia y
                        solidaridad.
                    </p>

                    <p>
                        En la ciudad de Chapecó, donde se encuentra el equipo, se llevó a
                        cabo un emotivo homenaje, con miles de personas en las calles
                        vestidas de verde y blanco, los colores del equipo, que cantaban y
                        lloraban en honor a los fallecidos. También se realizaron
                        homenajes en diferentes partes de Brasil y del mundo, y se
                        erigieron monumentos y placas en memoria de las víctimas.
                    </p>
                </div>
            </section>
        </section>
    );
}

export default Chapecoense