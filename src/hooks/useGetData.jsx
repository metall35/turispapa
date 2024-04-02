import { useState, useContext, useEffect } from "react";
import { TurisContext } from "../Context";
import axios from 'axios';

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
            console.error('Error fetching data:', error);
            setLoader(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Dependencia: urls y countRef.current

    return data;
}

export default useGetData;

