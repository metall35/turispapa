import React, { useState, useContext } from "react";
import { TurisContext } from "../../../Context";
import axios from 'axios'
import Swal from 'sweetalert2'
import Forms from "../../Layout/Forms";
import Button from "../Elements/Buttons";
import Input from "../Elements/Inputs";
import Select from "../Elements/Select";
import TextArea from "../Elements/TextArea";

export default function FormEstablecimiento() {
    const { inputs, setInputs, setLoader } = useContext(TurisContext)

    const Inputs = [
        {
            id: 1,
            type: 'text',
            name: 'Nombre',
            placeholder: 'Ingrese el nombre del establecimiento',
            required: true
        },
        {
            id: 2,
            type: 'text',
            name: 'Dirección',
            placeholder: 'Ingrese la dirección del establecimiento',
            required: true
        },
        {
            id: 3,
            type: 'text',
            name: 'Localidad',
            placeholder: 'Ingrese la localidad del establecimiento',
            required: true
        },
        {
            id: 4,
            type: 'tel',
            name: 'Contacto',
            placeholder: 'Ingrese el contacto del establecimiento',
            required: true
        },
        {
            id: 5,
            type: 'text',
            name: 'Propietario',
            placeholder: 'Ingrese el propietario del establecimiento',
            required: true
        },
        {
            id: 6,
            type: 'file',
            name: 'Logo',
            placeholder: '',
            required: true
        },
    ]
    // console.log(inputs.establecimiento);
    const onSubmit = event => {
        const url = 'http://localhost:8000/api/establecimiento'
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
                    localidad: inputs.Localidad,
                    direccion: inputs.Dirección,
                    telefono: inputs.Contacto,
                    descripcion: inputs.Descripción,
                    tipo_negocio: inputs.establecimiento,
                    propietario: inputs.Propietario,
                    id_usuario: 3,
                    id_estado: 2,
                    logo: inputs.Logo,
                    redes_id: 3,
                    detalle: inputs.Carta || inputs.Habitación
                })
                    .then(function (response) {
                        Swal.fire({
                            title:'¡Bien!',
                            text:'La información a sido guardada correctamente.',
                            icon:'success',
                            confirmButtonColor: '#6fc390',
                        })
                        setInputs({})
                        setLoader(false)
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
            <h1 className="text-center my-2 mb-4">Formulario de ingreso de establecimientos</h1>
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
                    label="Tipo de establecimiento"
                    name="establecimiento"
                    options={[
                        {
                            value: "restaurante",
                            label: "Restaurante",
                        },
                        {
                            value: "hotel",
                            label: "Hotel",
                        },
                    ]}
                />
                {inputs.establecimiento === undefined ?  <></> : inputs.establecimiento === 'restaurante' ?
                    <Input key={'restaurante'} type={'file'} name={'Carta'} placeholder={'Ingrese la carta del restaurante'} required={false} /> :
                    <Input key={'hotel'} type={'file'} name={'Habitación'} placeholder={'Ingrese la mejor habitación'} required={false} /> 
                }
                <TextArea
                    name={'Descripción'}
                    placeholder={'Ingrese la descripción del lugar'}
                    required={true}
                />
                <div className="md:col-span-2" >
                    <Button
                        type={'submit'}
                        name={'Enviar'}
                    />
                </div>

            </form>
        </Forms>
    )
}
