const Button = ({ name, type }) => {
    const typeColor = type === 'submit'
        ? 'bg-[#14a44e76] hover:bg-[#6fc390] active:bg-[#43bb72]'
        : type === 'modify' ? 'hover:bg-sky-600/60 bg-sky-600/50 active:bg-sky-600/75'
            : type === 'delete' ? 'hover:bg-red-600/60 bg-red-600/50 active:bg-red-600/75'
                : ''
    return (
        <button
            className={`${typeColor} py-2 px-4 rounded-lg text-center w-full text-neutral-100 font-bold`}
            type="submit"
        >
            {name}
        </button>
    )
}
export default Button