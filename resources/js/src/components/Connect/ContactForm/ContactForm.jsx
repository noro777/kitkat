import React from 'react'
import { ContactMethods, Heading, QRCode } from '..'
import styles from './ContactForm.module.css'




const ContactForm = (props) => {
    const setBlackMode = () => {
        props.changeColorMode(false)
    }

    const setWhiteMode = () => {
        props.changeColorMode(true)
    }

    return (
        <div>
            <div>
                <button onClick={setBlackMode}>Black</button>
                <button onClick={setWhiteMode}>White</button>
            </div>
                {props.colorMode
                    ? <div className={styles.main_light}>
                        <Heading />
                        <ContactMethods />
                        <QRCode />
                    </div>
                    :
                    <div className={styles.main}>
                        <Heading />
                        <ContactMethods />
                        <QRCode />
                    </div>
                }
        </div>
    )

}



export default ContactForm