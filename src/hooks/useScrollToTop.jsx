import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TurisContext } from '../Context';

const UseScrollToTop = () => {
    const { setImageNav, dataHeader, setDataHeader } = useContext(TurisContext)
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();    // Automatically scrolls to top whenever pathname changes
    if (pathname !== "/administrador") {
        useEffect(() => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 800)
            setTimeout(() => {
                window.scrollTo(0, 100);

            }, 1500)
        }, [pathname]);
    }


    if (pathname !== "/administrador") {

        useEffect(() => {
            setTimeout(() => {

                if (pathname === "/") {
                    const img = dataHeader[0]
                    setImageNav(img.imagen)
                }
                if (pathname === "/historia" || pathname === "/lugares-naturales" || pathname === "/eventos") {
                    const img = dataHeader[1]
                    setImageNav(img.imagen)
                }
                if (pathname === "/restaurantes" || pathname === "/hoteles") {
                    const img1 = dataHeader[2]
                    console.log(img1);
                    setImageNav(img1.imagen)
                }
                if (pathname === "/rutas") {
                    const img = dataHeader[3]
                    setImageNav(img.imagen)
                }
                if (pathname === "/prestadores") {
                    const img = dataHeader[4]
                    setImageNav(img.imagen)
                }
            }, 10);
        }, [pathname, dataHeader, setDataHeader])

    }

}

export default UseScrollToTop;