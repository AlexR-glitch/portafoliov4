import Boton from '../components/button.js';
import './diseño.scss';

import contIMG1 from './img/1.png';
import contIMG2 from './img/2.png';
import contIMG3 from './img/3.png';
import contIMG4 from './img/4.png';
import contIMG5 from './img/6.png';
import contIMG6 from './img/11.png';

import { useState } from 'react';

export default function Diseño(){
    const imgdata =[
        {
            id: 1,
            ISrc: contIMG1,
            descp:'Poryecto academico con el que se practico con la creación de piezas infograficas, para lo cual se dejo tematica libre.',
        },
        {
            id: 2,
            ISrc: contIMG2,
            descp:'Proyecto academico en el cual se trabajo un personaje para una marca exitente, para dicha actividad se debia crear una pieza publicitaria con dicho personaje.',
        },
        {
            id: 3,
            ISrc: contIMG3,
            descp:'Proyecto academico en el cual se trabajo creo la portada al que nosotros dariamos nombre.',
        },
        {
            id: 4,
            ISrc: contIMG4,
            descp:'Proyecto academico de la materia de fotografia aplicada en la cual hariamos uso de una fotgrafia de algun producto que tubieramos en casa y la usariamos para crear una pieza publicitaria.',
        },
        {
            id: 5,
            ISrc: contIMG5,
            descp:'Proyecto academico en el cual se creo una marca fictisia la cual ofreceria cursos en alguna tematica de nuestro interes, para la cual se crearian una serie de artes publicitarias para la red social de Instagram.',
        },
        {
            id: 6,
            ISrc: contIMG6,
            desc:'Proyecto academico en el cual se creo una marca fictisia la cual ofreceria cursos en alguna tematica de nuestro interes, para la cual se crearian una serie de artes publicitarias para la red social de Instagram.',
        },
    ]

    const Video =[
        {
            id: 7,
            VSrc: 'https://www.youtube.com/embed/zSNJaWjri0w',
            titulo: 'Practica 1',
            descripc: 'Video creado como practica academica para la clase de Diseño grafico digital 5, en el cual se hizo uso de un producto o servicio exitente, para el cual se deberia de crear una videoguia para el uso del producto o servicio.',
        },
        {
            id: 8,
            VSrc: 'https://www.youtube.com/embed/wfn22K51LNM',
            titulo:'practica 5',
            descripc: 'Video creado como practica academica para la clase de Diseño grafico digital 5, en el cual se hizo uso de una marca exitente, para el cual se creo un video promocional en el cual dicha marca presenta alguno de los productos que ofrecen',
        },
        {
            id: 9,
            VSrc: 'https://www.youtube.com/embed/DLC1K-9utsc',
            titulo:'Practica 4',
            descripc: 'Video creado como pausa publicitaria para un parcial de la materia de diseño grafico digital 5, en la cual se nos pedia hace uso de marcas o productos exitentes, respetando la imagen de las marcas utilizados.',
        },
        {
            id: 10,
            VSrc: 'https://www.youtube.com/embed/0duA4dvVJCw',
            titulo:'Practica 2',
            descripc: 'Video creado como pausa publicitaria para un parcial de la materia de diseño grafico digital 5, en la cual se debia concienciar a la audiencia sobre las normas de bioseguridad.',
        },
        {
            id: 11,
            VSrc: 'https://www.youtube.com/embed/FUhyawslSLE',
            titulo:'Parcial 1 Video',
            descripc: 'Video creado como pausa publicitaria para un parcial de la materia de diseño grafico digital 5, en la cual se nos pedia hace uso de marcas o productos exitentes, respetando la imagen de las marcas utilizados.',
        },
        {
            id: 12,
            VSrc: 'https://www.youtube.com/embed/6KY73ontL6M',
            titulo:'Spot 3 Parcial DGDV',
            descripc: 'Video creado como pausa publicitaria para un parcial de la materia de diseño grafico digital 5, en la cual se debia concienciar a la audiencia sobre las normas de bioseguridad.',
        },
        {
            id: 13,
            VSrc:'https://www.youtube.com/embed/To9Cp-ggu4E',
            titulo:'Spot Parcial 1 Video',
            descripc: 'Video creado como pausa publicitaria para un parcial de la materia de diseño grafico digital 5, en la cual se nos pedia hace uso de marcas o productos exitentes, respetando la imagen de las marcas utilizados.',
        },
    ]

    const[view, setview] =useState(false);
    const[showCont, setshowCont] = useState('');
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

    return(
        <>
        <div className={view ? "view Show" : "view"}>
            <img src={showCont} alt='imagen'/>
            <i class="fa-solid fa-circle-xmark" onClick={()=> setview(false)}></i>
            <p className='textDesc'>{texto}</p>
        </div>

        <div className={vision ? "vision visible" : "vision"}>  
        <iframe src={showVideo + "?autoplay=1"} allow='autoplay;' title={Video.titulo} allowFullScreen></iframe>
            <i class="fa-solid fa-circle-xmark" onClick={()=> setvision(false)}></i>
            <p className='textDesc'>{text}</p>
        </div>


        <div className='contenedorGaleria'>
            <Boton className='Boton'/>
            {imgdata.map((item,index) => {
                return(
                    <div className='contenido' key={index} onClick={()=> getCont(item.ISrc,item.descp)}>
                        <img src={item.ISrc} className='content' alt='imagen'/>
                        <p hidden>{item.descp}</p>
                    </div>
                )
            })}
            
            {Video.map((item, index) => {
                return (
                    <div className='containerV' key={index} onClick={()=> getVideo(item.VSrc,item.descripc)} >
                        <iframe src={item.VSrc +"?controls=0"} title={item.titulo} className='video'/>
                        <p hidden>{item.descripc}</p>
                    </div>
                )
            })}
        </div>
        </>
    )
}
