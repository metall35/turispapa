import InicioChapeco from "../../Components/Chapeco/Inicio"
import Slider from "../../Components/Slider"

function Chapecoense() {
    return (
        <section className="w-[90%]">
            <InicioChapeco/>
        <article >
            <h2 className="font-semibold text-lg text-center mt-4 py-4">Imagenes chapecoense</h2>
            <Slider 
            width={'100%'}
            />
        </article>
        <section>
            <h2>
                TITULO
            </h2>
            <p>
                HISTORIA TRAGEDIA
            </p>
        </section>
    </section>
    )
}

export default Chapecoense