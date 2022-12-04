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
            <div className="RRSS">
                <a href="https://www.instagram.com/alex_r.97/" className="RS">Instagram</a>
                <span> | </span>
                <a href="https://www.facebook.com/rene.alexander.rivera.hernandz" className="RS">Facebook</a>
                <span> | </span>
                <a href="https://www.linkedin.com/feed/" className="RS">Linkedin</a>
            </div>
        </div>
        </>
    )
}