import Boton from "../components/button";
import './fotografia.scss';

import img1 from './img/1.webp';
import img2 from './img/2.webp';
import img3 from './img/3.webp';
import img4 from './img/4.webp';
import img5 from './img/5.webp';
import img6 from './img/6.webp';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';
import img9 from './img/9.webp';
import img10 from './img/10.webp';
import img11 from './img/11.webp';
import img12 from './img/12.webp';
import img13 from './img/13.webp';
import img14 from './img/14.webp';
import img15 from './img/15.webp';
import img16 from './img/16.webp';
import img17 from './img/17.webp';

import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Fotografia() {

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

    const data = [
        {
            id: 1,
            imgSrc: img1,
            desc: 'Fotografía tomada con finalidad académica, dicha actividad consistió en hacer fotografía publicitaria.',
        },
        {
            id: 2,
            imgSrc: img2,
            desc: 'Esta fotografía fue tomada en la carretera litoral durante las primeras vacaciones fuera de casa después de la cuarentena obligatoria.',
        },
        {
            id: 3,
            imgSrc: img3,
            desc: 'Esta fotografía fue tomada en el Parque Nacional de Montecristo, en Metapán, Santa Ana, fue una foto tomada por hobbie personal.',
        },
        {
            id: 4,
            imgSrc: img4,
            desc: 'Fotografía tomada durante una de las procesiones de la semana santa del año 2022, específicamente el domingo santo.',
        },
        {
            id: 5,
            imgSrc: img5,
            desc: 'Esta fotografía fue tomada en el Parque Nacional de Montecristo, en Metapán, Santa Ana, Tomada con la finalidad de jugar con el desenfoque del fondo.',
        },
        {
            id: 6,
            imgSrc: img6,
            desc: 'Fotografía tomada durante una de las procesiones de la semana santa del año 2022, específicamente el domingo de ramos, para la toma de la fotografía me interesaba el jugar con los ángulos desde los cuales tomar la foto.',
        },
        {
            id: 7,
            imgSrc: img7,
            desc: 'Esta fotografía forma parte de un trabajo presentado en la clase de Fotografía aplicada en la cual se usó el concepto de la depresión.',
        },
        {
            id: 8,
            imgSrc: img8,
            desc: 'Esta fotografía forma parte de un trabajo presentado en la clase de Fotografía aplicada para practicar la toma de fotos tipo retrato.',
        },
        {
            id: 9,
            imgSrc: img9,
            desc: 'Fotografía tomada como hobbie durante las vacaciones del 2021 en Metapán, la botella era parte de la decoración del corredor frontal de una casa.',
        },
        {
            id: 10,
            imgSrc: img10,
            desc: 'Fotografía tomada al interior del Parque Nacional de Montecristo, como parte de mi hobbie durante las vacaciones.',
        },
        {
            id: 11,
            imgSrc: img11,
            desc: 'Fotografía tomada al interior del Parque Nacional de Montecristo, en el jardín botánico de los 100 años, como parte de mi hobbie durante las vacaciones.',
        },
        {
            id: 12,
            imgSrc: img12,
            desc: 'Fotografía tomada al interior del Parque Nacional de Montecristo, como parte de mi hobbie durante las vacaciones.',
        },
        {
            id: 13,
            imgSrc: img13,
            desc: 'Fotografía tomada como parte de una práctica de la materia de fotografía aplicada, en la que experimentamos con la iluminación y con la velocidad de obturación.',
        },
        {
            id: 14,
            imgSrc: img14,
            desc: 'Fotografía tomada con finalidad académica, dicha actividad consistió en hacer fotografía publicitaria en esta ocasión se trata de un formato vertical.',
        },
        {
            id: 15,
            imgSrc: img15,
            desc: 'fotografía que forma parte de un parcial de fotografía aplicada, en la cual se usó el concepto de naturaleza bélica, para esta foto se jugó con la iluminación del fondo y el objeto a fotografiar.',
        },
        {
            id: 16,
            imgSrc: img16,
            desc: 'fotografía que forma parte de un parcial de fotografía aplicada, en la cual se usó el concepto de naturaleza bélica, para esta foto se jugó con la iluminación del fondo y el objeto a fotografiar.',
        },
        {
            id: 17,
            imgSrc: img17,
            desc: 'fotografía que forma parte de un parcial de fotografía aplicada, en la cual se usó el concepto de naturaleza bélica, para esta foto se agregaron más objetos para acompañar al elemento principal.',
        },
    ]

    const [model, setmodel] = useState(false);
    const [showImg, setShowImg] = useState('');
    const [text, settext] = useState('');
    const getImg = (imgSrc, desc) => {
        setShowImg(imgSrc);
        setmodel(true);
        settext(desc);
    }

    return (
        <>
            <div className="fotografias">
                <div className='titulo' data-aos="zoom-in">
                    <h1 className='cabezera'>Fotografía</h1>
                    <p className='contexto'>En esta página se recopilan algunas de las fotografías que he tomado a lo largo de estos años, ya sea como parte de mis trabajos académicos o como parte de mi hobby.</p>
                </div>

                <div className={model ? "model open" : "model"}>
                    <img src={showImg} alt='imagen' />
                    <i class="fa-solid fa-circle-xmark" onClick={() => setmodel(false)}></i>
                    <p className="descrito">{text}</p>
                </div>

                <div className="containerGalery">
                    <Boton className='Boton' />
                    {data.map((item, index) => {
                        return (
                            <div className="fotos" key={index} onClick={() => getImg(item.imgSrc, item.desc)}>
                                <img src={item.imgSrc} className='imgs' alt='imagen' data-aos="fade-down" />
                                <p hidden>{item.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}