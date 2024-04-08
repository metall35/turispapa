import { TbArticle } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import { cardEstablecimientos } from "../../Components/CardAdmin/MyCards"
import { indexForms } from "../../Components/FormsAdmin/MyForms"
import TableAdmin from "../../Components/TableAdmin";
import FormAdmin from "../../Components/FormsAdmin";
import { useState, useEffect } from "react";
import useGetAdmin from "../../hooks/useGetAdmin";

function Admin() {
    const [data, setData] = useState({})
    const [dataFilter, setDataFilter] = useState({})
    const admin1 = useGetAdmin()
    const { establecimiento, asistencia } = useGetData(["establecimiento", "asistencia"]);

    useEffect(() => {
        setTimeout(() => {
            const newObjEstablecimiento = establecimiento.map((item, index) => ({
                id: index, // Puedes agregar el id o cualquier otra propiedad que necesites
                ...item,
            }));

            const newObjAsistencia = asistencia.map((item, index) => ({
                id: index, // Puedes agregar el id o cualquier otra propiedad que necesites
                ...item,
            }));

            const newData = newObjEstablecimiento.concat(newObjAsistencia);

            console.log(newData);
            setData(newData);
            setDataFilter(newData)
            console.log(data);
        }, 1000);
    }, [asistencia]);

    const handleFilter = (link) => {
        setDataFilter([])
        setTimeout(() => {
            setDataFilter(link === "" ? data : data.filter(data => data.tipo_negocio === link))
        }, 500);
    }
    return (
        <>
            {admin1 &&
                <div className="flex h-screen bg-gray-100 w-full toTop">
                    <div className="w-64 bg-white p-4">
                        <h1 className="text-2xl font-bold mb-4">Panel de Administrador</h1>
                        <ul className="space-y-2">
                            {indexForms?.map((data) => (
                                <FormAdmin key={data.id} data={data}>
                                    <li className="mb-2 flex items-center space-x-5">
                                        <TbArticle />
                                        <Link to={data.link} >
                                            {data.nombre}
                                        </Link>
                                    </li>
                                </FormAdmin>
                            ))}
                        </ul>
                    </div>

                    {/* Principal y Tarjetas */}
                    <div className="flex-1 p-10">
                        <h2 className="text-3xl font-semibold mb-4">Tablero</h2>

                        <div className="grid grid-cols-2  gap-6 mb-4">
                            {cardEstablecimientos?.map((data) => (
                                <div className="flex items-center justify-center bg-white p-4 rounded shadow h-28 cursor-pointer" onClick={() => handleFilter(data.link)}>
                                    {<data.icono className={data.color + " text-7xl"} />}
                                    <h3 className="font-semibold text-2xl">{data.nombre}</h3>
                                </div>
                            ))}
                        </div>

                        {/* Listado */}
                        <div className="w-full p-4">
                            <h1 className="font-bold text-xl text-center text-[#14A44D] my-4">
                                Listado
                            </h1>
                            <div className="overflow-x-auto">
                                <table className="w-full table-auto">
                                    <thead>
                                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                            <th className="py-3 px-6 text-left">Nombre del Establecimiento</th>
                                            <th className="py-3 px-6 text-left">Contacto</th>
                                            <th className="py-3 px-6 text-center">Imagen</th>
                                            <th className="py-3 px-6 text-center"></th>
                                        </tr>
                                    </thead>
                                    {dataFilter?.map((data) => (
                                        <TableAdmin key={data.contacto} data={data} />
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Admin    