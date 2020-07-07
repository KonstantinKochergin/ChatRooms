import React from 'react'
import styles from './Toggle.module.css'

const Toggle = props => {

    return (
        <label className={styles.switch}>
            <input type="checkbox"/>
            <div className={styles.slider}>
                <div className={styles.checkRound}></div>
            </div>
        </label>
    )
}

export default Toggle