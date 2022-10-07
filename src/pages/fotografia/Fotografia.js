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

export default function Fotografia(){
    const data =[
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
        {
            id: 7,
            imgSrc: img7,
        },
        {
            id: 8,
            imgSrc: img8,
        },
        {
            id: 9,
            imgSrc: img9,
        },
        {
            id: 10,
            imgSrc: img10,
        },
        {
            id: 11,
            imgSrc: img11,
        },
        {
            id: 12,
            imgSrc: img12,
        },
        {
            id: 13,
            imgSrc: img13,
        },
        {
            id: 14,
            imgSrc: img14,
        },
        {
            id: 15,
            imgSrc: img15,
        },
        {
            id: 16,
            imgSrc: img16,
        },
        {
            id: 17,
            imgSrc: img17,
        },
    ]

    const [model, setmodel] = useState(false);
    const[showImg, setShowImg] = useState('');
    const getImg = (imgSrc) =>{
        setShowImg(imgSrc);
        setmodel(true);
    }

    

    return(
        <>
        <div className={model? "model open" : "model"}>
            <img src={showImg} alt='imagen'/>
            <i class="fa-solid fa-circle-xmark" onClick={() => setmodel(false)}></i>
        </div>
        
        <div className="containerGalery">
            <Boton className='Boton'/>
            {data.map((item,index) => {
                return(
                    <div className="fotos" key={index} onClick={()=> getImg(item.imgSrc)}>
                        <img src={item.imgSrc} className='imgs' alt='imagen'/>
                    </div>
                )
            })}
        </div>
        </>
    )
}