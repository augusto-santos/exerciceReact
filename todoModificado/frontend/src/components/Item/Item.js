import React, { Component } from 'react'
import s from './Item.css'

class Item extends Component{
    render(){
        return(
            <div className={this.props.done ? `wrapperItem Done` : `wrapperItem`} >
                <div className={`titleItem`} >
                    <h3 className={`textItem`} >{this.props.title}</h3>
                </div>
                <div className={`dateItem`} >
                    <h3 className={`textItem`} >{this.props.data}</h3>
                </div>
                <div className={`actionItem`} >
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Item