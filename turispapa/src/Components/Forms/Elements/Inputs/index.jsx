
const Input = ({ name, type, placeholder, required }) => {
    const requiredStyle = required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ''
    const typeFile = type === 'file' ? 'file:mr-2 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-xs file:font-normal file:bg-[#14a44e10] file:text-[#43bb72] hover:file:bg-[#14a44e20] text-sm' : ''
    return (
        <label
            htmlFor={name}
            className='block grid-cols-1'
        >
            <span className={`${requiredStyle} text-neutral-500 block`}>
                {name}
            </span>
            <input
                type={type} name={name} id={name}
                placeholder={placeholder}
                className={`${typeFile} px-4 py-2 bg-neutral-200/10 placeholder:text-neutral-400/60
                border border-neutral300/75 focus:border-[#14a44e76] focus:ring-[#14a44e76]
                focus:ring-1 focus:outline-none rounded-lg w-full`}
            />
        </label>
    )
}

export default Input