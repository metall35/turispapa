import React, { useState, useContext } from "react";
import { TurisContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'
import Forms from "../../Layout/Forms";
import Button from "../Elements/Buttons";
import Input from "../Elements/Inputs";
import Select from "../Elements/Select";
import TextArea from "../Elements/TextArea";

export default function FormLugaresNaturales() {
    const { inputs, setInputs, setLoader } = useContext(TurisContext)
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

    const onSubmit = event => {
        const url = 'http://localhost:8000/api/eventos'
        event.preventDefault()
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
                setLoader(true)
                axios.post(url, {
                    nombre: inputs.Nombre,
                    fecha: inputs.Fecha,
                    descripcion: inputs.Descripcion,
                    aforos: inputs.Aforo,
                    tipo_evento: inputs.evento,
                    contacto: inputs.Contacto,
                    id_estado: 2
                })
                    .then(function (response) {
                        Swal.fire({
                            title: '¡Bien!',
                            text: 'La información a sido guardada correctamente. Será redireccionado a la página principal.',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 2500
                        }).then(() => {
                            setInputs({})
                            setLoader(false)
                            navigate("/", {
                                replace: true,
                            });
                        })
                    })
                    .catch(function (err) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: `Parece que hubo un error, código: ${err.response.status} ${err.code}`,
                            confirmButtonColor: '#6fc390'
                        })
                        setLoader(false)
                    })
                console.log(inputs);
            }

        })
        setLoader(false)
    }
    return (
        <Forms>
            <h1 className="text-center my-2 mb-8 text-xl font-semibold">Formulario de ingreso de Eventos</h1>
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
                <Select
                    label="Tipo de evento"
                    name="evento"
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
