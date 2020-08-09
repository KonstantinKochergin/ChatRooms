import React from 'react'
import styles from './BackButton.module.css'
import PropTypes from 'prop-types'

const BackButton = props => {

    return (
        <div className={styles.container} onClick={props.onClick} style={props.style}>
            <img src={require('../../../media/back-arrow.svg')} alt=""/>
        </div>
    )
}

BackButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object
}

export default BackButton