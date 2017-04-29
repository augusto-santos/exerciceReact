import React, { Component } from 'react'
import s from './Footer.css'

class Footer extends Component{

    render(){
        return(
            <div className={`footerWrapper`}>
                <div className={`footerContainer`}>
                    <button className={`footerBtn`} onClick={this.props.handleAdd} >Novo</button>
                    <input className={`footerInput`} 
                        placeholder="Adicione uma Tarefa!" value={this.props.description} onChange={this.props.handleChange} />
                </div>
                <div className={`footerContainer`}>
                    <input type="text" placeholder="Procure uma Tarefa!" className="footerInput"
                        value={this.props.search} onChange={this.props.searchField} />
                    <button className="footerBtn" onClick={this.props.handleSearch} >Procurar</button>
                </div>
            </div>
        )
    }
}

export default Footer