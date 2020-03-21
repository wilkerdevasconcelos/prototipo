import React, { useState, useEffect } from 'react'
import { Button, TextField } from 'react-md'
import './index.scss'
import { useHistory } from 'react-router-dom'


const Login = () => {

    const history = useHistory()

    const user = { email: 'teste@gmail.com', password: '1234' }

    const [data, setData] = useState({ email: '', password: '' })

    const auth = () => {
        if (data.email === user.email && data.password === user.password) {
            localStorage.setItem('user', JSON.stringify(data))
            history.push('/dashboard')
        } else {
            alert('Email ou senha invalidos')
        }
    }

    useEffect(() => {
        !!localStorage.getItem('user') && history.push('/dashboard')
    }, [])

    return (

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
                        value={data.email}
                        onChange={e => setData({ ...data, email: e })}
                    />
                    <TextField
                        floating
                        label='Senha'
                        type='Number'
                        id='contato-form-razao-social'
                        value={data.password}
                        onChange={e => setData({ ...data, password: e })}
                    />
                    <a href="#" id="recuperar">Esqueceu sua Senha</a>
                    <Button flat primary onClick={auth} swapTheming id="open">Entrar usando email e senha</Button>
                    <p>Não possui uma conta?<a href="#" id="cad">Cadastre-se aqui</a></p>
                </div>

            </div>


            <div>
                <img className="ban" src={require('../../assets/imagens/banner.png')} />
            </div>
        </div>
    )
}


export default Login