import React from "react";
import { useNavigate } from "react-router-dom";
import Forms from "../../Layout/Forms";
import Button from "../Elements/Buttons";
import Input from "../Elements/Inputs";
import TextArea from "../Elements/TextArea";

export default function FormLugaresNaturales() {
    const { inputs, setInputs } = useContext(TurisContext)
    const navigate = useNavigate()
    const Inputs = [
        {
            id: 1,
            type: 'number',
            name: 'Distancia',
            placeholder: 'Ingrese la distancia en KM',
            required: true
        },
        {
            id: 2,
            type: 'text',
            name: 'Nombre',
            placeholder: 'Ingrese el nombre del lugar',
            required: true
        },
        {
            id: 3,
            type: 'file',
            name: 'Imagen',
            placeholder: '',
            required: true
        },
    ]

    const onSubmit = () => {
        //envio de datos
        navigate("/", {
            replace: true,
        });
    }
    const handleSubmit = useSendData("lugares-naturales", onSubmit)


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
