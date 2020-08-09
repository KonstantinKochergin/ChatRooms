import React, {useState, useEffect} from 'react'
import styles from './MessageItem.module.css'
import PropTypes from 'prop-types'

const MessageItem = props => {

    const [messageOwnerBool, setMessageOwnerBool] = useState(true) //true - me; false - other
    
    useEffect(() => {
        const myID = 1
        if (props.owner.id === myID) {
            setMessageOwnerBool(true)
        }
        else {
            setMessageOwnerBool(false)
        }
    }, [props.owner])

    return (
        <div className={[styles.container, messageOwnerBool ? styles.myMessage : styles.otherMessage].join(' ')}>
            <div className={styles.ownerName}>{props.owner.userName}</div>
            <div className={styles.text}>{props.text}</div>
        </div>
    )
}

MessageItem.propTypes = {
    text: PropTypes.string.isRequired,
    owner: PropTypes.shape({
        id: PropTypes.number,
        userName: PropTypes.string,
    })
}

export default MessageItem