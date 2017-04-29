import React from 'react'
import Grid from '../Template/grid'
import IconButton from '../Template/iconButton'

export default props => {

    const keyHandle = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }if(e.key === 'Escape'){
            props.handleClear()
        }
    }

    return (
        <div role='from' className='todoForm'>
            <Grid cols="12 9 10">
                <input id="description" className="form-control" placeholder='Adicione uma tarefa'
                value={props.description} onChange={props.handleChange} onKeyUp={keyHandle} />
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus' onClick={props.handleAdd} />
                <IconButton style="info" icon="search" onClick={props.handleSearch} />
                <IconButton style="default" icon="close" onClick={props.handleClear} />
            </Grid>
        </div>
        )
}