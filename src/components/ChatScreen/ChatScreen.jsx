import React, {Component} from 'react'
import styles from './ChatScreen.module.css'
import MainMenuHead from '../ChatsListScreen/MainMenuHead/MainMenuHead'
import ChatComponent from './ChatComponent/ChatComponent'

class ChatScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            title: 'Мультики'
        }
    }

    render() {
        return(
            <div className={styles.chatScreen}>
                <MainMenuHead/>
                <div className={styles.chatContainer}>
                    <ChatComponent title={this.state.title}/>
                </div>
            </div>
        )
    }
}

export default ChatScreen