import React, {useState, useEffect, useCallback} from 'react'
import styles from './MainMenuHead.module.css'
import ChangeThemeButton from '../ChangeThemeButton/ChangeThemeButton'
import Button from '../UI/Button/Button'
import UserAvatar from './UserAvatar/UserAvatar'
import CreateRoomConstructor from './CreateRoomConstructor/CreateRoomConstructor'

const MainMenuHead = props => {

    const [user, setUser] = useState(true) //объект юзера, до бекенда просто true/false
    const [isCreateRoomPopUpOpened, setIsCreateRoomPopUpOpened] = useState(false)

    const toggleCreateRoomPopUp = () => {
        setIsCreateRoomPopUpOpened(!isCreateRoomPopUpOpened)
    }

    const memoizedToggleCreateRoomPopUp = useCallback(toggleCreateRoomPopUp, [setIsCreateRoomPopUpOpened, isCreateRoomPopUpOpened])

    useEffect(() => {
        const keyDownHandler = event => {
            if (isCreateRoomPopUpOpened && event.key === 'Escape') {
                memoizedToggleCreateRoomPopUp()
            }
        }
        window.addEventListener('keydown', keyDownHandler)
        return (() => {
            window.removeEventListener('keydown', keyDownHandler)
        })
    }, [isCreateRoomPopUpOpened, memoizedToggleCreateRoomPopUp])

    let createRoomPopUpClasses = [styles.createRoomPopUp]
    if (isCreateRoomPopUpOpened) {
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
                        user ?
                            <React.Fragment>
                                <Button buttonTheme='blue' onClick={() => {toggleCreateRoomPopUp()}} style={{width: '260px', marginRight: '32px'}}>Создать комнату</Button>
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
                <CreateRoomConstructor closePopUp={() => {toggleCreateRoomPopUp()}}/>
            </div>
        </React.Fragment>
    )
    
}

export default MainMenuHead