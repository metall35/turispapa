import Forms from "../../Components/Layout/Forms"
import Input from "../../Components/Forms/Inputs"
import Button from "../../Components/Forms/Buttons"
import TextArea from "../../Components/Forms/TextArea"
function Asistencias() {
    return (
      <>
        <Forms>
          <Input
            type={"text"}
            name={"Nombre"}
            required={true}
            placeholder={"Ingrese su nombre"}
          />

          <Input
            type={"text"}
            name={"Municipio"}
            required={true}
            placeholder={"Ingrese Municipio"}
          />

          <Input
            type={"text"}
            name={"Propietario"}
            required={true}
            placeholder={"Ingrese Propietario"}
          />

          <Input
            type={"text"}
            name={"Telefono"}
            required={true}
            placeholder={"Ingrese Telefono"}
          />

          <Input
            type={"text"}
            name={"Dirección"}
            required={true}
            placeholder={"Ingrese Dirección"}
          />

          <Input
            type={"text"}
            name={"Corregimiento"}
            required={true}
            placeholder={"Ingrese Corregimiento"}
          />

          <Input
            type={"text"}
            name={"Departamento"}
            required={true}
            placeholder={"Ingrese Departamento"}
          />

          <Input
            type={"text"}
            name={"Distancia"}
            required={true}
            placeholder={"Ingrese Distancia"}
          />

          <Input
            type={"file"}
            name={"Tipo acceso"}
            required={true}
            placeholder={"Ingrese Tipo de acceso"}
          />

          <TextArea
            name={"Caracteristicas"}
            required={true}
            placeholder={"Caracteristicas"}
          />

          <div className="flex justify-center">
            <Button name={"Guardar"} type={"submit"} />
          </div>
        </Forms>
      </>
    );
}

export default Asistencias