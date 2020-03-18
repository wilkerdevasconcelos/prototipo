import React, { useState } from 'react'
import {Button} from 'react-md'
import Cadastro from '../login'
import FormCadastro from '../cadastro'
// import Login from '../login'
import './index.scss'


const Home = () => {


    const[cadastro, setCadastro]=useState(false)
    const[form, setForm]=useState(false)



    return(
        <div>
        { !form &&    <div>
         { !cadastro &&   <div className="box-nav">
               <div>
                    <p>Logo</p>
                </div>
                <div>
                <Button onClick={() => setForm(true) } raised secondary swapTheming id="Cadastre">Cadastre-se</Button> 
                <Button onClick={() => setCadastro(!cadastro) } raised secondary swapTheming id="login">Login</Button> 

                
            </div>               
            </div>}
            { !cadastro &&  <div>   <img className="bn" src={require('../../assets/imagens/banner.png')} />
            </div>}</div>}
            <div> { cadastro && <Cadastro/>}</div>
           { form && <div><FormCadastro/></div>}
           
        </div>
    )
}


export default Home