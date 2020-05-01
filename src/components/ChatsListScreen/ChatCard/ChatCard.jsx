import React from 'react'
import './ChatCard.css'
import InfoButton from '../../InfoButton/InfoButton'

const ChatCard = props => {
    return (
        <div className="chatCard">
            <div className="top">
                <div className="infoButtonContainer">
                    <InfoButton />
                </div>
                <div className="chatTitle">
                    {props.chatTitle}
                </div>
            </div>
            <div className="membersCount">
                <div className="icon">
                    <img src={require('../../../media/members-icon.png')} alt=""/>
                </div>
                {props.membersCount}
            </div>
        </div>
    )
}

export default ChatCard