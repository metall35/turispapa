import { Link } from "react-router-dom";

export default function MapaIndex() {
    return (
        <section className="flex w-full xs:w[90%] gap-16 flex-wrap-reverse my-10 justify-center items-center">
            <iframe className="md:w-2/5 w-[95%] h-96 border-0 rounded-lg shadow-xl "
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJrxOsmBWWRo4RTH0dDJsPp34&key=AIzaSyBZy2RQQ_Q31ueozVxM8D_XVjyomneJUTk">
            </iframe>
            <div className="w-96 flex flex-col m-2">
                <h2 className="text-2xl font-bold" >
                    La Unión en el mundo
                </h2>
                <p className="my-2">
                    Maravíllate con la diversidad
                    de nuestra riqueza natural, cultural e histórica.
                </p>
                <button className="p-2 bg-[#14A44D] rounded-md shadow-lg text-slate-100">
                    <Link to="/historia">
                        Conocer Historia
                    </Link>
                </button>
            </div>
        </section>
    )
}