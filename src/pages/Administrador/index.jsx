import { TbArticle } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CardAdmin from "../../Components/CardAdmin";
import useGetData from "../../hooks/useGetData";
import { cardEstablecimientos } from "../../Components/CardAdmin/MyCards"
import { listadoEstablecimientos } from "../../Components/TableAdmin/MyList"
import { indexForms } from "../../Components/FormsAdmin/MyForms"
import TableAdmin from "../../Components/TableAdmin";
import FormAdmin from "../../Components/FormsAdmin";
import { useState, useEffect } from "react";
import useGetAdmin from "../../hooks/useGetAdmin";

function Admin() {
    const [data, setData] = useState({})
    const admin1 = useGetAdmin()
    const { establecimiento, asistencias } = useGetData(["establecimiento", "asistencia"]);
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
                                <CardAdmin key={data.id} data={data}>
                                    <data.icono />
                                    <h3>{data.nombre}</h3>
                                </CardAdmin>
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
                                            <th className="py-3 px-6 text-left">Tipo</th>
                                            <th className="py-3 px-6 text-center">Propietario</th>
                                            <th className="py-3 px-6 text-center">Acción</th>
                                        </tr>
                                    </thead>
                                    {/* {data?.map((data) => (
                                        <TableAdmin key={data.id} data={data}>
                                        </TableAdmin>
                                    ))} */}
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