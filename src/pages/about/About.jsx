import './about.scss';
import ProgressBar from 'react-bootstrap/ProgressBar';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About(){
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
            <div className="CCuerpo">
                <div className="CCTexto">
                    <h1 className="CTitular" data-aos="fade-right">Sobre mí</h1>
                    <p className="CCCuerpo" data-aos="fade-right">
                    Mi nombre es <strong>René Rivera</strong> soy estudiante de último ciclo de la carrera de <strong> Diseño gráfico web multimedia </strong>, durante mis estudios universitarios me he interesado por ciertas áreas profesionales como la edición de <strong> fotografías </strong>, <strong> videos </strong> con fines lúdicos o profesionales, así como en la <strong> programación de sitios web </strong>, haciendo uso de lenguajes de programación y tecnologías como React Js.<br/><br/>

                    Mis áreas de <strong> conocimiento </strong> y <strong> experiencia </strong> son:<br/><br/>

                    </p>
                    <div className='container_stats'>
                        <section className="stats" data-aos="fade-right">
                            <article className="card">
                                <h2 className='card-title' >Programas de edición</h2>
                                <h6 className='label'>Años de experiencia</h6>
                                <div className='skillYears'>
                                    <span className='start'>0</span>
                                    <span className='start'>5</span>
                                </div>
                                <div className='skills'>
                                <div className='barra'>
                                        <label>Photoshop</label>
                                        <ProgressBar now={60} variant="danger"/>
                                    </div>
                                    <div className='barra'>
                                        <label>Illustrator</label>
                                        <ProgressBar now={100} variant="danger"/>
                                    </div>
                                    <div className='barra'>
                                        <label>Premiere Pro</label>
                                        <ProgressBar now={40} variant="danger" />
                                    </div>
                                    <div className='barra'>
                                        <label>After Effects</label>
                                        <ProgressBar now={40} variant="danger"/>
                                    </div>
                                    <div className='barra'>
                                        <label>InDesign</label>
                                        <ProgressBar now={80} variant="danger" />
                                    </div>
                                    <div className='barra'>
                                        <label>Lightroom</label>
                                        <ProgressBar now={60} variant="danger" />
                                    </div>
                                    <div className='barra'>
                                        <label>Audition</label>
                                        <ProgressBar now={20} variant="danger" />
                                    </div>
                                </div>
                            </article>
                        </section>

                        <section className="stats" data-aos="fade-left">
                            <article className="card">
                                <h2 className='card-title' >Lenguajes y tecnologías de programación</h2>
                                <h6 className='label'>Años de experiencia</h6>
                                <div className='skillYears'>
                                    <span className='start'>0</span>
                                    <span className='start'>5</span>
                                </div>
                                <div className='skills'>
                                    <div className='barra'>
                                        <label>HTML</label>
                                        <ProgressBar now={100} variant="danger" />
                                    </div>
                                    <div className='barra'>
                                        <label>CSS</label>
                                        <ProgressBar now={100} variant="danger" />
                                    </div>
                                    <div className='barra'>
                                        <label>JavaScript</label>
                                        <ProgressBar now={80} variant="danger" />
                                    </div>
                                    <div className='barra'>
                                        <label>PHP</label>
                                        <ProgressBar now={40} variant="danger" />
                                    </div>
                                    <div className='barra'>
                                        <label>MySQL</label>
                                        <ProgressBar now={20} variant="danger" />
                                    </div>
                                    <div className='barra'>
                                        <label>Reactjs</label>
                                        <ProgressBar now={20} variant="danger" />
                                    </div>
                                </div>
                            </article>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}