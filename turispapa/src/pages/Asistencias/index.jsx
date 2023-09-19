import Forms from "../../Components/Layout/Forms"
import Input from "../../Components/Forms/Inputs"
function Asistencias() {
    return (
        <>
        <Forms>
        <Input 
        type={'text'}
        name={'Nombre'}
        required={true}
        placeholder={'Ingrese su nombre'}
        />
        </Forms>
        </>
    )
}

export default Asistencias