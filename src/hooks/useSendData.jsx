/**
 * La función `useSendData` es un hook personalizado en React que maneja el envío de datos a una URL
 * específica y muestra mensajes de éxito o error usando la biblioteca `axios` y `SweetAlert2`.
 * @returns La función `useSendData` devuelve la función `handleSubmit`.
 */
import { useContext } from "react";
import { TurisContext } from "../Context";
import FormData from 'form-data';
import axios from "axios";
import Swal from "sweetalert2";

const useSendData = (url, onSubmit) => {
    const { inputs, setInputs, setLoader } = useContext(TurisContext);
    const formData = new FormData()
    formData.append("id_estado", 1)
    formData.append("redes_id", 1)
    formData.append("id_usuario", 1)

    /**
     * La función `convertData` convierte datos de entrada en pares clave-valor y los agrega a un objeto de
     * datos de formulario, excluyendo la clave 'id_estado'.
     */
    const convertData = () => {
        const input = Object.entries(inputs);

        for (const [key, value] of input) {
            if (key !== 'id_estado' || key !== 'redes_id' || key !== 'id_usuario') {
                // console.log(`la key es: ${key} y su valor es ${value}`);
                formData.append(key, value);
            }
        }
    };

    /**
     * La función `aceptSubmit` es una función asincrónica que maneja el envío de formularios enviando
     * datos a una API backend y mostrando mensajes de éxito o error usando SweetAlert.
     */
    const aceptSubmit = async () => {
        try {
            convertData()

            const response = await axios.post(`${import.meta.env.VITE_BACKEND_TURISPAPA}/${url}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
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
    /**
     * La función `confirmSubmit` muestra un cuadro de diálogo de confirmación usando SweetAlert y, si
     * el usuario confirma, llama a `aceptSubmit`, configura un cargador y registra los datos del
     * formulario.
     */
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
    return handleSubmit
};
export default useSendData;
