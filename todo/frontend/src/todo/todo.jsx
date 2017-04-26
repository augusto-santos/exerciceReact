import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../Template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3000/api/todos'

class Todo extends Component{

    constructor(props){
        super(props)
        this.state = { description: '', list: []}
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }
    
    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => console.log('Funcionou!'))
    }
    
    render(){
        return(
            <div className="container">
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm handleAdd={this.handleAdd} value={this.state.description} handleChange={this.handleChange}/>
                <TodoList />
            </div>
        )
    }
}

export default Todo