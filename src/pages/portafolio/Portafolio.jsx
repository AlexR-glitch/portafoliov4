import './portafolio.scss';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Portafolio() {
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
            <div className="portafolio">
                <div className='titulo' data-aos="zoom-in">
                    <h1 className='cabezera'>Portafolio</h1>
                    <p className='contexto'>En esta sección podrás encontrar algunos de los trabajos que he realizado a lo largo de mi carrera universitaria, al igual que algunos trabajos o proyectos personales.</p>
                </div>
                <div className="portafolioContainer">
                    <div className='items'>
                        <Link to='/fotografia' className='enlace' data-aos="zoom-in-left">
                            <div className='img1'>
                                <div className='PortafolioItem'>
                                    <p className='section'>Fotografía</p>
                                </div>
                            </div>
                        </Link>

                        <Link to='/diseno' className='enlace' data-aos="zoom-in-up">
                            <div className='img2'>
                                <div className='PortafolioItem'>
                                    <p className='section'>Diseño</p>
                                </div>
                            </div>
                        </Link>

                        <Link to='/web' className='enlace' data-aos="zoom-in-right">
                            <div className='img3'>
                                <div className='PortafolioItem'>
                                    <p className='section'>Diseño Web</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}