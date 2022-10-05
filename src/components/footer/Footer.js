import "./footer.scss";
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Footer(){

    const location = useLocation();

    const { pathname } = location;

    const localizacion = pathname.split("/");

    const Year= new Date().getFullYear();
    return(
        <>
        <div className="footer">
            <div className="ContEnlaces">
                <div className="derechos">
                    Derechos reservados {Year} | <strong> Portafolio profesional y Academico </strong> | René Rivera
                </div>
            </div>
        </div>
        </>
    )
}