import React, { useState } from 'react'
import {Button, TextField} from 'react-md'
 import './index.scss'


const Cadastro = () => {

    const[teste, setTeste] = useState(false)

    return(

        <div className="User">
            <div className="box-form">
                <div className="txt">
                <h1>Bem Vindo a Union Digital</h1>
                <h3>Entre para continuar</h3>
                </div>
                <div>
                <TextField
                    floating
                    label='Login'
                    type='Text'
                    id='contato-form-razao-social'
                    // value={''}
                    //onChange= {e => setformCap({...formCap, documento: e })}
                />
                 <TextField
                    floating
                    label='Senha'
                    type='Number'
                    id='contato-form-razao-social'
                    // value={''}
                    //onChange= {e => setformCap({...formCap, documento: e })}
                />
                <a href="#" id="recuperar">Esqueceu sua Senha</a>
                <Button flat primary swapTheming id="open">Entrar usando email e senha</Button>
                <p>Não possui uma conta?<a href="#" id="cad">Cadastre-se aqui</a></p>
                </div>
                
            </div>


            <div>
            <img className="ban" src={require('../../assets/imagens/banner.png')} />
            </div>
        </div>
    )
}


export default Cadastro