import React from 'react'
import styles from './ChangeThemeButton.module.css'
import PropTypes from 'prop-types'

const ChangeThemeButton = props => {
    return (
        <div className={styles.changeThemeButton} style={props.style}>
            <img src={require('../../media/night-icon.svg')} alt=""/>
        </div>
    )
}

ChangeThemeButton.propTypes = {
    style: PropTypes.object,
    onClick: PropTypes.func.isRequired
}

export default ChangeThemeButton