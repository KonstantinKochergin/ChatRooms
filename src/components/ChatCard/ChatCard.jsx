import React from 'react'
import styles from './ChatCard.module.css'
import InfoButton from '../UI/InfoButton/InfoButton'

const ChatCard = props => {
    return (
        <div className={styles.chatCard}>
            <div className={styles.top}>
                <div className={styles.infoButtonContainer}>
                    <InfoButton />
                </div>
                <div className={styles.chatTitle}>
                    {props.chatTitle}
                </div>
            </div>
            <div className={styles.membersCount}>
                <div className={styles.icon}>
                    <img src={require('../../media/members-icon.png')} alt=""/>
                </div>
                {props.membersCount}
            </div>
        </div>
    )
}

export default ChatCard