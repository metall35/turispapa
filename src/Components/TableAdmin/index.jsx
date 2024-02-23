/* eslint-disable react/prop-types */

export default function TableAdmin({data}) {
    return (
        <tbody className="text-gray-600 text-sm font-light">
            <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                    <span className="font-medium">{data.nombreEstablecimiento}</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-left">{data.tipoEstablecimiento}</td>
                <td className="py-3 px-6 text-center">{data.dueñoEstablecimiento}</td>
                <td className="py-3 px-6 text-center font-bold text-cyan-600 cursor-pointer">Editar</td>
            </tr>
        </tbody>
    )
}

