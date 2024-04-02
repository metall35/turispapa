import { useContext } from "react";
import { TurisContext } from "../Context";
import { useNavigate } from "react-router-dom";
import FormData from 'form-data';
import axios from "axios";
import Swal from "sweetalert2";
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
                text: "La información a sido guardada correctamente. Será redireccionado a la página de administrador.",
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
                });
            });
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Parece que hubo un error: ${error.response.data.message} ${error.code}`,
                confirmButtonColor: "#6fc390",
            });
            setLoader(false);
        }
    }
    return handleSubmit
}
export default useLogin