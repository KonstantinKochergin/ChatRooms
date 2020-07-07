import React from 'react'
import styles from './Button.module.css'

const Button = props => {

    let classes = [styles.button]

    if (props.buttonTheme === 'white') {
        classes = [styles.button, styles.whiteButton]
    }
    else if (props.buttonTheme === 'blue') {
        classes = [styles.button, styles.blueButton]
    }

    return (
        <button className={classes.join(' ')} style={props.style} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button