import React from 'react'
import styles from './MessageInput.module.css'
import MessageTextInput from '../../UI/MessageTextInput/MessageTextInput'
import ImageButton from '../../UI/ImageButton/ImageButton'
import PropTypes from 'prop-types'

const MessageInput = props => {

    return (
        <div className={styles.container} style={props.style}>
            <MessageTextInput value={props.messageInputValue} onChange={props.onChangeMessageText} style={{marginRight: 10}}/>
            <ImageButton onClick={props.sendMessageOnClick} type='sendMessage'/>
        </div>
    )
}

MessageInput.propTypes = {
    messageInputValue: PropTypes.string.isRequired,
    onChangeMessageText: PropTypes.func.isRequired,
    sendMessageOnClick: PropTypes.func.isRequired,
    style: PropTypes.object
}

export default MessageInput