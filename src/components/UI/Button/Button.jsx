import React from 'react'
import styles from './Button.module.css'
import PropTypes from 'prop-types'

const themeClasses = {
    white: {
        classes: [styles.whiteButton]
    },
    blue: {
        classes: [styles.blueButton]
    },
    whiteBordered: {
        classes: [styles.whiteButton, styles.bordered]
    }
}

const Button = props => {

    let classes = [styles.button]

    if (props.buttonTheme === 'white') {
        classes = [styles.button, styles.whiteButton]
    }
    else if (props.buttonTheme === 'blue') {
        classes = [styles.button, styles.blueButton]
    }

    return (
        <button className={[styles.button, ...themeClasses[props.buttonTheme].classes].join(' ')} style={props.style} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

Button.propTypes = {
    buttonTheme: PropTypes.oneOf(['white', 'blue', 'whiteBordered']).isRequired,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object
}

export default Button