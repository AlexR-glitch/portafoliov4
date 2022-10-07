import logo from '../landing/logoF.png'

import './contacto.scss'

export default function contacto() {
    return (
        <>
            <div className="contacto">
                <div className="contactoCabeza">
                    <h1 className="contactoTitular">Puedes escribirme</h1>
                </div>
                <div className="contenedorContacto">
                    <img src={logo} alt="logo" />
                    <div className='contenedorFormulario'>
                        <form name='contacto v1' method='post' netlify onSubmit='submit'>

                            <input type='hidden' name='form-name' value='contacto v1' />

                            <div>
                                <label>Nombre <br/>
                                    <input type='text' name='nombre' />
                                </label>
                            </div>
                            
                            <div>
                                <label>Correo <br/>
                                    <input type='email' name='email' />
                                </label>
                            </div>
                            

                            <div>
                                <label>Comentarios <br/>
                                    <textarea name='comentarios'></textarea>
                                </label>
                            </div>

                            <button type='submit'> Enviar</button>
                        </form>
                    </div>
                </div>
                <div className="RRSS">
                    <a href="https://www.facebook.com/rene.alexander.rivera.hernandz" className="RRSSlinks">
                        <i class="fa-brands fa-facebook-f" />
                    </a>
                    <a href="https://www.instagram.com/alexxander_rivera/" className="RRSSlinks">
                        <i class="fa-brands fa-instagram" />
                    </a>
                </div>
            </div> 
        </>
    )
}