import { Link } from "react-router-dom";
import React,{useState} from "react";
import "./menu.scss";
import { useLocation } from "react-router-dom";
import logo from "./Grupo 21.png"

export default function Menu(){

    const [active, setActive] = useState('enlaces');
    const navToggler = () => {
        active === 'enlaces' ? setActive('enlaces navActivo') : setActive('enlaces');
    }
    /* localizacion */
    const location = useLocation();

    const { pathname } = location;

    const localizacion = pathname.split("/");
    return(
        <>
                    <nav className='menu'>
                <Link to="/" className='Linklogo'>
                    <img src={logo} className='logo' alt="logo"></img>
                </Link>
                <ul className={active}>
                    <li className={localizacion[1] === "" ? "active" : ""}>
                        <Link to="/" onClick={navToggler} className="link">Home</Link>
                        <div className='localizador'></div>
                    </li>
                    <li className={localizacion[1] === "about" ? "active" : ""}>
                        <Link to="/about" onClick={navToggler} className="link">About me</Link>
                        <div className='localizador'></div>
                    </li>
                    <li className={localizacion[1] === "portafolio" ? "active" : ""}>
                        <Link to="/portafolio" onClick={navToggler} className="link" >Portafolio</Link>
                        <div className='localizador'></div>
                    </li>
                    <li className={localizacion[1] === "contacto" ? "active" : ""}>
                        <Link to="/contacto" onClick={navToggler} className="link">Contact</Link>
                        <div className='localizador'></div>
                    </li>
                </ul>
                <div onClick={navToggler} className='navToggler'>
                    <i class="fas fa-bars"></i>
                </div>
            </nav>
        </>
    )
}