import React, { Component } from 'react'
import s from './Header.css'

class Header extends Component{
    render(){
        return(
            <header className={`wrapperHeader`} >
                <div className={`containerHeader`} >
                    <nav className={`navHeader`}>
                        <ul className={`ulHeader`} >
                            <li className={`liHeader`} ><a className={`linkHeader`} href="#">Tarefas</a></li>
                            <li className={`liHeader`} ><a className={`linkHeader`} href="#">Sobre</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header