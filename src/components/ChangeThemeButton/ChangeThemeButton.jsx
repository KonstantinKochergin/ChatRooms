import React from 'react'
import styles from './ChangeThemeButton.module.css'

const ChangeThemeButton = props => {
    return (
        <div className={styles.changeThemeButton}>
            <img src={require('../../media/night-icon.svg')} alt=""/>
        </div>
    )
}

export default ChangeThemeButton