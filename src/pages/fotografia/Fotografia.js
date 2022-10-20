import Boton from "../components/button";
import './fotografia.scss';

import img1 from './img/1.JPG';
import img2 from './img/2.JPG';
import img3 from './img/3.JPG';
import img4 from './img/4.JPG';
import img5 from './img/5.JPG';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';
import img9 from './img/9.JPG';
import img10 from './img/10.JPG';
import img11 from './img/11.JPG';
import img12 from './img/12.JPG';
import img13 from './img/13.JPG';
import img14 from './img/14.JPG';
import img15 from './img/15.JPG';
import img16 from './img/16.JPG';   
import img17 from './img/17.JPG';

import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Fotografia(){

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

    const data =[
        {
            id: 1,
            imgSrc: img1,
            desc: 'Fotografia tomada con finalidad academica, dicha actividad consistio en hacer fotografia publicitaria.',
        },
        {
            id: 2,
            imgSrc: img2,
            desc: 'Esta fotografia fue tomada en la carretera litoral durante la primeras vacaciones fuera de casa despues de la cuarentena obligatoria.',
        },
        {
            id: 3,
            imgSrc: img3,
            desc: 'Esta fotografia fue tomada en el Parque Naciona de Montecristo, en Metapan, Santa Ana, fue una foto tomada por hobbie personal.',
        },
        {
            id: 4,
            imgSrc: img4,
            desc: 'Fotografia tomada durante una de las proseciones de la semana santa del año 2022, especificamente el domigo santo.',
        },
        {
            id: 5,
            imgSrc: img5,
            desc: 'Esta fotografia fue tomada en el Parque Naciona de Montecristo, en Metapan, Santa Ana, Tomada con la finalidad de jugar con el desenfoque del fondo.',
        },
        {
            id: 6,
            imgSrc: img6,
            desc: 'Fotografia tomada durante una de las proseciones de la semana santa del año 2022, especificamente el domigo de ramos, para la toma de la fotografia me interesaba el jugar con los angulos desde los cuales tomar la foto.',
        },
        {
            id: 7,
            imgSrc: img7,
            desc: 'Esta fotografia forma parte de un trabajo presentado en la clase de Fotografia aplicada en la cual se uso el concepto de la depresion.',
        },
        {
            id: 8,
            imgSrc: img8,
            desc: 'Esta fotografia forma parte de un trabajo presentado en la clase de Fotografia aplicada para practicar la toma de fotos tipo retrato.',
        },
        {
            id: 9,
            imgSrc: img9,
            desc: 'Fotografia tomada como hobbie durante las vacaciones del 2021 en Metapan, la botella era parte de la decoración del corredor frontal de una casa.',
        },
        {
            id: 10,
            imgSrc: img10,
            desc: 'Fotografia tomada al interior del Parque Nacional de Montecristo, como parte de mi hobbie durante las vacaciones.',
        },
        {
            id: 11,
            imgSrc: img11,
            desc: 'Fotografia tomada al interior del Parque Nacional de Montecristo, en el jardin botanico de los 100 años, como parte de mi hobbie durante las vacaciones.',
        },
        {
            id: 12,
            imgSrc: img12,
            desc: 'Fotografia tomada al interior del Parque Nacional de Montecristo, como parte de mi hobbie durante las vacaciones.',
        },
        {
            id: 13,
            imgSrc: img13,
            desc: 'Fotografia tomada como parte de una practica de la materia de fotografia aplicada, en la que experimentamos con la iluminacion y con la velocidad de obturacion.',
        },
        {
            id: 14,
            imgSrc: img14,
            desc: 'Fotografia tomada con finalidad academica, dicha actividad consistio en hacer fotografia publicitaria en esta ocacion se trata de un formato vertical.',
        },
        {
            id: 15,
            imgSrc: img15,
            desc: 'fotografia que forma parte de un parcial de fotografia aplicada, en la cual se uso el concepto de naturaleza belica, para esta foto se jugo con la iluminacion del fondo y el objeto a fotografiar.',
        },
        {
            id: 16,
            imgSrc: img16,
            desc: 'fotografia que forma parte de un parcial de fotografia aplicada, en la cual se uso el concepto de naturaleza belica, para esta foto se jugo con la iluminacion del fondo y el objeto a fotografiar.',
        },
        {
            id: 17,
            imgSrc: img17,
            desc: 'fotografia que forma parte de un parcial de fotografia aplicada, en la cual se uso el concepto de naturaleza belica, para esta foto se agrearon mas objetos para acompañar al elemento principal.',
        },
    ]
    const [model, setmodel] = useState(false);
    const[showImg, setShowImg] = useState('');
    const [text, settext] = useState('');
    const getImg = (imgSrc,desc) =>{
        setShowImg(imgSrc);
        setmodel(true);
        settext(desc);
    }

    return(
        <>
        <div className={model? "model open" : "model"}>
            <img src={showImg} alt='imagen'/>
            <i class="fa-solid fa-circle-xmark" onClick={() => setmodel(false)}></i>
            <p className="descrito">{text}</p>
        </div>
        
        <div className="containerGalery">
            <Boton className='Boton'/>
            {data.map((item,index) => {
                return(
                    <div className="fotos" key={index} onClick={()=> getImg(item.imgSrc,item.desc)} data-aos="zoom-out-up">
                        <img src={item.imgSrc} className='imgs' alt='imagen'/>
                        <p hidden>{item.desc}</p>
                    </div>
                )
            })}
        </div>
        </>
    )
}