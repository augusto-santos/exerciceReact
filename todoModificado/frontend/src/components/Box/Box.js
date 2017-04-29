import React, { Component } from 'react'
import s from './Box.css'

class Box extends Component{
    render(){
        return(
            <div className={`wrapperBox`} >
                <div className={`containerBox`} >
                    <div className={`cardBox`} >
                        <div className={`titleBox`} >
                            <h3>{this.props.title} <small>{this.props.subtitle}</small></h3>
                        </div>
                        <hr className={`hrBox`} />
                        <div className={`contentBox`} >
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Box