import { useContext, useState } from "react";
import { TurisContext } from "../../../../Context/";

const TextArea = ({ name, placeholder, required }) => {
    const requiredStyle = required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ''
    const { inputs, setInputs } = useContext(TurisContext)
    const [textoLimpio, setTextoLimpio] = useState("")
    const Name = name.toLowerCase()
    const sinTildes = Name.replace(/[áéíóú]/g, "o");
    
    const onChange = e => {
        // setTextoLimpio(e.target.value.replaceAll(/<[^>]*>/g, ""))
        setInputs({ ...inputs, [sinTildes]: e.target.value })
    }
    return (
        <label
            htmlFor={name}
            className='block'
        >
            <span className={`${requiredStyle} text-neutral-500 block`}>
                {name}
            </span>
            <textarea
                name={name} id={name}
                placeholder={placeholder}
                className="px-4 py-2 bg-white placeholder:text-neutral-400/60
                border border-neutral300/75 focus:border-[#14a44e76] focus:ring-[#14a44e76]
                focus:ring-1 focus:outline-none rounded-lg w-full resize-y"
                onChange={onChange}
            />
        </label>
    )
}

export default TextArea