import React, { useState, useContext } from "react";
import { TurisContext } from "../../../Context";
import Forms from "../../Layout/Forms";
import Button from "../Elements/Buttons";
import Input from "../Elements/Inputs";

export default function FormAsistencia() {
    const { inputs, setInputs } = useContext(TurisContext)

    const Inputs = [
        {
            id: 1,
            type: 'tel',
            name: 'Contacto',
            placeholder: 'Ingrese el Contacto del establecimiento',
            required: true
        },
        {
            id: 2,
            type: 'text',
            name: 'Direccion',
            placeholder: 'Ingrese la dirección del establecimiento',
            required: true
        },
        {
            id: 3,
            type: 'text',
            name: 'Tipo',
            placeholder: 'Ingrese el tipo de establecimiento',
            required: true
        },
        {
            id: 4,
            type: 'file',
            name: 'Imagen',
            placeholder: '',
            required: true
        },
    ]

    const onSubmit = event => {
        event.preventDefault()
        console.log(inputs);
        setInputs({})
    }
    return (
        <Forms>
            <h1 className="text-center my-2 mb-4">Formulario de ingreso de asistencias</h1>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-3" onSubmit={onSubmit}>
                {Inputs.map(input => (
                    <Input
                        key={input.id}
                        type={input.type}
                        name={input.name}
                        placeholder={input.placeholder}
                        required={input.required}
                    />
                ))}
                <div className={Inputs.length % 2 === 0 ? "md:col-span-2" : "flex items-center justify-center mt-6"}>
                    <Button
                        type={'submit'}
                        name={'Enviar'}
                    />
                </div>
            </form>
        </Forms>
    )
}
