import React, {useState} from 'react'
import styles from './ChatComponent.module.css'
import InfoButton from '../UI/InfoButton/InfoButton'
import MessagesBox from './MessagesBox/MessagesBox'
import MessageInput from './MessageInput/MessageInput'
import ChatInfoPanel from './ChatInfoPanel/ChatInfoPanel'

const ChatComponent = props => {

    const [title, setTitle] = useState('Мультики')
    const [isPanelOpen, setPanelOpening] = useState(false)

    const messages = [
        {
            id: 1,
            owner: {
                id: 1,
                userName: 'kosty'
            },
            text: 'Всем привет!'
        },
        {
            id: 2,
            owner: {
                id: 2,
                userName: 'creppy'
            },
            text: 'Привет'
        },
        {
            id: 3,
            owner: {
                id: 1,
                userName: 'kosty'
            },
            text: 'Как дела?'
        },
        {
            id: 4,
            owner: {
                id: 2,
                userName: 'creepy'
            },
            text: 'Хорошо'
        },
        {
            id: 1,
            owner: {
                id: 1,
                userName: 'kosty'
            },
            text: `Всем привет! Всем привет! Всем привет! Всем привет! 
                   Всем привет! Всем привет! Всем привет! Всем привет! 
                   Всем привет! Всем привет! Всем привет! Всем привет!`
        },
        {
            id: 2,
            owner: {
                id: 2,
                userName: 'creppy'
            },
            text: 'Привет'
        },
        {
            id: 3,
            owner: {
                id: 1,
                userName: 'kosty'
            },
            text: 'Как дела?'
        },
        {
            id: 4,
            owner: {
                id: 2,
                userName: 'creepy'
            },
            text: 'Хорошо'
        },
        {
            id: 1,
            owner: {
                id: 1,
                userName: 'kosty'
            },
            text: 'Всем привет!'
        },
        {
            id: 2,
            owner: {
                id: 2,
                userName: 'creppy'
            },
            text: 'Привет'
        },
        {
            id: 3,
            owner: {
                id: 1,
                userName: 'kosty'
            },
            text: 'Как дела?'
        },
        {
            id: 4,
            owner: {
                id: 2,
                userName: 'creepy'
            },
            text: 'Хорошо'
        },
        {
            id: 1,
            owner: {
                id: 1,
                userName: 'kosty'
            },
            text: 'Всем привет!'
        },
        {
            id: 2,
            owner: {
                id: 2,
                userName: 'creppy'
            },
            text: 'Привет'
        },
        {
            id: 3,
            owner: {
                id: 1,
                userName: 'kosty'
            },
            text: 'Как дела?'
        },
        {
            id: 4,
            owner: {
                id: 2,
                userName: 'creepy'
            },
            text: 'Хорошо'
        },
    ]

    const infoButtonOnClick = () => {
        setPanelOpening(!isPanelOpen)
    }

    const membersListOnClick = () => {
        console.log('показать список')
    }

    const leaveRoomOnClick = () => {
        console.log('выйти из чата')
    }
    
    return (
        <div className={styles.chatComponent}>
            <div className={[styles.head, styles.row].join(' ')}>
                <div className={styles.title}>{title}</div>
                <InfoButton onClick={infoButtonOnClick}/>
            </div>
            <MessagesBox messages={messages} style={{marginTop: 10}}/>
            <MessageInput style={{marginTop: 10}}/>
            <ChatInfoPanel style={{top: 84, right: 32}}
                isOpen={isPanelOpen} 
                membersListOnClick={membersListOnClick} 
                leaveRoomOnClick={leaveRoomOnClick}/>
        </div>
    )
}

export default ChatComponent