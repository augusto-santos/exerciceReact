import React, { Component } from 'react'
import s from './Footer.css'

class Footer extends Component{
    render(){
        return(
            <div className={`footerWrapper`}>
                <div className={`footerContainer`}>
                    <button className={`footerBtn`} >Novo</button>
                    <input className={`footerInput`} 
                        placeholder="Adicione uma Tarefa!" />
                </div>
                <div className={`footerContainer`}>
                    <input type="text" placeholder="Procure uma Tarefa!" className="footerInput"/>
                    <button className="footerBtn" >Procurar</button>
                </div>
            </div>
        )
    }
}

export default Footer