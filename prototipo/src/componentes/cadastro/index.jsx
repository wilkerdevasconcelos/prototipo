import React, { useState } from 'react'
import {Button, TextField} from 'react-md'
 import './index.scss'


const FormCadastro = () => {

    const[teste, setTeste] = useState(false)

    return(

        <div className="User">
            <div className="box-form">
                
               
                <div>
                <TextField
                    floating
                    label='E-mail'
                    type='Text'
                    placeholder='e-mail'
                    id='contato-form-razao-social'
                    // value={''}
                    //onChange= {e => setformCap({...formCap, documento: e })}
                />
                 <TextField
                    floating
                    label='Confirma e-mail'
                    type='text'
                    id='contato-form-razao-social'
                    // value={''}
                    //onChange= {e => setformCap({...formCap, documento: e })}
                />
                
                <TextField
                    floating
                    label='Senha'
                    type='number'
                    id='contato-form-razao-social'
                    // value={''}
                    //onChange= {e => setformCap({...formCap, documento: e })}
                />
                
                <TextField
                    floating
                    label='Confirma a Senha'
                    type='text'
                    id='contato-form-razao-social'
                    // value={''}
                    //onChange= {e => setformCap({...formCap, documento: e })}
                />
                
                <TextField
                    floating
                    label='CPF'
                    type='Number'
                    id='contato-form-razao-social'
                    // value={''}
                    //onChange= {e => setformCap({...formCap, documento: e })}
                />
                <Button flat primary swapTheming >Enviar</Button>

                </div>
                
            </div>


            <div>
            <img className="ban" src={require('../../assets/imagens/banner.png')} />
            </div>
        </div>
    )
}


export default FormCadastro