import React, { useState, useEffect } from "react";
import "./styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuActivo, setMenuActivo] = useState(false);
  const [below800, setBelow800] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!menuActivo && window.scrollY > 20) {
        setScrolled(true);
      } else if (!menuActivo) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuActivo]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setBelow800(true);
        setScrolled(true);
      } else {
        setBelow800(false);
        if (!menuActivo && window.scrollY > 20) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuActivo(!menuActivo);
    setScrolled(!scrolled || scrolled);
  };

  return (
    <div>
      <div className={`below ${scrolled || below800 ? "scrolled" : ""}`}></div>
      <div
        className={`navbar__container ${
          scrolled || below800 ? "scrolled" : ""
        }`}
      >
        <nav className="navbar">
          <a className="navbar__name">
            <h2>LOGO</h2>
          </a>
          <div
            className={`navbar__containerMenu ${menuActivo ? "active" : ""}`}
          >
            <ul>
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#Servicios">Servicios</a>
              </li>
              <li>
                <a href="#Procesos">Procesos</a>
              </li>
              <li>
                <a href="#Proyectos">Proyectos</a>
              </li>
              <li>
                <a href="#QuienesSomos">Quienes Somos</a>
              </li>
              <li>
                <a href="#Contactanos">Contactanos</a>
              </li>
              <li>
                <a href="#Blog">Blog</a>
              </li>
              <li className="">
                <a href="#CotizaAhora" className="navbar__btn">
                  COTIZA AHORA!
                </a>
              </li>
            </ul>
          </div>
          <div
            className={`menu ${menuActivo ? "activo" : ""}`}
            onClick={toggleMenu}
          >
            <div className="barra"></div>
            <div className="barra"></div>
            <div className="barra"></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
