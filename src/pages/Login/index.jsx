import { useContext } from "react";
import { TurisContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import FormData from 'form-data';
import axios from "axios";
import Swal from "sweetalert2";
import Input from "../../Components/Forms/Elements/Inputs"
import Button from "../../Components/Forms/Elements/Buttons"
import Logo from "../../assets/img/logo (2).png"
import ImgLogin from "../../assets/login.svg"
import imgHeader from "../../assets/img/romero.jpg"
import useLogin from "../../hooks/useLogin";


function Login() {
    const { setImageNav } = useContext(TurisContext);
    setImageNav(imgHeader)
    const handleSubmit = useLogin()
    const inputs1 = [
        {
            id: 1,
            type: "email",
            name: "Email",
            placeholder: "ejemplo@gmail.com",
            required: true
        },
        {
            id: 2,
            type: "password",
            name: "Password",
            placeholder: "Contraseña",
            required: true
        }
    ]
    return (
        <section className="flex gap-4 lg:justify-between justify-center shadow-lg border-neutral-400/40 border mb-8 md:w-[60%] w-[90%] h-[580px] rounded-lg overflow-hidden">
            <div className="flex flex-col items-center justify-center lg:w-[50%] w-[100%] bg-white/50">
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
            <div className="w-[50%] h-full bg-gradient-to-r from-[#4FB477] to-[#1F5F86] bg-login lg:flex flex-col justify-between items-end p-5 hidden md:flex">
                <figure className="md:w-[50%] bg-white rounded-lg">
                    <img src={Logo} alt="turispapa" />
                </figure>
                <figure className="w-[75%]">
                    <img src={ImgLogin} />
                </figure>
            </div>
        </section>
    )
}

export default Login