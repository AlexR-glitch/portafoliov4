import './portafolio.scss';
import { Link } from 'react-router-dom';
export default function Portafolio() {
    return (
        <>
            <div className="portafolio">
                <div className='titulo'>
                    <h1 className='cabezera'>Portafolio</h1>
                    <p className='contexto'>En esta seccion podras encontrar las areas en la que podras encontra algunos de mis trabajos academicos.</p>
                </div>
                <div className="portafolioContainer">
                    <div className='items'>
                        <Link to='/fotografia' className='enlace'>
                            <div className='img1'>
                                <div className='PortafolioItem'>
                                    <p className='section'>Fotografía</p>
                                </div>
                            </div>
                        </Link>

                        <Link to='/diseno' className='enlace'>
                            <div className='img2'>
                                <div className='PortafolioItem'>
                                    <p className='section'>Diseño</p>
                                </div>
                            </div>
                        </Link>

                        <Link to='/web' className='enlace'>
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