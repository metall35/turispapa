import { useContext, useEffect, useState } from "react";
import { TurisContext } from "../../../../Context/";
const Select = ({ label, name, options }) => {
    const { inputs, setInputs } = useContext(TurisContext)
    const [value, setValue] = useState('')
    useEffect(() =>{
        setValue(inputs[name])
    }, [inputs])
    const onChange = e => {
        setInputs({ ...inputs, [name]: e.target.value })
        setValue(e.target.value)
    }
    return (
        <label
            htmlFor={name}
            className="block grid-cols-1"
        >
            <span className='text-neutral-500 block'>
                {label}
            </span>
            <select
                id={name}
                className="px-4 py-2 bg-white placeholder:text-neutral-400/60
                border border-neutral300/75 focus:border-[#14a44e76] focus:ring-[#14a44e76]
                focus:ring-1 focus:outline-none rounded-lg w-full"
                value={value}
                onChange={onChange}
            >
                <option value='initial'>Seleccione una opción</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    )
}

export default Select