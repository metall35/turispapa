import { useState } from "react";
import { Link } from "react-router-dom";

export default function TableAdmin({ data }) {
    const [estado, setEstado] = useState(data.estados)
    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex items-center">
                    <span className="font-medium">{data.nombre || data.titulo}</span>
                </div>
            </td>
            <td className="py-3 px-6 text-left">{data.contacto || data.categoria}</td>
            <td className="py-3 px-6 text-center"><img src={data.imagen} alt={data.nombre} className="w-20" /></td>
            <Link to={`/administrador/editar/${data.nombre || data.titulo}`} state={{ producto: data }}>
                <td className="py-3 px-6 text-center font-bold text-cyan-600 cursor-pointer">Editar</td>
            </Link>
            <a href={`${import.meta.env.VITE_BACKEND_TURISPAPA}/${data.id_establecimiento ? "activarestablecimiento" : data.id_asistencias ? "activarasistencia" : data.id_eventos ? "activarevento" : "activarindex"}/${data.id_establecimiento || data.id_eventos || data.id_asistencias || data.id_index}`} 
            target="_blank" rel="noopener noreferrer" onClick={() => setEstado(estado === "activo" ? "Desactivar" : "activo")} >
                <td className="py-3 px-6 text-center font-bold text-cyan-600 cursor-pointer" >{estado === "activo" ? "Desactivar" : "Activar"}</td>
            </a>
        </tr>
    )
}

