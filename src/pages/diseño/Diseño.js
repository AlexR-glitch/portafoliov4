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
        },
        {
            id: 2,
            ISrc: contIMG2,
        },
        {
            id: 3,
            ISrc: contIMG3,
        },
        {
            id: 4,
            ISrc: contIMG4,
        },
        {
            id: 5,
            ISrc: contIMG5,
        },
        {
            id: 6,
            ISrc: contIMG6,
        },
    ]

    const Video =[
        {
            id: 7,
            VSrc: 'https://www.youtube.com/embed/zSNJaWjri0w',
        },
        {
            id: 8,
            VSrc: 'https://www.youtube.com/embed/wfn22K51LNM',
        },
        {
            id: 9,
            VSrc: 'https://www.youtube.com/embed/DLC1K-9utsc',
        },
        {
            id: 10,
            VSrc: 'https://www.youtube.com/embed/0duA4dvVJCw',
        },
        {
            id: 11,
            VSrc: 'https://www.youtube.com/embed/FUhyawslSLE',
        },
        {
            id: 12,
            VSrc: 'https://www.youtube.com/embed/6KY73ontL6M',
        },
        {
            id: 13,
            VSrc:'https://www.youtube.com/embed/To9Cp-ggu4E',
        },
    ]

    const[view, setview] =useState(false);
    const[showCont, setshowCont] = useState('');
    const getCont = (ISrc) => {
        setshowCont(ISrc);
        setview(true);
    };

    const [vision, setvision] = useState(false);
    const [showVideo, setshowVideo] = useState('');
    const getVideo = (VSrc) => {
        setshowVideo(VSrc);
        setvision(true);
    };

    return(
        <>
        <div className={view ? "view Show" : "view"}>
            <img src={showCont}/>
            <i class="fa-solid fa-circle-xmark" onClick={()=> setview(false)}></i>
        </div>

        <div className={vision ? "vision visible" : "vision"}>
            <iframe src={showVideo + "?autoplay=1"} allow='autoplay;' allowFullScreen></iframe>
            <i class="fa-solid fa-circle-xmark" onClick={()=> setvision(false)}></i>
        </div>


        <div className='contenedorGaleria'>
            <Boton className='Boton'/>
            {imgdata.map((item,index) => {
                return(
                    <div className='contenido' key={index} onClick={()=> getCont(item.ISrc)}>
                        <img src={item.ISrc} className='content'/>
                    </div>
                )
            })}
            
            {Video.map((item, index) => {
                return (
                    <div className='containerV' key={index} onClick={()=> getVideo(item.VSrc)} >
                        <iframe src={item.VSrc +"?controls=0"} className='video'/>
                    </div>
                )
            })}
        </div>
        </>
    )
}
