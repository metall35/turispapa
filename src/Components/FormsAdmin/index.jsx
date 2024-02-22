/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { TbArticle } from "react-icons/tb";

export default function FormAdmin({data}) {
    return (
        <li className="mb-2 flex items-center space-x-5">
            <TbArticle />
            <Link to={data.link} >
                {data.nombre}
            </Link>
        </li>
    )
}

