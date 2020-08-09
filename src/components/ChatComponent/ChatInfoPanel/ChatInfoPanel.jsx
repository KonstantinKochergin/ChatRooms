import React from 'react'
import styles from './ChatInfoPanel.module.css'
import Button from '../../UI/Button/Button'
import PropTypes from 'prop-types'

const ChatInfoPanel = props => {

    return (
        <div className={[styles.container, !props.isOpen && styles.close].join(' ')} style={props.style}>
            <Button buttonTheme='whiteBordered' style={{width: 170, fontSize: '1em'}} onClick={props.membersListOnClick}>Список участников</Button>
            <Button buttonTheme='whiteBordered' style={{marginTop: 25, width: 170, fontSize: '1em'}} onClick={props.leaveRoomOnClick}>Выйти из комнаты</Button>
        </div>
    )
}

ChatInfoPanel.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    membersListOnClick: PropTypes.func.isRequired,
    leaveRoomOnClick: PropTypes.func.isRequired,
    style: PropTypes.object
}

export default ChatInfoPanel