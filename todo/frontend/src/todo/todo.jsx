import React, { Component } from 'react'
import PageHeader from '../Template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

class Todo extends Component{
    render(){
        return(
            <div className="container">
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}

export default Todo