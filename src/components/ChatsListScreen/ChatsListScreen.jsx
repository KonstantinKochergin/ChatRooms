import React, {Component} from 'react'
import './ChatsListScreen.css'
import ChatsListComponent from './ChatsListComponent/ChatsListComponent'
import ChangeThemeButton from '../ChangeThemeButton/ChangeThemeButton'
import Button from '../UI/Button/Button'

class ChatsListScreen extends Component {

    render() {
        return(
            <div className="chatsListScreen">
                <div className="head">
                    <div className="leftSide">
                        <ChangeThemeButton />
                    </div>
                    <div className="rightSide">
                        <Button buttonTheme='white' style={{width: '260px', marginRight: '32px'}}>Регистрация</Button>
                        <Button buttonTheme='blue' style={{width: '260px'}}>Вход</Button>
                    </div>
                </div>
                <ChatsListComponent/>
            </div>
        )
    }
}

export default ChatsListScreen