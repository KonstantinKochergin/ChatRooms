import React from 'react'
import styles from './TextArea.module.css'

const TextArea = props => {
    return (
        <textarea className={styles.textArea} style={{...props.style}} rows={props.rows}></textarea>
    )
}

export default TextArea