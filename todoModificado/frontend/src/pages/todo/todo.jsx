import React, { Component } from 'react'
import axios from 'axios'

import TodoList from './todoList'
import Footer from '../../components/Footer'
import Box from '../../components/Box'

const URL = 'http://localhost:3000/api/todos'

class Todo extends Component{

    constructor(props){
        super(props)
        this.state = { description: '', search: '', list: []}

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.search = this.search.bind(this)

        this.refresh()
    }

    refresh( description: '' ){
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    search(e){
        this.setState({...this.state, search: e.target.value})
    }
    
    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(resp => this.refresh(this.state.description))
    }

    handleClear(){
        this.refresh()
    }
    
    render(){
        return(
            <Box title="Tarefas" subtitle="Cadastro & Pesquisa" >
                
                <TodoList 
                    list={this.state.list} 
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} />
                <Footer value={this.state.description} 
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} search={this.state.search} 
                    searchField={this.search} 
                    handleSearch={this.handleSearch} />
            </Box>
        )
    }
}

export default Todo