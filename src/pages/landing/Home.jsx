import "./home.scss";
import perfil from "./ftl.png";
import logoForm from "./logoF.png";
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Home() {
    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,

        offset: 200,
        delay: 40,
        duration: 300,
        easing: 'ease',
        once: false,
        mirror: true,
        anchorPlacement: 'top-bottom',
    });
    return (
        <>
            <header className="Container cabeza">
                <img data-aos="fade-left" src={perfil} className="img" alt='imagen'></img>
                <div className="Container encabezado" data-aos="fade-right">
                    <h1 className="title" data-aos="fade-up">René Rivera</h1>
                    <h2 className="sub-title" data-aos="fade-up">Diseñador gráfico web</h2>
                </div>
            </header>
            <div className="Racional">
                <div className="Container about">
                    <h1 className="titular" data-aos="fade-down" data-aos-once="true" data-aos-mirror="false">Sobre este portafolio</h1><br />
                    <p className="cuerpo" data-aos="fade-right">
                        El concepto detrás de este portafolio es <strong>ENCODE</strong> que significa <strong>CODIFICACIÓN</strong> nace a partir de que en la carrera que estudio está enfocada a el diseño de páginas web y en la edición de contenido multimedia, este concepto está relacionado tanto a la programación web que es la combinación de lenguajes de programación y también está relacionado con los códecs en los que se pueden trabajar proyectos audiovisuales, este concepto se verá reflejado en el uso de los lenguajes de programación y mediante el uso de materiales multimedia para que la apariencia visual del portafolio refleje la profesionalidad de mi trabajo.
                    </p>
                </div>
                <img className="logoF" src={logoForm} data-aos="zoom-in" alt='logo'></img>
            </div>
        </>
    )
}