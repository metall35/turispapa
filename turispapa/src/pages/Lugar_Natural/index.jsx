
function Lugar_Natural() {
    return (
        <section className="w-[80%] flex flex-col items-center mb-4">            
            <h1 className=" text-4xl font-bold mb-4 text-[#14A44D]">
                Galería de Imagenes
            </h1>

            <div className="grid grid-cols-4 gap-4">
                <div className="bg-green-400  rounded h-[200px] col-span-2">Hola</div>
                
                <div className="bg-green-400  rounded h-[200px] w-[150px] ">Hola</div>

                <div className="bg-green-400  rounded col-span-2 row-span-6">Hola</div>
                <div className="bg-green-400  rounded h-[200px] col-span-2">Hola</div>
                <div className="bg-green-400  rounded h-[200px] col-span-2 row-span-5">Hola</div>

                <div className="bg-green-400  rounded h-[200px] col-span-4">Hola</div>
            </div>
        </section>
    )
}

export default Lugar_Natural