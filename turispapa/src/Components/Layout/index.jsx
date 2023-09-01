
// eslint-disable-next-line react/prop-types
function Layout({children}) {
    return (
        <main className="flex flex-col mt-11 items-center">
            {children}
        </main>
    )
}

export default Layout