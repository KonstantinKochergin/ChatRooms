import React from 'react'
import styles from './TextInput.module.css'

const TextInput = props => {

    let classes = [styles.textInput]

    if (props.bigText === true) {
        classes.push(styles.bigTextInput)
    }

    return (
        <input type="text" name="" id="" className={classes.join(' ')} style={{...props.style}}/>
    )
}

export default TextInput