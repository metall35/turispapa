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
        link: "/administrador/listado-hoteles"
    },
    {
        id: 2,
        icono: BiRestaurant,
        nombre: "Restaurantes",
        color: "text-yellow-200",
        link: "/administrador/listado-restaurantes"
    },
    {
        id: 3,
        icono: FaPlaneArrival,
        nombre: "Asistencias",
        link: "/administrador/listado-lugares"
    },
    {
        id: 4,
        icono: FiMapPin,
        nombre: "Rutas",
        color: "text-emerald-300",
        link: "/administrador/listado-rutas"
    }
]