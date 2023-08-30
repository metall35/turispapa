
export default function Card(data) {
    return (
        <figure className="w-80 h-96 overflow-hidden relative rounded-md">
            <img src={data.data.imagen} alt=""
                className="object-cover h-full w-full hover:scale-[1.1] duration-300 transition ease-in-out delay-150 " />
            <p className="absolute text-2xl text-white font-bold  bottom-16  left-5">
                {data.data.titulo}
            </p>
        </figure>
    )
}