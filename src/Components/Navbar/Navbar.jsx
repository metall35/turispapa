import { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/img/logo (2).png";
import { NavLinks } from "./NavLinks";
import { TurisContext } from "../../Context";

export const Navbar = () => {
  const { pathname } = useLocation()
  const { imageNav, setAdmin } = useContext(TurisContext)
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('bg-[#eaeaf16e]');
  const [nav, setNav] = useState('h-[80px] ');
  const scrollRef = useRef(false);
  /**
   * La función `useScrolling` ajusta el color de fondo y la altura de un elemento según la posición de
   * desplazamiento de la ventana.
   */

  const useScrolling = () => {
    if (pathname !== "/administrador") {
      if (window.scrollY > 10) {
        if (!scrollRef.current) {
          setScroll('bg-[#ffff] transition delay-300 duration-300 ease-in h-[60px] ');
          setNav('h-[60px] ');
          scrollRef.current = true;
        }
      } else {
        if (scrollRef.current) {
          setScroll('transition delay-300 duration-300 ease-in');
          setNav('h-[80px]');
          scrollRef.current = false;
        }
      }
    } else {
      setScroll("bg-[#ffff]")
    }
  }

  /* El gancho `useEffect` se utiliza para realizar efectos secundarios en un componente funcional. En
  este caso, se trata de agregar un detector de eventos al objeto de ventana para el evento
  "desplazamiento" y llamar a la función `useScrolling` cuando se activa el evento. */
  useEffect(() => {
    window.addEventListener("scroll", useScrolling);

    return () => {
      window.removeEventListener("scroll", useScrolling);
    }
  }, []);

  /* El código define un componente funcional llamado `Navbar` en JavaScript React. El componente
  representa un encabezado y una barra de navegación. */
  return (
    <>
      <header
        className={`${pathname === "/administrador" || pathname.includes("/Form") || pathname.includes("/editar") ? "" : "h-[740px] bg-cover bg-no-repeat bg-fixed bg-center"} `}
        style={pathname === "/administrador" || pathname.includes("/Form") || pathname.includes("/editar") ? {} : { backgroundImage: `url(${imageNav})` }}
      >
        <nav
          className={scroll + "fixed w-full text-gray-500 z-[100] shadow-lg"}
        >
          <div className={"flex items-center font-medium justify-between" + " " + nav}>
            <div className="z-50 p-1 md:w-auto w-full flex justify-between">
              <img src={Logo} alt="logo" className="md:cursor-pointer h-[60px] w-[210px] ml-2" />
              <div className="flex items-center text-[36px] md:hidden" onClick={() => setOpen(!open)}
              >
                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
              </div>
            </div>
            {pathname === "/administrador" || pathname.includes("/Form") || pathname.includes("/editar") ?
              <ul className="md:flex hidden uppercase items-center text-xs gap-4 mr-4">
                <li>
                  <Link to="/administrador" className="py-7 px-3 inline-block">
                    Administrador
                  </Link>
                </li>

                <li>
                  <Link to="/" reloadDocument className="py-7 px-3 inline-block ">
                    {setAdmin(false)}
                    Cerrar Sesión
                  </Link>
                </li>
              </ul>
              :
              <ul className="md:flex hidden uppercase items-center text-xs gap-4 mr-4">
                <li>
                  <Link to="/" className="py-7 px-3 inline-block">
                    Inicio
                  </Link>
                </li>
                <NavLinks className={scroll} />
                {/* <li>
                <Link to="/entretenimiento" className="py-7 px-3 inline-block">
                  Entretenimiento
                  </Link>
              </li> */}
                <li>
                  <Link to="/rutas" className="py-7 px-3 inline-block ">
                    Rutas
                  </Link>
                </li>
                <li>
                  <Link to="/asistencias" className="py-7 px-3 inline-block ">
                    Asistencia
                  </Link>
                </li>
              </ul>
            }
            {/* Mobile nav */}
            <ul
              className={`
                md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
                duration-500 ${open ? "left-0" : "left-[-100%]"}
              `}
            >
              <li>
                <Link to="/" className="py-7 px-3 inline-block">
                  Home
                </Link>
              </li>
              <NavLinks />
              <li>
                <Link to="/rutas" className="py-7 px-3 inline-block">
                  Rutas
                </Link>
              </li>
              <li>
                <Link to="/asistencias" className="py-7 px-3 inline-block">
                  Asistencias
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <div className="bg-gradient-to-r from-black/80 to-white/10 w-screen h-full "></div> */}
      </header>
    </>
  );
};
