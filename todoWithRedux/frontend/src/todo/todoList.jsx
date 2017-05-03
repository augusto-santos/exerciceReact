import React from 'react'
import { connect } from 'react-redux'

import IconButton from '../Template/iconButton'

const TodoList =  props => {

    const renderRows = () => {
        const list = props.list || []
        
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''} >{todo.description}</td>
                <td>
                    <IconButton style="success" icon="check" onClick={() => props.handleMarkAsDone(todo)} hide={todo.done} />
                    <IconButton style="warning" icon="undo" onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done} />
                    <IconButton style="danger" icon="trash-o" onClick={() => props.handleRemove(todo)} hide={!todo.done} />
                </td>
            </tr>
        )) 
    }

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableAction" >Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({
    list: state.todo.list
})

export default connect(mapStateToProps)(TodoList)