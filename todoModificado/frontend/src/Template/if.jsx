import React from 'react'

export default props => {
    if(props.teste) {
        return props.children
    }else{
        return false
    }
}