import "./footer.scss";

export default function Footer(){

    const Year= new Date().getFullYear();
    return(
        <>
        <div className="footer">
            <div className="ContEnlaces">
                <p className="derechos">
                    Derechos reservados {Year} | <strong> Portafolio profesional y Académico </strong> | René Rivera
                </p>
            </div>
        </div>
        </>
    )
}