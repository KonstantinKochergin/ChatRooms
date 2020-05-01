import React from 'react'
import './ChangeThemeButton.css'

const ChangeThemeButton = props => {
    return (
        <div className="changeThemeButton">
            <img src={require('../../media/night-icon.png')} alt=""/>
        </div>
    )
}

export default ChangeThemeButton