import Before from '../img/before.svg';
import Next from '../img/next.svg';
import {useRef } from 'react';
import './slide.scss'

import web1 from '../img/abogados/abogados1.webp';
import web2 from '../img/abogados/abogados2.webp';
import web3 from '../img/abogados/abogados3.webp';

export default function Slide1() {

    const slideshow = useRef(null);

    //boton de Next
    const next = () => {
        if (slideshow.current.children.length > 0) {
            const primerElemento = slideshow.current.children[0];

            slideshow.current.style.transition = `500ms ease-out all`;

            const tamañoSlide = slideshow.current.children[0].offsetWidth

            slideshow.current.style.transform = `translate(-${tamañoSlide}px)`;

            const transicion = () => {
                slideshow.current.style.transition = `none`;
                slideshow.current.style.transform = `translate(0)`;

                slideshow.current.appendChild(primerElemento);

                slideshow.current.removeEventListener('transitionend', transicion)
            }
            slideshow.current.addEventListener('transitionend', transicion);
        }
    };
    //boton before
    const before = () => {
        if (slideshow.current.children.length > 0) {

            const index = slideshow.current.children.length - 1;

            const ultimoElemento = slideshow.current.children[index];

            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

            slideshow.current.style.transition = `none`;

            const tamañoSlide = slideshow.current.children[0].offsetWidth

            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = `500ms ease-out all`;

                slideshow.current.style.transform = `translate(0)`;
            }, 30)
        }
    };

    return (
        <>
            <div className='SlideContainerMain'>
                <div className='SlideShow' ref={slideshow}>
                    <div className='Slide'>
                        <img src={web1} className='img' alt='imagen'/>
                    </div>
                    <div className='Slide'>
                        <img src={web2} className='img' alt='imagen'/>
                    </div>
                    <div className='Slide'>
                        <img src={web3} className='img'alt='imagen' />
                    </div>
                </div>

                <div className='Controles'>
                    <button className='btn Before' onClick={before}>
                        <img src={Before} className='arrow' alt='imagen'/>
                    </button>
                    <button className='btn Next' onClick={next}>
                        <img src={Next} className='arrow' alt='imagen'/>
                    </button>
                </div>
            </div>
        </>
    )
}