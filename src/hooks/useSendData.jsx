/**
 * La función `useSendData` es un hook personalizado en React que maneja el envío de datos a una URL
 * específica y muestra mensajes de éxito o error usando la biblioteca `axios` y `SweetAlert2`.
 * @returns La función `useSendData` devuelve la función `handleSubmit`.
 */
import { useContext } from "react";
import { TurisContext } from "../Context";
import axios from "axios";
import Swal from "sweetalert2";

const useSendData = (url, onSubmit) => {
    const { inputs, setInputs, setLoader } = useContext(TurisContext);
    const aceptSubmit = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_TURISPAPA}/${url}`, {...inputs, id_estado: 1});
            Swal.fire({
                title: "¡Bien!",
                text: "La información a sido guardada correctamente. Será redireccionado a la página principal.",
                icon: "success",
                showConfirmButton: false,
                timer: 2500,
            }).then(() => {
                // Reset inputs and loading state
                setInputs({});
                setLoader(false);
                // Redirect to home page
                onSubmit();
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Parece que hubo un error, código: ${error.response.status} ${error.code}`,
                confirmButtonColor: "#6fc390",
            });
            setLoader(false);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        confirmSubmit();
    };
    const confirmSubmit = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Confirma que la información sea correcta.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#6fc390',
            cancelButtonColor: '#FF4747',
            confirmButtonText: 'Si, estoy seguro!',
            cancelButtonText: 'Cancelar'
        }
        ).then((result) => {
            if (result.isConfirmed) {
                aceptSubmit()
                setLoader(true);
            }
        })
    }
    return  handleSubmit
};
export default useSendData;
