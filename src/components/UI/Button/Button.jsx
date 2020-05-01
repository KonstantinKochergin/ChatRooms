import React from 'react'
import './Button.css'

const Button = props => {

    let classes = ['button']

    if (props.buttonTheme === 'white') {
        classes = ['button', 'whiteButton']
    }
    else if (props.buttonTheme === 'blue') {
        classes = ['button', 'blueButton']
    }

    return (
        <div className={classes.join(' ')} style={props.style}>
            {props.children}
        </div>
    )
}

export default Button