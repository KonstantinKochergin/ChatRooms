import React from 'react'
import styles from './TextArea.module.css'
import PropTypes from 'prop-types'

const TextArea = props => {
    return (
        <textarea className={styles.textArea} 
            style={{...props.style}} 
            rows={props.rows} 
            onChange={props.onChange} 
            value={props.value}></textarea>
    )
}

TextArea.propTypes = {
    style: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default TextArea