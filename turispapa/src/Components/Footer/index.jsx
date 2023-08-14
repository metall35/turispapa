import NOX from "../../assets/NOX.svg";
import fondo from "../../assets/img/fondo-footer.png";
function Footer() {
    return (
        <footer className="relative max-h-32  w-full overflow-hidden " >
            <img src={fondo} alt="" className=" max-h-36 w-full overflow-hidden"/>
            <section className="absolute top-0 bg-black/80 w-full h-[78%]">
                <div>
                <div></div>
                <div></div>
                <div></div>
                </div>
            </section>
            <p className="flex items-center justify-center absolute bottom-0 w-full h-[22%] bg-black/80 border-t-2 border-white/60">
                <span className="text-white/60 text-sm font-extralight">
                    © 2023  TURIPAPA DESARROLLADO POR
                </span>
                <img src={NOX} alt="" className="w-16"/>
            </p>
        </footer>
    )
}

export default Footer