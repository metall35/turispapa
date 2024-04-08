import { FaHotel } from "react-icons/fa6";
import { BiRestaurant } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
import { FaPlaneArrival } from "react-icons/fa";
export const cardEstablecimientos = [
    {
        id: 1,
        icono: FaHotel,
        nombre: "Hoteles",
        color: "text-blue-300",
        link: "Hotel"
    },
    {
        id: 2,
        icono: BiRestaurant,
        nombre: "Restaurantes",
        color: "text-yellow-200",
        link: "Restaurante"
    },
    {
        id: 3,
        icono: FaPlaneArrival,
        nombre: "Asistencias",
        link: "asistencia"
    },
    {
        id: 4,
        icono: FiMapPin,
        nombre: "Reiniciar",
        color: "text-emerald-300",
        link: ""
    }
]