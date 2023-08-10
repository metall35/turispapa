import { createContext, useState} from 'react'
export const TurisContext = createContext()
// eslint-disable-next-line react/prop-types
export function TurisContextProvider({ children }) {
    const [justifyActive, setJustifyActive] = useState("historico");

    return (
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

