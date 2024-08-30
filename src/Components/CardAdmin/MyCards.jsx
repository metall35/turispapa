import { FaHotel } from "react-icons/fa6";
import { BiRestaurant } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
import { FaPlaneArrival } from "react-icons/fa";
import { VscSync } from "react-icons/vsc";
import { MdEvent } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaImage } from "react-icons/fa6";
import { FaAccusoft } from "react-icons/fa";
import { FaCamera } from "react-icons/fa6";

export const cardEstablecimientos = [
    {
        id: 1,
        icono: FaHotel,
        nombre: "Hoteles",
        color: "text-blue-300",
        link: "Hotel"
    },
    {
        id: 3,
        icono: RiCustomerService2Line,
        nombre: "Prestadores",
        color: "text-lime-700",
        link: "asistencia"
    },
    {
        id: 5,
        icono: FaCamera ,
        nombre: "Carrusel inicio",
        color: "text-teal-200",
        link: "slider"
    },
    {
        id: 4,
        icono: MdEvent,
        nombre: "Eventos",
        color: "text-orange-700",
        link: "evento"
    },
    {
        id: 7,
        icono: FaImage,
        nombre: "Imágenes inicio",
        color: "text-orange-300",
        link: "index"
    },
    {
        id: 5,
        icono: FaAccusoft ,
        nombre: "Foto headers",
        color: "text-red-400",
        link: "headers"
    },
    {
        id: 2,
        icono: BiRestaurant,
        nombre: "Restaurantes",
        color: "text-yellow-200",
        link: "Restaurante"
    },
    {
        id: 6,
        icono: VscSync ,
        nombre: "Reiniciar",
        color: "text-emerald-300",
        link: ""
    },
]