import React, {Component} from 'react'
import styles from './ChatComponent.module.css'
import InfoButton from '../../UI/InfoButton/InfoButton'

class ChatComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: props.title
        }
    }

    render() {
        return (
            <div className={styles.chatComponent}>
                <div className={[styles.head, styles.row].join(' ')}>
                    <div className={styles.title}>{this.state.title}</div>
                    <InfoButton/>
                </div>
            </div>
        )
    }
}

export default ChatComponent