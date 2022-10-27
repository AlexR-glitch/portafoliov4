import { Link } from "react-router-dom";
import './button.scss';

export default function Boton(){
    return(
        <>
        <Link to= '/portafolio' className="back">
                <i className="fa-solid fa-arrow-left"></i>
        </Link>
        </>
    )
}