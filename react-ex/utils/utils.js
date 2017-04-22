import React from 'react'

function childWihProps(children, props){
    React.Children.map(prop.Children,
            child => React.cloneElement(child, {...props}))
}

export {childWihProps}