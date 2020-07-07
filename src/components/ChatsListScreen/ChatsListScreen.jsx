import React, {Component} from 'react'
import styles from './ChatsListScreen.module.css'
import ChatsListComponent from './ChatsListComponent/ChatsListComponent'
import MainMenuHead from './MainMenuHead/MainMenuHead'

class ChatsListScreen extends Component {

    render() {
        return(
            <div className={styles.chatsListScreen}>
                <MainMenuHead />
                <ChatsListComponent/>
            </div>
        )
    }
}

export default ChatsListScreen