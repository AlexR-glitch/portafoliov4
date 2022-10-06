import "./footer.scss";

export default function Footer(){
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