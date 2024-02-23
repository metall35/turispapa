import { useContext } from "react"
import { TurisContext } from "../../Context"
import imgHeader from "../../assets/404.svg"
import { Link } from "react-router-dom"

function NotFound() {
    const { setImageNav } = useContext(TurisContext)
    setImageNav(imgHeader)
    return (
        <section class="flex flex-col h-96 justify-center items-center">
            <div class="flex flex-col items-center">
                <h1 class="text-[120px] font-extrabold text-gray-700">404</h1>
                <p class="text-2xl font-medium text-gray-600 mb-6">Página no encontrada.</p>
                <Link to={"/"}>
                    <button
                        className=" py-2 px-4 rounded-lg text-center w-full text-neutral-100 font-bold bg-[#14a44e76] hover:bg-[#6fc390] active:bg-[#43bb72]">
                        Ir al inicio
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default NotFound