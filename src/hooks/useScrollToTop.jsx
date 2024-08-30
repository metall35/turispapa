import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TurisContext } from '../Context';

const UseScrollToTop = () => {
    const { setImageNav, dataHeader, imageNav } = useContext(TurisContext)
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


    useEffect(() => {
        if (pathname !== "/administrador") {
            let img;
            if (pathname === "/") {
                img = dataHeader[0]?.imagen;
            } else if (["/historia", "/lugares-naturales", "/eventos"].includes(pathname)) {
                img = dataHeader[1]?.imagen;
            } else if (["/restaurantes", "/hoteles"].includes(pathname)) {
                img = dataHeader[2]?.imagen;
            } else if (pathname === "/rutas") {
                img = dataHeader[3]?.imagen;
            } else if (pathname === "/prestadores") {
                img = dataHeader[4]?.imagen;
            }

            // Reemplazar los espacios por %20
            if (img) {
                img = img.replace(/ /g, "%20");
                setImageNav(img);
            }
        }
    }, [pathname, dataHeader, setImageNav, imageNav]);

}

export default UseScrollToTop;