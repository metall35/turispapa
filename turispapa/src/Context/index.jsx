import { createContext, useState} from 'react'
export const TurisContext = createContext()
// eslint-disable-next-line react/prop-types
export function TurisContextProvider({ children }) {
    // estado del contenido experiencia
    const [justifyActive, setJustifyActive] = useState("historico");

    return (
/* El código está creando un componente proveedor de contexto llamado `TurisContextProvider` usando los
ganchos `createContext` y `useState` de React. */
        <TurisContext.Provider
        value={{
            setJustifyActive,
            justifyActive
        }
            }
        >
            {children}
        </TurisContext.Provider>
    )
}

