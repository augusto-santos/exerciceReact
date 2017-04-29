import React from 'react'
import IconButton from '../../Template/iconButton'
import Item from '../../components/Item'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        
        return list.map(todo => (
            <Item key={todo._id} 
                title={todo.description} 
                data={todo.createdAt.slice(0,10)}
                done={todo.done} >
                <IconButton style="success" icon="check" onClick={() => props.handleMarkAsDone(todo)} hide={todo.done} />
                <IconButton style="warning" icon="undo" onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done} />
                <IconButton style="danger" icon="trash-o" onClick={() => props.handleRemove(todo)} hide={!todo.done} />
            </Item>
        )) 
    }

    return(
        <div>{renderRows()}</div>
    )
}