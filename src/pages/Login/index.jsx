import { useContext } from "react";
import { TurisContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import FormData from 'form-data';
import axios from "axios";
import Swal from "sweetalert2";
import Input from "../../Components/Forms/Elements/Inputs"
import Button from "../../Components/Forms/Elements/Buttons"
import Logo from "../../assets/logo.svg"
import ImgLogin from "../../assets/login.svg"
import imgHeader from "../../assets/img/romero.jpg"


function Login() {
    const { inputs, setInputs, setLoader, setImageNav } = useContext(TurisContext);
    setImageNav(imgHeader)
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
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_TURISPAPA}/Login`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
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
                // Redirect to home page
                navigate("/iniciar-sesion", {
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
    const inputs1 = [
        {
            id: 1,
            type: "email",
            name: "Correo",
            placeholder: "ejemplo@gmail.com",
            required: true
        },
        {
            id: 2,
            type: "password",
            name: "Contrasena",
            placeholder: "Contraseña",
            required: true
        }
    ]
    return (
        <section className="flex gap-4 justify-between shadow-lg border-neutral-400/40 border mb-8 w-[70%] h-[580px] rounded-lg overflow-hidden">
            <div className="flex flex-col items-center justify-center lg:w-[50%] bg-white/50">
                <h1 className="text-center my-2 mb-8 text-2xl font-semibold">Iniciar Sesión</h1>
                <form className="flex flex-col gap-3 w-[80%]" onSubmit={handleSubmit}>
                    {inputs1.map(input => (
                        <Input
                            key={input.id}
                            type={input.type}
                            name={input.name}
                            placeholder={input.placeholder}
                            required={input.required}
                        />
                    ))}
                    <div className="md:col-span-2">
                        <Button
                            type={'submit'}
                            name={'Enviar'}
                        />
                    </div>
                </form>
            </div>
            <div className="w-[60%] h-full bg-gradient-to-r from-[#4FB477] to-[#1F5F86] bg-login flex flex-col justify-between items-end p-5">
                <figure className="w-[50%]">
                    <img src={Logo} alt="turispapa" />
                </figure>
                <figure className="w-[85%]">
                    <img src={ImgLogin} />
                </figure>
            </div>
        </section>
    )
}

export default Login