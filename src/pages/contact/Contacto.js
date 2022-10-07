import logo from '../landing/logoF.png'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
                        <Form data-neftlify='true' className='enrutador' method='POST'>
                            <Form.Group className='mb-3 CF' controlId="formBasicEmail">
                                <Form.Control type='email' placeholder='Correo' />
                                <Form.Text className='text-muted'>
                                    No compartire tu correo con nadie.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className='mb-3 CF' controlId="formBasicName">
                                <Form.Control type='Text' placeholder='Nombre' />
                                <Form.Text className='text-muted'>
                                    ¿Como debo llamarte?
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='text-light'>Escribe tu mensaje aqui</Form.Label>
                                <Form.Control as="textarea" rows={7} />
                            </Form.Group>
                            <Button variant="success" type="submit" className='w-auto px-3 py-2 mx-auto'>
                                Enviar
                            </Button>
                        </Form>
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