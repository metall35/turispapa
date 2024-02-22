import { useState, useContext, useEffect } from "react"
import { TurisContext } from "../Context";
import axios from 'axios';

function useGetData(url) {
    const { setLoader } = useContext(TurisContext)
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            setLoader(true)
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_TURISPAPA}/${url}`)
                setData(response.data)
                setLoader(false)
                console.log(data);
            } catch (error) {
                console.log(`oh no hermano, algo salio mal: ${error}`);
                setLoader(false)
            }
        }
        fetchData()
    }, [])
    return data
}

export default useGetData