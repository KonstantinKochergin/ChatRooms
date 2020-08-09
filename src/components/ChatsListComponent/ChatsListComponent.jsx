import React, {Component} from 'react'
import styles from './ChatsListComponent.module.css'
import ChatCard from '../ChatCard/ChatCard'

class ChatsListComponent extends Component {

    constructor(props) {
        super(props)
        this.activeChats = [
            {
                id: 1,
                title: 'Мультики',
                members: 14
            },
            {
                id: 2,
                title: 'Мультики',
                members: 14
            },
            {
                id: 3,
                title: 'Мультики',
                members: 14
            },
            {
                id: 4,
                title: 'Мультики',
                members: 14
            },
            {
                id: 5,
                title: 'Мультики',
                members: 14
            },
            {
                id: 6,
                title: 'Мультики',
                members: 14
            },
            {
                id: 7,
                title: 'Игры',
                members: 3
            },
        ]
    }
    
    render() {
        return (
            <div className={styles.chatsListComponent}>
                {
                    this.activeChats.map(chat => {
                        return <ChatCard key={chat.id} chatTitle={chat.title} membersCount={chat.members}/>
                    })
                }
            </div>
        )
    }
}

export default ChatsListComponent