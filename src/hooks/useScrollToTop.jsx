import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const UseScrollToTop = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        setTimeout(()=>{
            window.scrollTo(0, 0);
        }, 800)
        setTimeout(() =>{
            window.scrollTo(0, 100);
            
        }, 1500)
    }, [pathname]);
}

export default UseScrollToTop;