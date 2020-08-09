import React from 'react'
import styles from './UserAvatar.module.css'

const UserAvatar = props => {
    return (
        <div className={styles.userAvatar}>
            <img src={require('../../../media/empty-avatar.svg')} alt=""/>
        </div>
    )
}

export default UserAvatar