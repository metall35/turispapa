import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

export const NavLinks = () => {
/* El fragmento de código define variables de estado y una función en un componente funcional de React. */
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  const [scroll, setScroll] = useState('absolute top-20 hidden group-hover:md:block hover:md:block rounded-lg border-none bg-[#eaeaf16e] bg-clip-padding text-center text-base shadow-lg');
  const scrollRef = useRef(false);
/**
 * La función `useScrolling` actualiza la clase CSS de un elemento según la posición de desplazamiento
 * de la ventana.
 */

  const useScrolling = () => {
    if (window.scrollY > 0) {
      if (!scrollRef.current) {
        setScroll('absolute top-15 hidden group-hover:md:block hover:md:block rounded-lg border-none bg-[#fff] bg-clip-padding text-center text-base shadow-lg');
        scrollRef.current = true;
      }
    } else {
      if (scrollRef.current) {
        setScroll('absolute top-15 hidden group-hover:md:block hover:md:block rounded-lg border-none bg-[#eaeaf16e] bg-clip-padding text-center text-base shadow-lg');
        scrollRef.current = false;
      }
    }
  }

/* El gancho `useEffect` se utiliza para realizar efectos secundarios en un componente funcional. En
este caso, se utiliza para agregar un detector de eventos al evento "scroll" en el objeto "ventana".
Cuando el usuario se desplaza, se llamará a la función `useScrolling`. */
  useEffect(() => {
    window.addEventListener("scroll", useScrolling);
    return () => {
      window.removeEventListener("scroll", useScrolling);
    }
  }, []);

/* El código devuelve un fragmento JSX que contiene una lista de enlaces de navegación. Los enlaces se
generan dinámicamente utilizando la función &quot;mapa&quot; en la matriz &quot;enlaces&quot;. Cada
enlace se representa como un `<div> `elemento con un encabezado y un submenú si existe. El
encabezado se puede expandir o contraer haciendo clic en él, y el submenú se puede expandir o
contraer haciendo clic en su encabezado. Las variables de estado &quot;encabezado&quot; y
&quot;subencabezado&quot; se utilizan para realizar un seguimiento de los encabezados expandidos.
Las clases y estilos CSS se aplican condicionalmente en función de las variables de estado y las
interacciones del usuario. */
  return (
    < >
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-lg md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-lg md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className={scroll}>
                  <div className=" p-2 ">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.name}>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li
                            className="text-xs text-gray-600 my-2.5"
                            key={slink.name}
                          >
                            <Link
                              to={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                  >
                    {slinks.Head}
                  </h1>
                  {slinks.sublink.map((slink) => (
                    <li className="py-3 pl-14" key={slink.name}>
                      <Link to={slink.link}>{slink.name}</Link>
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

