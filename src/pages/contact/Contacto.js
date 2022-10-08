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
                        <form name='contacto' method='POST' netlify onSubmit='submit' action='/'>

                            <input type='hidden' name='form-name' value='contacto'/>

                            <div>
                                <label>Nombre <br/>
                                    <input type='text' name='name' required/>
                                </label>
                            </div>
                            
                            <div>
                                <label>Correo <br/>
                                    <input type='email' name='email' required/>
                                </label>
                            </div>
                            

                            <div>
                                <label>Comentarios <br/>
                                    <textarea name='message' required ></textarea>
                                </label>
                            </div>

                            <button type='submit'>Enviar</button>
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
