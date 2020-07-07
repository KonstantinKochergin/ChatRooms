import React from 'react'
import styles from './InfoButton.module.css'

const InfoButton = props => {
    return (
        <div className={styles.infoButton} onClick={props.onClick}>
            <svg width="7" height="24" viewBox="0 0 7 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.69337 0.794998H6.85837V3.945H2.69337V0.794998ZM3.00837 10.315H0.488366L0.838366 
                7.41H6.82337V24H3.00837V10.315Z" fill="#3A8FFE"/>
            </svg>
        </div>
    )
}

export default InfoButton