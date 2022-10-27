import './error.scss';
import EngraneG from './img/engraneGrande.png';
import EngraneC from './img/engraneChico.png';

export default function Error() {
    return(
        <div className='wea'>
            <div className='contenedor404'>
                <div className='titular404'>
                    <h1 className='error'>Error 404</h1>
                    <i class="fa-solid fa-xmark close"></i>
                </div>
                <div className='engranaje'>
                    <img src={EngraneG} className='imgRef1' alt="" />
                    <img src={EngraneC} className='imgRef2' alt="" />
                </div>
            </div>
        </div>
    )
}