import React from 'react'
import styles from './ChatScreenHead.module.css'
import ChangeThemeButton from '../ChangeThemeButton/ChangeThemeButton'
import BackButton from '../UI/BackButton/BackButton'
import PropTypes from 'prop-types'

const ChatScreenHead = props => {

    return (
        <div className={styles.container}>
            <BackButton onClick={props.onBackButtonClick} style={{marginRight: 22}}/>
            <ChangeThemeButton />
        </div>
    )
}

ChatScreenHead.propTypes = {
    onBackButtonClick: PropTypes.func.isRequired
}

export default ChatScreenHead