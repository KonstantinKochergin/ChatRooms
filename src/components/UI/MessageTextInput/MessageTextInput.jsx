import React from 'react'
import styles from './MessageTextInput.module.css'
import PropTypes from 'prop-types'

const MessageTextInput = props => {

    return (
        <input type="text" 
            placeholder='Введите сообщение...'
            className={styles.textInput} 
            value={props.value} 
            onChange={props.onChange}
            style={props.style}/>
    )
}

MessageTextInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.object
}

export default MessageTextInput