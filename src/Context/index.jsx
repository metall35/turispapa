import { createContext, useEffect, useState} from 'react'
import axios from 'axios';
export const TurisContext = createContext()
// eslint-disable-next-line react/prop-types
export function TurisContextProvider({ children }) {
    // estado del contenido experiencia
    const [justifyActive, setJustifyActive] = useState("historico");
    const [inputs, setInputs] = useState({})
    const [loader, setLoader] = useState(true)
    const [imageNav, setImageNav] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/imagen')
                const data = await response.data
                console.log(data);
                setLoader(false)
            } catch (error) {
                console.log(`oh no hermano, algo salio mal: ${error}`);
                setLoader(false)
            }
        }
        fetchData()
    }, []) 
    return (
/* El código está creando un componente proveedor de contexto llamado `TurisContextProvider` usando los
ganchos `createContext` y `useState` de React. */
        <TurisContext.Provider
        value={{
            setJustifyActive,
            justifyActive,
            inputs,
            setInputs,
            loader,
            setLoader,
            imageNav,
            setImageNav
        }
            }
        >
            {children}
        </TurisContext.Provider>
    )
}

