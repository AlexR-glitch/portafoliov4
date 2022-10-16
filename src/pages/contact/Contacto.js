import { useState } from 'react'
import logo from '../landing/logoF.png'
import './contacto.scss'
import { isEmpty, isEmail } from 'validator'

export default function contacto() {
    const [error, setError] = useState({
        estado: false,
        mensaje: '',
    })
    const [formulario, setFormulario] = useState({
        name: "",
        email: "",
        message: "",
    })

    function capturaDatos(e) {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }

    function validarDatos(e) {
        const { name, email, message } = formulario;
        e.preventDefault();

        if (isEmpty(name) || isEmpty(email) || isEmpty(message)) {
            setError({
                estado: true,
                mensaje: 'Complete todos los campos en el formulario'
            })
        } else {
            if (!isEmail(email)) {
                setError({
                    estado: true,
                    mensaje: 'escribe un correo valido'
                })
            } else {
                setError({
                    estado: false,
                    mensaje: '',
                })
                setFormulario({
                    name: "",
                    email: "",
                    message: "",
                })
            }
        }
    }

    return (
        <>
            <div className="contacto">
                <div className="contactoCabeza">
                    <h1 className="contactoTitular">Puedes escribirme</h1>
                </div>
                <div className="contenedorContacto">
                    <img src={logo} alt="logo" />
                    <div className='contenedorFormulario'>
                        <form name='contacto' method='POST' netlify onSubmit={validarDatos} action='/'>

                            <input type='hidden' name='form-name' value='contacto' />

                            <div>
                                <label>Nombre <br />
                                    <input type='text' name='name' className='areaInput input' placeholder='¿Cómo debo llamarte?' id='Nombre' onChange={capturaDatos} value={formulario.name} />
                                </label>
                            </div>

                            <div>
                                <label>Correo <br />
                                    <input type='email' name='email' className='areaInput input' placeholder='Esta información queda entre tú y yo' id='Correo' onChange={capturaDatos} value={formulario.email} />
                                </label>
                            </div>


                            <div>
                                <label>Comentarios <br />
                                    <textarea name='message' className='areaInput text' placeholder='Dime que opinas…' id='Mensaje' onChange={capturaDatos} value={formulario.message}></textarea>
                                </label>
                            </div>

                            {error.estado &&
                                <div className='error'>
                                    <span>Error:</span>  {error.mensaje}
                                </div>}

                            <button type='submit'>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
