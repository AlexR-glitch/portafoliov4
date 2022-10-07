import './web.scss';

import Boton from '../components/button';

import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';

export default function Web() {
    return (
        <>
        <Boton />
        <div className='ContenedorWeb'>
            <div className='ContenedorSeccion'>
                <Slide1  className='sliderCuerpo'/>
                <div className='descripcion'>
                    <h1 className='tituloSeccion'>Pagina de abogados</h1>
                    <p className='CuerpoSeccion'>Este proyecto fue desarrollado como un ejercicio academico con la finalidad de dar una solucion a la necesidad de una pagina web para una firma de abogados, para que estos ofrescan sus servicios de una manera mas rapida y comoda para sus clientes.</p>
                </div>
            </div>
            
            <div className='ContenedorSeccion'>
                <Slide2  className='sliderCuerpo'/>
                <div className='descripcion'>
                    <h1 className='tituloSeccion'>Agencia de viajes</h1>
                    <p className='CuerpoSeccion'> Proyecto desarrollado como examen parcial para una agencia de viajes en la cual se ofrecen diferentes destinos alrededor del mundo, como parte de la actividad se le agrego un formulario de contacto para facilitar la comunicacion cliente/agencia.</p>
                </div>
            </div>

            <div className='ContenedorSeccion'>
                <Slide3  className='sliderCuerpo'/>
                <div className='descripcion'>
                    <h1 className='tituloSeccion'>Web Maker</h1>
                    <p className='CuerpoSeccion'>Propuesta de diseño para un proyecto emprendedor de un amigo, en el que se ofrecian servicios de diseño publicitario, diseño web, soporte tecnico y e-comerce.Con la idea de brindar soluciones creativas para las necesidades de otros emprendedores</p>
                </div>
            </div>

            <div className='ContenedorSeccion'>
                <Slide4 className='sliderCuerpo'/>
                <div className='descripcion'>
                    <h1 className='tituloSeccion'>Tienda de zapatos</h1>
                    <p className='CuerpoSeccion'>Proyecto realizado como actividad academica para una tienda de zapatos que quiere ofrecer sus porductos mediante una pagina web, como parte de la propuesta se trabajo el catalogo, asi como previsualizaciones de producto.</p>
                </div>
            </div>
        </div>
        </>
    )
}