import './about.scss';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function About(){
    const year = new Date().getFullYear();
    const age = year - 1997;
    return (
        <>
            <div className="CCuerpo">
                <div className="CCTexto">
                    <h1 className="CTitular">Sobre mí</h1>
                    <p className="CCCuerpo">
                        Mi nombre es <strong>René Rivera</strong> soy estudiante de ultimo cicle de la carrera de <strong>Diseño grafico web multimedia</strong>, durante mis estudios universitarios me he interesado por ciertas areas profecionales como la edicion de <strong>fotografias</strong>, <strong>videos</strong> con fines ludicos o profesionales, asi como en la <strong>programacion de sitios web</strong>, haciendo uso de lenguajes de programación y tecnologías como reactjs.<br/><br/>

                        Mis areas de <strong>conocimiento</strong> y <strong>experiencia</strong> son:<br/><br/>
                    </p>
                    <div className='container_stats'>
                        <section className="stats">
                            <article className="card">
                                <h2 className='card-title' >Programas de edicion</h2>
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

                        <section className="stats">
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