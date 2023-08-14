import { useContext } from "react";
import { TETabs, TETabsContent, TETabsItem, TETabsPane, } from "tw-elements-react";
import { TurisContext } from "../../Context";
import { CiBank } from "react-icons/ci";
import { FaMasksTheater } from "react-icons/fa6";
import { PiMountainsLight, PiForkKnifeLight, PiTentLight } from "react-icons/pi";
import Bienvenida from "../../assets/img/iglesia.jpg";
import Aventura from "../../assets/img/aventura.jpg";
import Naturaleza from "../../assets/img/naturaleza.jpg";
import Gastronomia from "../../assets/img/gastronomia.jpg";
import Entretenimiento from "../../assets/img/entretenimiento.jpg";


export default function TabsJustify() {
    const { justifyActive, setJustifyActive } = useContext(TurisContext);

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);
    };

    return (
        <div className="mb-6 w-[100%] flex flex-col items-center">
            <TETabs justify className="w-[80%] border-b-2 border-[#14A44D] ">
                <TETabsItem color="success"
                    onClick={() => handleJustifyClick("historico")}
                    className="flex flex-col items-center dark:border-b-0 "
                    active={justifyActive === "historico"}
                >
                    <CiBank className="w-8 h-8 mb-1" />
                    <p>
                        Histórico
                    </p>
                </TETabsItem>
                <TETabsItem color="success"
                    onClick={() => handleJustifyClick("aventura")}
                    className="flex flex-col items-center dark:border-b-0 "
                    active={justifyActive === "aventura"}
                >
                    <PiTentLight className="w-8 h-8 mb-1" />
                    <p>
                        Aventura
                    </p>
                </TETabsItem>
                <TETabsItem color="success"
                    onClick={() => handleJustifyClick("naturaleza")}
                    className="flex flex-col items-center dark:border-b-0 "
                    active={justifyActive === "naturaleza"}
                >
                    <PiMountainsLight className="w-8 h-8 mb-1" />
                    <p>
                        Naturaleza
                    </p>
                </TETabsItem>
                <TETabsItem color="success"
                    onClick={() => handleJustifyClick("gastronomia")}
                    className="flex flex-col items-center dark:border-b-0 "
                    active={justifyActive === "gastronomia"}
                >
                    <PiForkKnifeLight className="w-8 h-8 mb-1" />
                    <p>
                        Gastronomía
                    </p>
                </TETabsItem>
                <TETabsItem color="success"
                    onClick={() => handleJustifyClick("entretenimiento")}
                    className="flex flex-col items-center dark:border-b-0 "
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
                    <figure className="relative w-[100%] max-h-[568px] overflow-hidden mb-[-100px]">
                        <img src={Bienvenida} alt=""
                            className="object-cover h-full w-full min-h-[568px]"
                        />
                        <div className="flex flex-col justify-center p-10 md:w-[50%] w-full absolute bg-black/80 left-0 top-0 h-full text-white">
                            <h2 className="mb-4 text-2xl">
                                ¡Bienvenido a La Unión!
                            </h2>
                            <p className=" text-base font-light">
                                Este es un municipio donde el contacto con la naturaleza y
                                las rutas camineras son protagonistas. Ten presente tener botas, ropa térmica, hidratación
                                y alimentos que te den calorías y bloqueador cuando recorras sus atractivos.
                            </p>
                        </div>
                    </figure>
                    <section className="flex flex-row justify-center flex-wrap gap-10 mx-10">
                        <figure className="w-80 h-96 overflow-hidden relative rounded-md">
                            <img src={Bienvenida} alt=""
                                className="object-cover h-full w-full hover:scale-[1.1] duration-300 transition ease-in-out delay-150 " />
                            <p className="absolute text-2xl text-white font-bold  bottom-16  left-5">
                                titulo 1
                            </p>
                        </figure>
                        <figure className="w-80 h-96 overflow-hidden relative rounded-md">
                            <img src={Bienvenida} alt=""
                                className="object-cover h-full w-full hover:scale-[1.1] duration-300 transition ease-in-out delay-150 " />
                            <p className="absolute text-2xl text-white font-bold  bottom-16  left-5">
                                titulo 2
                            </p>
                        </figure>
                        <figure className="w-80 h-96 overflow-hidden relative rounded-md">
                            <img src={Bienvenida} alt=""
                                className="object-cover h-full w-full hover:scale-[1.1] duration-300 transition ease-in-out delay-150 " />
                            <p className="absolute text-2xl text-white font-bold  bottom-16  left-5">
                                titulo 3
                            </p>
                        </figure>
                    </section>
                </TETabsPane>
                <TETabsPane show={justifyActive === "aventura"}>
                    <figure className="relative w-[100%] max-h-[568px] overflow-hidden mb-[-100px]">
                        <img src={Aventura} alt=""
                            className="object-cover h-full w-full min-h-[568px]"
                        />
                        <div className="flex flex-col justify-center p-10 md:w-[50%] w-full absolute bg-black/80 left-0 top-0 h-full text-white">
                            <h2 className="mb-4 text-2xl">
                                ¡Bienvenido a La Unión!
                            </h2>
                            <p className=" text-base font-light">
                                Este es un municipio donde el contacto con la naturaleza y
                                las rutas camineras son protagonistas. Ten presente tener botas, ropa térmica, hidratación
                                y alimentos que te den calorías y bloqueador cuando recorras sus atractivos.
                            </p>
                        </div>
                    </figure>
                    <section className="flex flex-row justify-center flex-wrap gap-10 mx-10">
                        <figure className="w-80 h-96 overflow-hidden relative rounded-md">
                            <img src={Aventura} alt=""
                                className="object-cover h-full w-full hover:scale-[1.1] duration-300 transition ease-in-out delay-150 " />
                            <p className="absolute text-2xl text-white font-bold  bottom-16  left-5">
                                titulo 1
                            </p>
                        </figure>
                        <figure className="w-80 h-96 overflow-hidden relative rounded-md">
                            <img src={Aventura} alt=""
                                className="object-cover h-full w-full hover:scale-[1.1] duration-300 transition ease-in-out delay-150 " />
                            <p className="absolute text-2xl text-white font-bold  bottom-16  left-5">
                                titulo 2
                            </p>
                        </figure>
                        <figure className="w-80 h-96 overflow-hidden relative rounded-md">
                            <img src={Aventura} alt=""
                                className="object-cover h-full w-full hover:scale-[1.1] duration-300 transition ease-in-out delay-150 " />
                            <p className="absolute text-2xl text-white font-bold  bottom-16  left-5">
                                titulo 3
                            </p>
                        </figure>
                    </section>
                </TETabsPane>
                <TETabsPane show={justifyActive === "naturaleza"}>
                    <figure className="relative w-full max-h-[568px] overflow-hidden mb-[-100px]">
                        <img src={Naturaleza} alt=""
                            className="object-cover h-full w-full min-h-[568px]"
                        />
                        <div className="flex flex-col justify-center p-10 md:w-[50%] w-full absolute bg-black/80 left-0 top-0 h-full text-white">
                            <h2 className="mb-4 text-2xl">
                                ¡Bienvenido a La Unión!
                            </h2>
                            <p className=" text-base font-light">
                                Este es un municipio donde el contacto con la naturaleza y
                                las rutas camineras son protagonistas. Ten presente tener botas, ropa térmica, hidratación
                                y alimentos que te den calorías y bloqueador cuando recorras sus atractivos.
                            </p>
                        </div>
                    </figure>
                    <section className="flex flex-row justify-center flex-wrap gap-10 mx-10">
                        <figure className="w-80 h-96 overflow-hidden relative rounded-md">
                            <img src={Naturaleza} alt=""
                                className="object-cover h-full w-full hover:scale-[1.1] duration-300 transition ease-in-out delay-150 " />
                            <p className="absolute text-2xl text-white font-bold  bottom-16  left-5">
                                titulo 1
                            </p>
                        </figure>
                        <figure className="w-80 h-96 overflow-hidden relative rounded-md">
                            <img src={Naturaleza} alt=""
                                className="object-cover h-full w-full hover:scale-[1.1] duration-300 transition ease-in-out delay-150 " />
                            <p className="absolute text-2xl text-white font-bold  bottom-16  left-5">
                                titulo 2
                            </p>
                        </figure>
                        <figure className="w-80 h-96 overflow-hidden relative rounded-md">
                            <img src={Naturaleza} alt=""
                                className="object-cover h-full w-full hover:scale-[1.1] duration-300 transition ease-in-out delay-150 " />
                            <p className="absolute text-2xl text-white font-bold  bottom-16  left-5">
                                titulo 3
                            </p>
                        </figure>
                    </section>
                </TETabsPane>
                <TETabsPane show={justifyActive === "gastronomia"}>
                <figure className="relative w-[100%] max-h-[568px] overflow-hidden mb-[-100px]">
                        <img src={Gastronomia} alt=""
                            className="object-cover h-full w-full min-h-[568px]"
                        />
                        <div className="flex flex-col justify-center p-10 md:w-[50%] w-full absolute bg-black/80 left-0 top-0 h-full text-white">
                            <h2 className="mb-4 text-2xl">
                                ¡Bienvenido a La Unión!
                            </h2>
                            <p className=" text-base font-light">
                                Este es un municipio donde el contacto con la naturaleza y
                                las rutas camineras son protagonistas. Ten presente tener botas, ropa térmica, hidratación
                                y alimentos que te den calorías y bloqueador cuando recorras sus atractivos.
                            </p>
                        </div>
                    </figure>
                    <section className="flex flex-row justify-center flex-wrap gap-10 mx-10">
                        <figure className="w-80 h-96 overflow-hidden relative rounded-md">
                            <img src={Gastronomia} alt=""
                                className="object-cover h-full w-full hover:scale-[1.1] duration-300 transition ease-in-out delay-150 " />
                            <p className="absolute text-2xl text-white font-bold  bottom-16  left-5">
                                titulo 1
                            </p>
                        </figure>
                        <figure className="w-80 h-96 overflow-hidden relative rounded-md">
                            <img src={Gastronomia} alt=""
                                className="object-cover h-full w-full hover:scale-[1.1] duration-300 transition ease-in-out delay-150 " />
                            <p className="absolute text-2xl text-white font-bold  bottom-16  left-5">
                                titulo 2
                            </p>
                        </figure>
                        <figure className="w-80 h-96 overflow-hidden relative rounded-md">
                            <img src={Gastronomia} alt=""
                                className="object-cover h-full w-full hover:scale-[1.1] duration-300 transition ease-in-out delay-150 " />
                            <p className="absolute text-2xl text-white font-bold  bottom-16  left-5">
                                titulo 3
                            </p>
                        </figure>
                    </section>
                </TETabsPane>
                <TETabsPane show={justifyActive === "entretenimiento"}>
                <figure className="relative w-[100%] max-h-[568px] overflow-hidden mb-[-100px]">
                        <img src={Entretenimiento} alt=""
                            className="object-cover h-full w-full min-h-[568px]"
                        />
                        <div className="flex flex-col justify-center p-10 md:w-[50%] w-full absolute bg-black/80 left-0 top-0 h-full text-white">
                            <h2 className="mb-4 text-2xl">
                                ¡Bienvenido a La Unión!
                            </h2>
                            <p className=" text-base font-light">
                                Este es un municipio donde el contacto con la naturaleza y
                                las rutas camineras son protagonistas. Ten presente tener botas, ropa térmica, hidratación
                                y alimentos que te den calorías y bloqueador cuando recorras sus atractivos.
                            </p>
                        </div>
                    </figure>
                    <section className="flex flex-row justify-center flex-wrap gap-10 mx-10">
                        <figure className="w-80 h-96 overflow-hidden relative rounded-md">
                            <img src={Entretenimiento} alt=""
                                className="object-cover h-full w-full hover:scale-[1.1] duration-300 transition ease-in-out delay-150 " />
                            <p className="absolute text-2xl text-white font-bold  bottom-16  left-5">
                                titulo 1
                            </p>
                        </figure>
                        <figure className="w-80 h-96 overflow-hidden relative rounded-md">
                            <img src={Entretenimiento} alt=""
                                className="object-cover h-full w-full hover:scale-[1.1] duration-300 transition ease-in-out delay-150 " />
                            <p className="absolute text-2xl text-white font-bold  bottom-16  left-5">
                                titulo 2
                            </p>
                        </figure>
                        <figure className="w-80 h-96 overflow-hidden relative rounded-md">
                            <img src={Entretenimiento} alt=""
                                className="object-cover h-full w-full hover:scale-[1.1] duration-300 transition ease-in-out delay-150 " />
                            <p className="absolute text-2xl text-white font-bold  bottom-16  left-5">
                                titulo 3
                            </p>
                        </figure>
                    </section>
                </TETabsPane>
            </TETabsContent>
        </div>
    );
}
