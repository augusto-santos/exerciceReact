import React, {Component} from 'react'

export default class ComponentClass extends Component{

    constructor(props){
        super(props)
        this.state = { value : this.props.initialValue}
    }

    sum(delta){
        this.setState({ value: this.state.value + delta})
    }

    render(){
        return(
            <div>
                <h3>{this.props.label}</h3>
                <h3>{this.state.value}</h3>
                <button onClick={() => this.sum(-1) } >Dec</button>
                <button onClick={() => this.sum(1) }>Inc</button>
            </div>
        )
    }
}