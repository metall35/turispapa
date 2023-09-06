
// eslint-disable-next-line react/prop-types
/**
 * La función `Layout` es un componente de React que representa un contenedor principal con flexbox y
 * centra a sus hijos.
 * @returns El componente Diseño devuelve un elemento principal con el nombre de clase "flex flex-col
 * mt-11 items-center". Los hijos del componente Diseño se representan dentro del elemento principal.
 */
function Layout({children}) {
    return (
        <main className="flex flex-col mt-11 items-center">
            {children}
        </main>
    )
}

export default Layout