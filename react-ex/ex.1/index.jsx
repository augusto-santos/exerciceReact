import React from 'react'
import ReactDOM from 'react-dom'
import Family from './Components/Family'
import Menbers from './Components/Menbers'

ReactDOM.render(
    <Family lastName="Santos" >
        <Menbers name="Argus" />
        <Menbers name="Thais" />
    </Family>,
document.getElementById('root'))