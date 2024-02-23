import { useRoutes, BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { TurisContext } from "../../Context";
import UseScrollToTop from "../../hooks/useScrollToTop";
import Home from "../Home";
import Historia from "../Historia";
import Chapecoense from "../Chapecoense";
import Lugar_Natural from "../Lugar_Natural";
import Eventos from "../Eventos";
import Restaurantes from "../Restaurantes";
import Hoteles from "../Hoteles";
import Agencias from "../Agencias";
import Rutas from "../Rutas";
import Asistencias from "../Asistencias";
import Admin from "../Administrador"
//import Asistenciass from "../Asistenciass"
import Entretenimiento from "../Entretenimiento"
import NotFound from "../NotFound";
import Layout from "../../Components/Layout";
import Footer from "../../Components/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { NavbarAdmin } from "../../Components/NavbarAdmin/NavbarAdmin";
import Loader from '../../Components/Loader'
import FormEventos from '../../Components/Forms/FormEventos'
import FormAsistencias from '../../Components/Forms/FormAsistencias'
import FormEstablecimieno from '../../Components/Forms/FormEstablecimiento'
import FormLugaresNaturales from '../../Components/Forms/FormLugaresNaturales'
import { useState } from "react";

import Login from "../Login";

/* La función `AppRoutes` es responsable de definir las rutas de la aplicación usando el gancho
`useRoutes` de la biblioteca `react-router-dom`. Crea una matriz de objetos de ruta, donde cada
objeto representa una ruta específica en la aplicación. Cada objeto de ruta tiene una propiedad
`ruta` que define la ruta URL para esa ruta y una propiedad `elemento` que especifica el componente
que se representará cuando se accede a esa ruta. */
function AppRoutes() {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/historia', element: <Historia /> },
        { path: '/chapecoense', element: <Chapecoense /> },
        { path: '/lugares-naturales', element: <Lugar_Natural /> },
        { path: '/eventos', element: <Eventos /> },
        { path: '/restaurantes', element: <Restaurantes /> },
        { path: '/entretenimiento', element: <Entretenimiento /> },
        { path: '/hoteles', element: <Hoteles /> },
        { path: '/agencias', element: <Agencias /> },
        { path: '/rutas', element: <Rutas /> },
        { path: '/iniciar-sesion', element: <Login /> },
        { path: '/asistencias', element: <Asistencias /> },
        { path: '/FormEventos', element: <FormEventos /> },
        { path: '/FormAsistencias', element: <FormAsistencias /> },
        { path: '/FormEstablecimieno', element: <FormEstablecimieno /> },
        { path: '/FormLugaresNaturales', element: <FormLugaresNaturales /> },
        { path: '/administrador', element: <Admin /> },
        { path: '/*', element: <NotFound /> },

    ])
    return routes
}
/* La función `AppUi` es un componente de React que define la estructura y el diseño de la aplicación.
Devuelve código JSX que representa la interfaz de usuario de la aplicación. */

function AppUi() {
    const {loader} = useContext(TurisContext)
    const [isAdmin] = useState(false);
    return (
        <>
            <BrowserRouter>
                {isAdmin ? <NavbarAdmin /> : <Navbar />}
                <UseScrollToTop />
                <Layout>
                    {loader && <Loader />}
                    <AppRoutes />
                </Layout>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default AppUi
