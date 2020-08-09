import React, {Component} from 'react'
import styles from './ChatScreen.module.css'
import ChatComponent from '../../components/ChatComponent/ChatComponent'
import ChatScreenHead from '../../components/ChatScreenHead/ChatScreenHead'

const ChatScreen = props => {

    const onBackButtonClick = () => {

    }

    return(
        <div className={styles.chatScreen}>
            <ChatScreenHead onBackButtonClick={onBackButtonClick}/>
            <div className={styles.chatContainer}>
                <ChatComponent />
            </div>
        </div>
    )
}

export default ChatScreen