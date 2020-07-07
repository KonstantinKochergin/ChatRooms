import React, {Component} from 'react'
import styles from './CreateRoomConstructor.module.css'
import TextInput from '../../../UI/TextInput/TextInput'
import TextArea from '../../../UI/TextArea/TextArea'
import Toggle from '../../../UI/Toggle/Toggle'
import Button from '../../../UI/Button/Button'

class CreateRoomConstructor extends Component {

    render() {
        return (
            <div className={styles.createRoomConstructorContainer}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="cross" xmlns="http://www.w3.org/2000/svg" onClick={this.props.closePopUp}>
                    <path d="M8.31712 6.65038C7.98556 6.65047 7.66156 6.74943 7.38655 6.93462C7.11153 7.11981 6.89799 
                    7.38281 6.77323 7.69C6.64847 7.99719 6.61815 8.3346 6.68616 8.65911C6.75417 8.98361 6.91741 9.28046 
                    7.15501 9.51171L17.6433 20L7.15501 30.4883C6.99505 30.6418 6.86735 30.8258 6.77937 31.0293C6.6914 
                    31.2329 6.64492 31.4519 6.64266 31.6737C6.64041 31.8954 6.68242 32.1154 6.76623 32.3207C6.85005 
                    32.526 6.97398 32.7125 7.13078 32.8693C7.28758 33.0261 7.47409 33.15 7.67938 33.2338C7.88468 
                    33.3176 8.10463 33.3596 8.32637 33.3574C8.5481 33.3551 8.76716 33.3087 8.97071 33.2207C9.17425 
                    33.1327 9.3582 33.005 9.51178 32.845L20.0001 22.3568L30.4883 32.845C30.6419 33.005 30.8259 
                    33.1327 31.0294 33.2207C31.233 33.3087 31.452 33.3551 31.6737 33.3574C31.8955 33.3597 32.1154 
                    33.3176 32.3207 33.2338C32.526 33.15 32.7125 33.0261 32.8693 32.8693C33.0261 32.7125 33.1501 32.526 
                    33.2339 32.3207C33.3177 32.1154 33.3597 31.8954 33.3575 31.6737C33.3552 31.452 33.3087 31.2329 33.2207 
                    31.0293C33.1328 30.8258 33.0051 30.6418 32.8451 30.4883L22.3568 20L32.8451 9.51171C33.0859 9.27761 33.2504 
                    8.97621 33.317 8.64701C33.3836 8.31781 33.3492 7.97617 33.2183 7.66686C33.0874 7.35755 32.8661 7.095 32.5835 
                    6.91362C32.3008 6.73223 31.9699 6.64048 31.6342 6.65038C31.2012 6.66328 30.7902 6.84425 30.4883 7.15494L20.0001 
                    17.6432L9.51178 7.15494C9.35646 6.99528 9.17072 6.86837 8.96553 
                    6.78171C8.76034 6.69505 8.53986 6.6504 8.31712 6.65038Z" fill="black"/>
                </svg>
                <div className={styles.createRoomContructor}>
                    <div className={[styles.row1, styles.row, styles.title].join(' ')}>
                        <div className={styles.label}>Название комнаты</div>
                        <TextInput bigText={true}/>
                    </div>
                    <div className={[styles.row2, styles.row, styles.description].join(' ')}>
                        <div className={styles.label}>Описание</div>
                        <TextArea rows={10}/>
                    </div>
                    <div className={styles.settings}>
                        <div className={[styles.privateSettings, styles.row, styles.settingRow].join(' ')}>
                            <div className={styles.label}>Приватная комната</div>
                            <Toggle />
                        </div>
                        <div className={[styles.ageCheck, styles.row, styles.settingRow].join(' ')}>
                            <div className={styles.label}>18+</div>
                            <Toggle />
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <Button buttonTheme='blue' style={{width: '260px'}}>Создать комнату</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateRoomConstructor