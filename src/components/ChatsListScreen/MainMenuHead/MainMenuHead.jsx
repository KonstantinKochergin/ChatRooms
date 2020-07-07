import React, {Component} from 'react'
import styles from './MainMenuHead.module.css'
import ChangeThemeButton from '../../ChangeThemeButton/ChangeThemeButton'
import Button from '../../UI/Button/Button'
import UserAvatar from './UserAvatar/UserAvatar'
import CreateRoomConstructor from './CreateRoomConstructor/CreateRoomConstructor'

class MainMenuHead extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: true,     //объект юзера, до бекенда просто true/false
            isCreateRoomPopUpOpened: false
        }
    }

    async openCreateRoomPopUp() {
        this.setState({
            isCreateRoomPopUpOpened: !this.state.isCreateRoomPopUpOpened
        })
    }

    render() {

        let createRoomPopUpClasses = [styles.createRoomPopUp]
        if (this.state.isCreateRoomPopUpOpened) {
            createRoomPopUpClasses.push(styles.popUpOpened)
        }
        else {
            createRoomPopUpClasses.push(styles.popUpClosed)
        }

        return (
            <React.Fragment>
                <div className={styles.mainMenuHead}>
                    <div className={styles.leftSide}>
                        <ChangeThemeButton />
                    </div>
                    <div className={styles.rightSide}>
                        {
                            this.state.user ?
                                <React.Fragment>
                                    <Button buttonTheme='blue' onClick={() => {this.openCreateRoomPopUp()}} style={{width: '260px', marginRight: '32px'}}>Создать комнату</Button>
                                    <UserAvatar />
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <Button buttonTheme='white' style={{width: '260px', marginRight: '32px'}}>Регистрация</Button>
                                    <Button buttonTheme='blue' style={{width: '260px'}}>Вход</Button>
                                </React.Fragment>
                        }
                    </div>
                </div>
                <div className={createRoomPopUpClasses.join(' ')}>
                    <CreateRoomConstructor closePopUp={() => { this.openCreateRoomPopUp()}}/>
                </div>
            </React.Fragment>
        )
    }
}

export default MainMenuHead