import Boton from '../components/button.jsx';
import './diseño.scss';

import contIMG1 from './img/1.webp';
import contIMG2 from './img/2.webp';
import contIMG3 from './img/3.webp';
import contIMG4 from './img/4.webp';
import contIMG5 from './img/6.webp';
import contIMG6 from './img/11.webp';

import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Diseño() {

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
        anchorPlacement: 'top-top',
    });

    const imgdata = [
        {
            id: 1,
            ISrc: contIMG1,
            descp: 'Proyecto académico con el que se practicó con la creación de piezas infográficas, para lo cual se dejó tematica libre.',
        },
        {
            id: 2,
            ISrc: contIMG2,
            descp: 'Proyecto académico en el cual se trabajó un personaje para una marca existente, para dicha actividad se debía crear una pieza publicitaria con dicho personaje.',
        },
        {
            id: 3,
            ISrc: contIMG3,
            descp: 'Proyecto académico en el cual se trabajó creo la portada al que nosotros daríamos nombre.',
        },
        {
            id: 4,
            ISrc: contIMG4,
            descp: 'Proyecto académico de la materia de fotografía aplicada en la cual haríamos uso de una fotografía de algún producto que tuviéramos en casa y la usaríamos para crear una pieza publicitaria.',
        },
        {
            id: 5,
            ISrc: contIMG5,
            descp: 'Proyecto académico en el cual se creó una marca ficticia la cual ofrecería cursos en alguna tematica de nuestro interés, para la cual se crearían una serie de artes publicitarias para la red social de Instagram.',
        },
        {
            id: 6,
            ISrc: contIMG6,
            descp: 'Proyecto académico en el cual se creó una marca ficticia la cual ofrecería cursos en alguna tematica de nuestro interés, para la cual se crearían una serie de artes publicitarias para la red social de Instagram.',
        },
    ]

    const Video = [
        {
            id: 7,
            VSrc: 'https://www.youtube.com/embed/zSNJaWjri0w',
            titulo: 'Practica 1',
            descripc: 'Video creado como practica académica para la clase de Diseño gráfico digital 5, en el cual se hizo uso de un producto o servicio existente, para el cual se debería de crear una video guía para el uso del producto o servicio.',
        },
        {
            id: 8,
            VSrc: 'https://www.youtube.com/embed/wfn22K51LNM',
            titulo: 'practica 5',
            descripc: 'Video creado como practica académica para la clase de Diseño gráfico digital 5, en el cual se hizo uso de una marca existente, para el cual se creó un video promocional en el cual dicha marca presenta alguno de los productos que ofrecen',
        },
        {
            id: 9,
            VSrc: 'https://www.youtube.com/embed/DLC1K-9utsc',
            titulo: 'Practica 4',
            descripc: 'Video creado como pausa publicitaria para un parcial de la materia de diseño gráfico digital 5, en la cual se nos pedía hace uso de marcas o productos existentes, respetando la imagen de las marcas utilizados.',
        },
        {
            id: 10,
            VSrc: 'https://www.youtube.com/embed/0duA4dvVJCw',
            titulo: 'Practica 2',
            descripc: 'Video creado como pausa publicitaria para un parcial de la materia de diseño gráfico digital 5, en la cual se debía concienciar a la audiencia sobre las normas de bioseguridad.',
        },
        {
            id: 11,
            VSrc: 'https://www.youtube.com/embed/FUhyawslSLE',
            titulo: 'Parcial 1 Video',
            descripc: 'Video creado como pausa publicitaria para un parcial de la materia de diseño gráfico digital 5, en la cual se nos pedía hace uso de marcas o productos existentes, respetando la imagen de las marcas utilizados.',
        },
        {
            id: 12,
            VSrc: 'https://www.youtube.com/embed/6KY73ontL6M',
            titulo: 'Spot 3 Parcial DGDV',
            descripc: 'Video creado como pausa publicitaria para un parcial de la materia de diseño gráfico digital 5, en la cual se debía concienciar a la audiencia sobre las normas de bioseguridad.',
        },
        {
            id: 13,
            VSrc: 'https://www.youtube.com/embed/To9Cp-ggu4E',
            titulo: 'Spot Parcial 1 Video',
            descripc: 'Video creado como pausa publicitaria para un parcial de la materia de diseño gráfico digital 5, en la cual se nos pedía hace uso de marcas o productos existentes, respetando la imagen de las marcas utilizados.',
        },
    ]

    const [view, setview] = useState(false);
    const [showCont, setshowCont] = useState('');
    const [texto, settexto] = useState('');
    const getCont = (ISrc, descp) => {
        setshowCont(ISrc);
        setview(true);
        settexto(descp);
    };

    const [vision, setvision] = useState(false);
    const [showVideo, setshowVideo] = useState('');
    const [text, settext] = useState('');
    const getVideo = (VSrc, descripc) => {
        setshowVideo(VSrc);
        setvision(true);
        settext(descripc);
    };

    return (
        <>
            <div className='dZone'>

                <div className='titulo' data-aos="zoom-in">
                    <h1 className='cabezera'>Diseño</h1>
                    <p className='contexto'>En esta página se recopilan algunos de mis trabajos académicos que he realizado a lo largo de mi carrera universitaria, algunos de los trabajos son piezas gráficas y otros son contenido audiovisual.</p>
                </div>

                <div className={view ? "view Show" : "view"}>
                    <img src={showCont} alt='imagen' />
                    <i className="fa-solid fa-circle-xmark" onClick={() => setview(false)}></i>
                    <p className='textDesc'>{texto}</p>
                </div>

                <div className={vision ? "vision visible" : "vision"}>
                    <iframe src={showVideo + "?autoplay=1"} allow='autoplay;' title={Video.titulo} allowFullScreen width="640" height="360" frameBorder= "0"></iframe>
                    <i className="fa-solid fa-circle-xmark" onClick={() => setvision(false)}></i>
                    <p className='textDesc'>{text}</p>
                </div>

                <div className='contenedorGaleria'>
                    <Boton className='Boton' />
                    {imgdata.map((item, index) => {
                        return (
                            <div className='contenido' key={index} onClick={() => getCont(item.ISrc, item.descp)}>
                                <img src={item.ISrc} className='content' alt='imagen' data-aos="fade-up" />
                                <p hidden>{item.descp}</p>
                            </div>
                        )
                    })}

                    {Video.map((item, index) => {
                        return (
                            <div className='containerV' key={index} onClick={() => getVideo(item.VSrc, item.descripc)}>
                                <iframe src={item.VSrc + "?controls=0"} title={item.titulo} className='video' data-aos="fade-up" />
                                <p hidden>{item.descripc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}


