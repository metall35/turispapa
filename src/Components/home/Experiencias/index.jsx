import { useContext, useEffect, useState } from "react";
import { TETabs, TETabsContent, TETabsItem, } from "tw-elements-react";
import { TurisContext } from "../../../Context";
import { CiBank } from "react-icons/ci";
import { FaMasksTheater } from "react-icons/fa6";
import { PiMountainsLight, PiForkKnifeLight, PiTentLight } from "react-icons/pi";
import TablaContenido from "./TablaContenido";
import { experiencia } from "./Myexperiencias"
import useGetData from "../../../hooks/useGetData";
import LoaderCard from "../../Loader/LoaderCard";


export default function Experiencias() {
    /* El fragmento de código utiliza el gancho `useContext` de React para acceder al contexto
    `TurisContext`. Está desestructurando los valores `justifyActive` y `setJustifyActive` del contexto. */
    const { justifyActive, setJustifyActive } = useContext(TurisContext);
    const [data, setData] = useState([])
    const { index } = useGetData(["index"])
    useEffect(() => {
        setData(index)
    }, [index])

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);
    };

    return (
        <>
            {data ? 
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
                    <TETabsContent>
                        {data?.map((data) => (
                            <TablaContenido
                                key={data.id}
                                data={data}
                            />
                        ))}
                    </TETabsContent>

                </div>
                : <LoaderCard />
            }
        </>

    );
}
