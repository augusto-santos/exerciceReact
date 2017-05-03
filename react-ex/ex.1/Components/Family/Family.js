import React from 'react'

export default (props) => (
    <div>
        <h3>Familias:</h3>
        { React.Children.map(prop.Children,
            child => React.cloneElement(child, {...props}))}
    </div>
)