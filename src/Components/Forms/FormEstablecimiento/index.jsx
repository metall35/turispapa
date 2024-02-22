import { useContext } from "react";
import { TurisContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
import useSendData from "../../../hooks/useSendData";
import Forms from "../../Layout/Forms";
import Button from "../Elements/Buttons";
import Input from "../Elements/Inputs";
import Select from "../Elements/Select";
import TextArea from "../Elements/TextArea";

export default function FormEstablecimiento() {
    const { inputs } = useContext(TurisContext)
    const navigate = useNavigate()
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
            name: 'Direccion',
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
    const handleSubmit = useSendData("establecimiento", onSubmit)

    return (
        <Forms>
            <h1 className="text-center my-2 mb-8 text-xl font-semibold">Formulario de ingreso de establecimientos</h1>
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
                    label="Tipo de establecimiento"
                    name="tipo_negocio"
                    options={[
                        {
                            value: "Restaurante",
                            label: "Restaurante",
                        },
                        {
                            value: "Hotel",
                            label: "Hotel",
                        },
                    ]}
                />
                {inputs.establecimiento === undefined ? <></> : inputs.establecimiento === 'restaurante' ?
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
