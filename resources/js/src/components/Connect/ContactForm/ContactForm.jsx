import React from 'react'
import { ContactMethods, Heading, QRCode } from '..'
import styles from './ContactForm.module.css'




const ContactForm = (props) => {


    return (
        <div>

                {props.colorMode === "true"
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