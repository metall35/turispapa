import { useState, useContext, useEffect } from "react";
import { TurisContext } from "../Context";
import axios from 'axios';
/**
 * La función `useGetData` obtiene datos de múltiples URL usando Axios en un componente de React y
 * actualiza el estado en consecuencia.
 * @returns La función `useGetData` devuelve el estado de `datos`, que es un objeto que contiene los
 * datos obtenidos de las URL proporcionadas.
 */

function useGetData(urls) {
    const { setLoader } = useContext(TurisContext);
    const [data, setData] = useState({});
    const fetchData = async () => {
        setLoader(true);
        try {
            const requests = urls.map(async (url) => {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_TURISPAPA}/${url}`);
                return response.data;
            });

            const results = await Promise.all(requests);
            const updatedData = results.reduce((prevData, responseData, index) => {
                const key = urls[index];
                return { ...prevData, [key]: responseData };
            }, {});

            setData(updatedData);
            setLoader(false);
            console.log(updatedData);
        } catch (error) {
            console.error('Error fetching data:', error, data);
            setLoader(false);
        } finally {
            if(data == {}){
                setData(urls.map(url => { return { [url]: [] } }))
            }
            console.log(data);
            return data
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return data;
}

export default useGetData;

