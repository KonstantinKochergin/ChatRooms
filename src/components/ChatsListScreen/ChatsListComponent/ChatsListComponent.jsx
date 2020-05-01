import React, {Component} from 'react'
import './ChatsListComponent.css'
import ChatCard from '../ChatCard/ChatCard'

class ChatsListComponent extends Component {
    
    render() {
        return (
            <div className="chatsListComponent">
                <ChatCard chatTitle='Мультики, которые мы любим' membersCount={14}/>
            </div>
        )
    }
}

export default ChatsListComponent