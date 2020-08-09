import React from 'react'
import styles from './TextInput.module.css'
import PropTypes from 'prop-types'

const TextInput = props => {

    let classes = [styles.textInput]

    if (props.bigText === true) {
        classes.push(styles.bigTextInput)
    }

    return (
        <input type="text" 
            className={classes.join(' ')} 
            style={{...props.style}} 
            value={props.value}
            onChange={props.onChange}/>
    )
}

TextInput.propTypes = {
    style: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default TextInput