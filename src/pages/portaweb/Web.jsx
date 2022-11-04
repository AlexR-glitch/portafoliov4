import './web.scss';

import Boton from '../components/button';

import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Web() {

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
        anchorPlacement: 'top-center',
    });


    return (
        <>
            <Boton />
            <div className='ContenedorWeb'>

                <div className='titulo' data-aos="zoom-in">
                    <h1 className='cabezera'>Diseño Web</h1>
                    <p className='contexto'>En esta página se encuentran algunos proyectos académicos que he realizado a lo largo de mi carrera universitaria.</p>
                </div>

                <div className='ContenedorSeccion' data-aos="fade-up">
                    <Slide1 className='sliderCuerpo' />
                    <div className='descripcion'>
                        <h1 className='tituloSeccion'>Pagina de abogados</h1>
                        <p className='CuerpoSeccion'>Este proyecto fue desarrollado como un ejercicio académico con la finalidad de dar una solución a la necesidad de una página web para una firma de abogados, para que estos ofrezcan sus servicios de una manera más rápida y cómoda para sus clientes.</p>
                    </div>
                </div>

                <div className='ContenedorSeccion' data-aos="fade-up">
                    <Slide2 className='sliderCuerpo' />
                    <div className='descripcion'>
                        <h1 className='tituloSeccion'>Agencia de viajes</h1>
                        <p className='CuerpoSeccion'> Proyecto desarrollado como examen parcial para una agencia de viajes en la cual se ofrecen diferentes destinos alrededor del mundo, como parte de la actividad se le agrego un formulario de contacto para facilitar la comunicación cliente/agencia.</p>
                    </div>
                </div>

                <div className='ContenedorSeccion' data-aos="fade-up">
                    <Slide3 className='sliderCuerpo' />
                    <div className='descripcion'>
                        <h1 className='tituloSeccion'>Web Maker</h1>
                        <p className='CuerpoSeccion'>Propuesta de diseño para un proyecto emprendedor de un amigo, en el que se ofrecían servicios de diseño publicitario, diseño web, soporte técnico y e-comerce. Con la idea de brindar soluciones creativas para las necesidades de otros emprendedores</p>
                    </div>
                </div>

                <div className='ContenedorSeccion' data-aos="fade-up">
                    <Slide4 className='sliderCuerpo' />
                    <div className='descripcion'>
                        <h1 className='tituloSeccion'>Tienda de zapatos</h1>
                        <p className='CuerpoSeccion'>Proyecto realizado como actividad académica para una tienda de zapatos que quiere ofrecer sus productos mediante una página web, como parte de la propuesta se trabajó el catálogo, así como previsualizaciones de producto.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

