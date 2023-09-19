import Forms from "../../Components/Layout/Forms"
import Input from "../../Components/Forms/Inputs"
import Button from "../../Components/Forms/Buttons"
import TextArea from "../../Components/Forms/TextArea"
function Asistencias() {
    return (
        <>
        <Forms>
        <Input 
        type={'file'}
        name={'Nombre'}
        required={true}
        placeholder={'Ingrese su nombre'}
        />
        <Button
        name={'Guardar'}
        type={'delete'}
        />
        <TextArea
        name={'textarea'}
        required={true}
        placeholder={'mamaguevo'}
        />
        </Forms>
        </>
    )
}

export default Asistencias