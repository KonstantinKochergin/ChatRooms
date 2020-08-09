import React from 'react'
import styles from './MessagesBox.module.css'
import MessageItem from '../MessageItem/MessageItem'
import PropTypes from 'prop-types'

const MessagesBox = props => {

    return (
        <div className={styles.container} style={props.style}>
            {props.messages.map(message => {
                return <MessageItem key={message.id} 
                            owner={message.owner}
                            text={message.text}
                            id={message.id}/>
            })}
        </div>
    )
}

MessageItem.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.id,
        owner: {
            id: PropTypes.number,
            userName: PropTypes.string
        },
        text: PropTypes.string
    })),
    style: PropTypes.object
}

export default MessagesBox