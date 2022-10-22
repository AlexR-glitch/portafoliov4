import logo from '../landing/logoF.png'
import './contacto.scss'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function contacto() {

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
        anchorPlacement: 'top-bottom',
    });

    return (
        <>
            <div className="contacto">
                <div className="contactoCabeza" data-aos="fade-up-left">
                    <h1 className="contactoTitular">Puedes escribirme</h1>
                </div>
                <div className="contenedorContacto"data-aos="fade-up">
                    <img src={logo} alt="logo" />
                    <div className='contenedorFormulario'>
                        <form name='contacto' method='POST' netlify onSubmit='submit' action='/'>

                            <input type='hidden' name='form-name' value='contacto'/>

                            <div>
                                <label>Nombre <br/>
                                    <input type='text' name='name' required className='areaInput input' placeholder='¿Cómo debo llamarte?'/>
                                </label>
                            </div>
                            
                            <div>
                                <label>Correo <br/>
                                    <input type='email' name='email' required className='areaInput input' placeholder='Esta información queda entre tú y yo'/>
                                </label>
                            </div>
                            

                            <div>
                                <label>Comentarios <br/>
                                    <textarea name='message' required className='areaInput text' placeholder='Dime que opinas… '></textarea>
                                </label>
                            </div>

                            <button type='submit'>Enviar</button>
                        </form>
                    </div>
                </div>
            </div> 
        </>
    )
}
