import AppUi from './AppUi.jsx'
import { TurisContextProvider } from "../../Context";

/* El código define un componente funcional llamado "Aplicación". Dentro del componente, devuelve
código JSX que representa el componente `TurisContextProvider`, que es un componente proveedor de
contexto, y el componente `AppUi`. El componente `TurisContextProvider` es responsable de
proporcionar el contexto de Turis a sus componentes secundarios, permitiéndoles acceder y actualizar
los datos del contexto de Turis. El componente `AppUi` es el componente de la interfaz de usuario
que se representará dentro del componente `TurisContextProvider`. Finalmente, el componente
"Aplicación" se exporta como la exportación predeterminada del módulo. */
function App() {

  return (
    <TurisContextProvider>
      <AppUi />
    </TurisContextProvider>
  )
}

export default App
