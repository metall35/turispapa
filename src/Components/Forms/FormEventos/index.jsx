import React from "react";
import { useNavigate } from "react-router-dom";
import useSendData from "../../../hooks/useSendData";
import Forms from "../../Layout/Forms";
import Button from "../Elements/Buttons";
import Input from "../Elements/Inputs";
import Select from "../Elements/Select";
import TextArea from "../Elements/TextArea";

export default function FormLugaresNaturales() {
    const navigate = useNavigate()
    const Inputs = [
        {
            id: 1,
            type: 'text',
            name: 'Nombre',
            placeholder: 'Ingrese el nombre del evento',
            required: true
        },
        {
            id: 2,
            type: 'date',
            name: 'Fecha',
            placeholder: 'Ingrese la próxima fecha del evento',
            required: true
        },
        {
            id: 3,
            type: 'number',
            name: 'Aforo',
            placeholder: 'Ingrese el aforo del evento',
            required: true
        },
        {
            id: 4,
            type: 'tel',
            name: 'Contacto',
            placeholder: 'Ingrese el contacto del organizador',
            required: true
        },
        {
            id: 5,
            type: 'file',
            name: 'Imagen',
            placeholder: '',
            required: true
        },
    ]
    const onSubmit = () =>{
        navigate("/", {
            replace: true
        })
    }
    const handleSubmit = useSendData("eventos", onSubmit)
    return (
        <Forms>
            <h1 className="text-center my-2 mb-8 text-xl font-semibold">Formulario de ingreso de Eventos</h1>
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
                    label="Tipo de evento"
                    name="tipo_evento"
                    options={[
                        {
                            value: "Público",
                            label: "Público",
                        },
                        {
                            value: "Privado",
                            label: "Privado",
                        },
                        {
                            value: "Municipal",
                            label: "Municipal",
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
