import { useContext } from "react";
import {
    TETabs,
    TETabsContent,
    TETabsItem,
    TETabsPane,
} from "tw-elements-react";
import { TurisContext } from "../../Context";
import { CiBank } from "react-icons/ci";
import { FaMasksTheater } from "react-icons/fa6";
import { PiMountainsLight, PiForkKnifeLight, PiTentLight } from "react-icons/pi";
import Bienvenida from "../../assets/img/iglesia.jpg";


export default function TabsJustify() {
    const { justifyActive, setJustifyActive } = useContext(TurisContext);

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);
    };

    return (
        <div className="mb-6 w-[90%]">
            <TETabs justify>
                <TETabsItem color="success"
                    onClick={() => handleJustifyClick("historico")}
                    className="flex flex-col items-center"
                    active={justifyActive === "historico"}
                >
                    <CiBank className="w-8 h-8 mb-1" />
                    <p>
                        Histórico
                    </p>
                </TETabsItem>
                <TETabsItem color="success"
                    onClick={() => handleJustifyClick("aventura")}
                    className="flex flex-col items-center"
                    active={justifyActive === "aventura"}
                >
                    <PiTentLight className="w-8 h-8 mb-1" />
                    <p>
                        Aventura
                    </p>
                </TETabsItem>
                <TETabsItem color="success"
                    onClick={() => handleJustifyClick("naturaleza")}
                    className="flex flex-col items-center"
                    active={justifyActive === "naturaleza"}
                >
                    <PiMountainsLight className="w-8 h-8 mb-1" />
                    <p>
                        Naturaleza
                    </p>
                </TETabsItem>
                <TETabsItem color="success"
                    onClick={() => handleJustifyClick("gastronomia")}
                    className="flex flex-col items-center"
                    active={justifyActive === "gastronomia"}
                >
                    <PiForkKnifeLight className="w-8 h-8 mb-1" />
                    <p>
                        Gastronomía
                    </p>
                </TETabsItem>
                <TETabsItem color="success"
                    onClick={() => handleJustifyClick("entretenimiento")}
                    className="flex flex-col items-center"
                    active={justifyActive === "entretenimiento"}
                >
                    <FaMasksTheater className="w-8 h-8 mb-1" />
                    <p>
                        Entretenimiento
                    </p>
                </TETabsItem>
            </TETabs>
            <TETabsContent >
                <TETabsPane show={justifyActive === "historico"} >
                    <figure className="relative"> 
                    <img src={Bienvenida} alt="" />
                    <div className="flex flex-col justify-center p-10 w-[50%] absolute bg-black/80 right-0 top-0 h-full text-white">
                        <h2 className="mb-4">
                            ¡Bienvenido a La Unión!
                        </h2>
                        <p>
                            Este es un municipio donde el contacto con la naturaleza y
                            las rutas camineras son protagonistas. Ten presente tener botas, ropa térmica, hidratación
                            y alimentos que te den calorías y bloqueador cuando recorras sus atractivos.
                        </p>
                    </div>
                    </figure>
                </TETabsPane>
                <TETabsPane show={justifyActive === "aventura"}>Tab 2 content</TETabsPane>
                <TETabsPane show={justifyActive === "naturaleza"}>Tab 3 content</TETabsPane>
                <TETabsPane show={justifyActive === "gastronomia"}>Tab 4 content</TETabsPane>
                <TETabsPane show={justifyActive === "entretenimiento"}>Tab 4 content</TETabsPane>
            </TETabsContent>
        </div>
    );
}
