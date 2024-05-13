import { useState } from "react";
import NOX from "../../assets/NOX.svg";
import launion from "../../assets/launion.svg";
import sena from "../../assets/sena.svg";
import fondo from "../../assets/img/fondo-footer.png";
import turismo from "../../assets/img/logo (2).png";
// componente de footer
function Footer({className}) {
    const [date] = useState(new Date())
    return (
        <footer className={`relative max-h-32  w-full overflow-hidden ${className} `} >
            <img src={fondo} alt="" className=" max-h-36 w-full overflow-hidden"/>
            <section className="absolute top-0 bg-black/60 w-full h-[80%] flex items-center justify-center gap-10 ">
                <figure  className="bg-white/60 h-16 w-16 rounded-md overflow-hidden" >
                    <img src={launion} alt="la unión" className="h-16" />
                </figure>
                <figure  className="bg-white/60 h-16 w-[40%] md:w-auto  rounded-md overflow-hidden" >
                    <img src={turismo} alt="turimo" className="h-16" />
                </figure>
                <div className="flex justify-center items-center">
                <figure  className="bg-white/60 h-16 w-16 rounded-md overflow-hidden pt-2 pl-1" >
                    <img src={sena} alt="sena" className="h-12" />
                </figure>
                </div>
            </section>
            <p className="flex items-center justify-center absolute bottom-0 w-full h-[22%] bg-black/80 border-t-2 border-white/60">
                <span className="text-white/60 text-sm font-extralight">
                    ©{date.getFullYear()} LA UNIÓN ENAMORA DESARROLLADO POR
                </span>
                <img src={NOX} alt="" className="w-16"/>
            </p>
        </footer>
    )
}

export default Footer