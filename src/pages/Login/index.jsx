import React from "react"
import Input from "../../Components/Forms/Elements/Inputs"
import Button from "../../Components/Forms/Elements/Buttons"
import Logo from "../../assets/logo.svg"
import ImgLogin from "../../assets/login.svg"

function Login() {
    const inputs = [
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
            name: "Contraseña",
            placeholder: "Contraseña",
            required: true
        }
    ]
    return (
        <section className="flex gap-4 justify-between shadow-lg border-neutral-400/40 border mb-8 lg:w-[70%] lg:h-[682px] sm:h-full rounded-lg overflow-hidden">
            <div className="flex flex-col items-center justify-center lg:w-[50%]">
                <h1 className="text-center my-2 mb-8 text-2xl font-semibold">Iniciar Sesión</h1>
                <form className="flex flex-col gap-3 w-[80%]">
                    {inputs.map(input => (
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
            <div className="w-[60%] h-full bg-gradient-to-r from-[#4FB477] to-[#1F5F86] bg-login lg:flex flex-col justify-between items-end p-5 sm:hidden">
                <figure className="w-[50%]">
                    <img src={Logo} alt="turispapa" />
                </figure>
                <figure className="w-[90%]">
                    <img src={ImgLogin} />
                </figure>
            </div>
        </section>
    )
}

export default Login