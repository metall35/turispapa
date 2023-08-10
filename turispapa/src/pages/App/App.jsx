import AppUi from './AppUi.jsx'
import { TurisContextProvider } from "../../Context";

function App() {

  return (
    <TurisContextProvider>
      <AppUi />
    </TurisContextProvider>
  )
}

export default App
