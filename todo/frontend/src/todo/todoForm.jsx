import React from 'react'
import Grid from '../Template/grid'
import IconButton from '../Template/iconButton'

export default props => (
    <div role='from' className='todoForm'>
        <Grid cols="12 9 10">
            <input id="description" className="form-control" placeholder='Adicione uma tarefa'
            value={props.description} onChange={props.handleChange} />
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus' onClick={props.handleAdd}/>
        </Grid>
    </div>
)