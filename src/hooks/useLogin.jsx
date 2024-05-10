import { useContext } from "react";
import { TurisContext } from "../Context";
import { useNavigate } from "react-router-dom";
import FormData from 'form-data';
import axios from "axios";
import Swal from "sweetalert2";
/**
 * La función useLogin maneja el envío de formularios para iniciar sesión, envía datos al backend y
 * muestra mensajes de éxito o error en consecuencia.
 * @returns La función `handleSubmit` se devuelve desde el enlace personalizado `useLogin`.
 */
const useLogin = () => {
    const { inputs, setInputs, setLoader, setTokenSession } = useContext(TurisContext);
    const formData = new FormData()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        onSubmit()
        setLoader(true)
    }
    const convertData = () => {
        const input = Object.entries(inputs);

        for (const [key, value] of input) {
            formData.append(key, value);
        }
    }
    const onSubmit = async () => {
        try {
            convertData()
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_TURISPAPA}/start`, formData);
            Swal.fire({
                title: "¡Bien!",
                text: "Ha iniciado sesión correctamente.",
                icon: "success",
                showConfirmButton: false,
                timer: 2500,
            }).then(() => {
                // Reset inputs and loading state
                setInputs({});
                setLoader(false);
                setTokenSession(response.data.token)
                // Redirect to home page
                navigate("/administrador", {
                    replace: true,
                    preventScrollReset: true
                });
            });
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Parece que hubo un error: Por favor verifique sus datos.`,
                confirmButtonColor: "#6fc390",
            });
            setLoader(false);
        }
    }
    return handleSubmit
}
export default useLogin