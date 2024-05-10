import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Forms from "../../Layout/Forms";
import Button from "../Elements/Buttons";
import Input from "../Elements/Inputs";
import TextArea from "../Elements/TextArea";
import { TurisContext } from "../../../Context";
import imgHeader from "../../../assets/img/romero.jpg"
import Select from "../Elements/Select";
import useSendData from "../../../hooks/useSendData";
import useEditData from "../../../hooks/useEditData";

export default function FormLugaresNaturales() {
    const { setImageNav } = useContext(TurisContext)
    const { pathname } = useLocation()
    let handleSubmit
    setImageNav(imgHeader)
    const navigate = useNavigate()
    const Inputs = [
        {
            id: 1,
            type: 'text',
            name: 'Titulo',
            placeholder: 'Ingrese el título',
            required: true
        },
        {
            id: 2,
            type: 'file',
            name: 'Imagen',
            placeholder: '',
            required: true
        },
    ]

    const onSubmit = () => {
        //envio de datos
        navigate("/administrador", {
            replace: true,
        });
    }
    if (pathname.includes("/administrador/editar")) {
        handleSubmit = useEditData("updateindex", onSubmit)
    } else {
        handleSubmit = useSendData("index", onSubmit)
    }


    return (
        <Forms>
            <h1 className="text-center my-2 mb-8 text-xl font-semibold">Formulario de ingreso de lugares naturales</h1>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-3" onSubmit={handleSubmit}>
                {Inputs.map(input => (
                    <Input
                        key={input.id}
                        type={input.type}
                        name={input.name}
                        placeholder={input.placeholder}
                        required={input.required}
                    />
                ))}
                <Select
                    label="Categoría"
                    name="categoria"
                    options={[
                        {
                            value: "historico",
                            label: "Historíco",
                        },
                        {
                            value: "aventura",
                            label: "Aventura",
                        },
                        {
                            value: "naturaleza",
                            label: "Naturaleza",
                        },
                        {
                            value: "gastronomia",
                            label: "Gastronomia",
                        },
                        {
                            value: "entretenimiento",
                            label: "Entretenimiento",
                        },
                    ]}
                />
                <TextArea
                    name={'Descripcion'}
                    placeholder={'Ingrese la descripción del lugar'}
                    required={true}
                />
                <div className="md:col-span-2">
                    <Button
                        type={'submit'}
                        name={'Enviar'}
                    />
                </div>
            </form>
        </Forms>
    )
}
