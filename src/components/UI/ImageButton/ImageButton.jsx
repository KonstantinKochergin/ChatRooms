import React from 'react'
import styles from './ImageButton.module.css'
import PropTypes from 'prop-types'

const icons = {
    cross: {
        icon: require('../../../media/cross.svg')
    },
    sendMessage: {
        icon: require('../../../media/send-message.svg')
    }
}

const ImageButton = props => {

    return(
        <div className={styles.container} style={props.style} onClick={props.onClick}>
            <img src={icons[props.type].icon} alt=""/>
        </div>
    )
}

ImageButton.propTypes = {
    type: PropTypes.oneOf(['cross, sendMessage']).isRequired,
    onClick: PropTypes.func,
    outerClasses: PropTypes.arrayOf(PropTypes.string),
    style: PropTypes.object
}

export default ImageButton