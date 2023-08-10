import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import Historia from "../Historia";
import Generalidades from "../Generalidades";
import Chapecoense from "../Chapecoense";
import Lugar_Natural from "../Lugar_Natural";
import Eventos from "../Eventos";
import Restaurantes from "../Restaurantes";
import Hoteles from "../Hoteles";
import Agencias from "../Agencias";
import Rutas from "../Rutas";
import Asistencias from "../Asistencias";
import NotFound from "../NotFound";
import Layout from "../../Components/Layout";

function AppRoutes() {
    // se usa para el enrutamiento de la app
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/historia', element: <Historia /> },
        { path: '/generalidades', element: <Generalidades /> },
        { path: '/chapecoense', element: <Chapecoense /> },
        { path: '/lugares-naturales', element: <Lugar_Natural /> },
        { path: '/eventos', element: <Eventos /> },
        { path: '/restaurantes', element: <Restaurantes /> },
        { path: '/hoteles', element: <Hoteles /> },
        { path: '/agencias', element: <Agencias /> },
        { path: '/rutas', element: <Rutas /> },
        { path: '/asistencias', element: <Asistencias /> },
        { path: '/*', element: <NotFound /> },

    ])
    return routes
}

function AppUi() {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <AppRoutes />
                </Layout>
            </BrowserRouter>
        </>
    )
}

export default AppUi
