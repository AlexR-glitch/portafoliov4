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
