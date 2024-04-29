import { useContext, useEffect, useState } from "react"
import { TurisContext } from "../Context"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";

const useGetAdmin = () => {
    const navigate = useNavigate()
    const { tokenSession, setAdmin, setLoader } = useContext(TurisContext)
    const [adminSession, setAdminSession] = useState()
    setAdmin(true)
    useEffect(() => {
        const fetchData = async () => {
            setLoader(true)
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_TURISPAPA}/users`, {
                    headers: {
                        "Authorization": `Bearer ${tokenSession}`
                    }
                })
                setLoader(false)
                setAdmin(true)
                setAdminSession(true)
                console.log(response);
            } catch (error) {
                console.log(error);
                Swal.fire({
                    title: "Oops....",
                    text: "No tienes Autorización para entrar a este apartado. Por favor inicie sesión.",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 2500,
                }).then(() => {
                    setLoader(false)
                    setAdmin(false)
                    setAdminSession(false)
                    navigate("/iniciar-Sesion", {
                        replace: true
                    })
                });
            }
        }
        fetchData()
    }, [tokenSession])
    return adminSession
}

export default useGetAdmin