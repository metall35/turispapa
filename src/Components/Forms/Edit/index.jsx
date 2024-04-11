import { useLocation } from "react-router-dom";
import FormAsistencia from "../FormAsistencias";
import FormEstablecimiento from "../FormEstablecimiento";
import FormEventos from "../FormEventos";
import FormLugaresNaturales from "../FormLugaresNaturales";
import { useContext, useEffect } from "react";
import { TurisContext } from "../../../Context";

export default function Edit() {
    const location = useLocation()
    const { setInputs, inputs } = useContext(TurisContext)
    const { producto } = location.state
    console.log(producto);
    useEffect(() => {
        setInputs(producto)
        console.log(inputs);
    }, [])

    return (
        <>
            {producto.tipo_negocio === "Hotel"
                ? <FormEstablecimiento />
                : producto.tipo_negocio === "Restaurante"
                    ? <FormEstablecimiento />
                    : producto.tipo_negocio === "asistencia"
                        ? <FormAsistencia />
                        : producto.tipo_negocio === "natural"
                            ? <FormLugaresNaturales />
                            : <FormEventos />
            }
        </>
    )
}