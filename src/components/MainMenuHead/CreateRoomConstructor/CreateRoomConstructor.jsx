import React,{useState} from 'react'
import styles from './CreateRoomConstructor.module.css'
import TextInput from '../../UI/TextInput/TextInput'
import TextArea from '../../UI/TextArea/TextArea'
import Toggle from '../../UI/Toggle/Toggle'
import Button from '../../UI/Button/Button'
import ImageButton from '../../UI/ImageButton/ImageButton'

const CreateRoomConstructor = props => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const onTitleChange = event => {
        setTitle(event.target.value)
    }

    const onDescriptionChange = event => {
        setDescription(event.target.value)
    }

    return (
        <div className={styles.createRoomConstructorContainer}>
            <ImageButton type='cross' onClick={props.closePopUp} style={{left: '100%'}}/>
            <div className={styles.createRoomContructor}>
                <div className={[styles.row1, styles.row, styles.title].join(' ')}>
                    <div className={[styles.label, styles.inputLabel].join(' ')}>Название комнаты</div>
                    <TextInput bigText={true} onChange={onTitleChange} value={title}/>
                </div>
                <div className={[styles.row2, styles.row, styles.description].join(' ')}>
                    <div className={[styles.label, styles.inputLabel].join(' ')}>Описание</div>
                    <TextArea rows={10} onChange={onDescriptionChange} value={description}/>
                </div>
                <div className={styles.settings}>
                    <div className={[styles.privateSettings, styles.row, styles.settingRow].join(' ')}>
                        <div className={styles.label}>Приватная комната</div>
                        <Toggle />
                    </div>
                    <div className={[styles.ageCheck, styles.row, styles.settingRow].join(' ')}>
                        <div className={styles.label}>18+</div>
                        <Toggle />
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Button buttonTheme='blue' style={{width: '260px'}}>Создать комнату</Button>
                </div>
            </div>
        </div>
    )
}

export default CreateRoomConstructor