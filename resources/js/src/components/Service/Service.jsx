import styles from './Service.module.css'




const Service = (props) => {

    const setLightMode = () => {
        props.setColorModeAC(true)
    }

    const setBlackMode = () => {
        props.setColorModeAC(false)
    }



    const serviceElements = props.services.map(content => (
        <div className={styles.box} key={props.serviceId}>
            <div className={styles.service_name}>
                <span>{content.text}</span>
            </div>
            <div className={styles.service_image}>
                <img src={content.img} className={styles.service_image_width} />
            </div>
            <div className={styles.service_button}>
                <a><button className={styles.service_button_size}><div className={styles.service_button_text}>Պատվիրել</div></button></a>
            </div>
        </div>
    ))

    const otherServices = props.otherServices.map(content => (
        <div className={styles.box}>
            <div className={styles.service_name}>
                <span>{content.text}</span>
            </div>
            <div className={styles.service_image}>
                <img src={content.img} className={styles.service_image_width} />
            </div>
            <div className={styles.service_button}>
                <a><button className={styles.service_button_size}><div className={styles.service_button_text}>Պատվիրել</div></button></a>
            </div>
        </div>
    ))

    const serviceElementsLight = props.services.map(content => (
        <div className={styles.box} key={props.serviceId}>
            <div className={styles.service_name_black}>
                <span>{content.text}</span>
            </div>
            <div className={styles.service_image}>
                <img src={content.img} className={styles.service_image_width_black} />
            </div>
            <div className={styles.service_button}>
                <a><button className={styles.service_button_size}><div className={styles.service_button_text}>Պատվիրել</div></button></a>
            </div>
        </div>
    ))

    const otherServicesLight = props.otherServices.map(content => (
        <div className={styles.box}>
            <div className={styles.service_name_black}>
                <span>{content.text}</span>
            </div>
            <div className={styles.service_image}>
                <img src={content.img} className={styles.service_image_width_black} />
            </div>
            <div className={styles.service_button}>
                <a><button className={styles.service_button_size}><div className={styles.service_button_text}>Պատվիրել</div></button></a>
            </div>
        </div>
    ))

    return (
        <main >
            <div>
                <button onClick={setBlackMode}>Dark</button>
                <button onClick={setLightMode}>Light</button>
            </div>
            {props.colorMode ?
                <div className={styles.main_light}>
                    <div className={styles.services}>


                        <div className={styles.service_text}>

                            <div className={styles.service_h1_text_black}>
                                <h1 >
                                    Ծառայություններ
                                </h1>
                            </div>
                            <div className={styles.service_paragraph_black}>
                                <div className={styles.service_paragraph_size}>
                                    «Global IT» ընկերությունում առկան են երեք ֆակուլտետներ, վեբ ծրագրավորման, ծրագրավորման և մուլտիմեդիայի։ «ԳԼՈԲԱԼ ԻՏ» ՍՊԸ-ն հիմնադրվել է 2017թ.-ի հոկտեմբերի 19ին Գ. Քոսյանի կողմից: Մենք առաջարկում ենք ծրագրային տարատեսակ լուծումներ, որոնց նպատակն է մեծացնել ձեր բիզնեսի շահութաբերությունը և նպաստել աճին: Մեր ստեղծարար թիմը համատեղ ուժերով տալիս Է նորարարական լուծումներ, որոնք նպաստում են ձեր բիզնեսի թիրախային լսարանի ներգրավմանը:
                                    «ԳԼՈԲԱԼ ԻՏ» ՍՊԸ-ն հիմնադրվել է 2017թ.-ի հոկտեմբերի 19ին Գ. Քոսյանի կողմից: Մենք առաջարկում ենք ծրագրային տարատեսակ լուծումներ, որոնց նպատակն է մեծացնել ձեր բիզնեսի շահութաբերությունը և նպաստել աճին: Մեր ստեղծարար թիմը համատեղ ուժերով տալիս Է նորարարական լուծումներ, որոնք նպաստում են ձեր բիզնեսի թիրախային լսարանի ներգրավմանը:
                                </div>
                            </div>

                        </div>
                        <div className={styles.service_logo}></div>

                    </div>

                    <div className={styles.container}>
                        <div className={styles.width_container}>
                            {serviceElementsLight}
                        </div>
                    </div>
                    <div className={styles.other_services_text}>
                        <h1 className={styles.text_style_black}>Այլ Ծառայություններ</h1>
                    </div>
                    <div className={styles.other_service_container}>
                        <div className={styles.other_service_width_continer}>
                            {otherServicesLight}
                        </div>
                    </div>
                </div> :
                <div className={styles.main}>
                    <div className={styles.services}>


                        <div className={styles.service_text}>

                            <div className={styles.service_h1_text}>
                                <h1>
                                    Ծառայություններ
                                </h1>
                            </div>
                            <div className={styles.service_paragraph}>
                                <div className={styles.service_paragraph_size}>
                                    «Global IT» ընկերությունում առկան են երեք ֆակուլտետներ, վեբ ծրագրավորման, ծրագրավորման և մուլտիմեդիայի։ «ԳԼՈԲԱԼ ԻՏ» ՍՊԸ-ն հիմնադրվել է 2017թ.-ի հոկտեմբերի 19ին Գ. Քոսյանի կողմից: Մենք առաջարկում ենք ծրագրային տարատեսակ լուծումներ, որոնց նպատակն է մեծացնել ձեր բիզնեսի շահութաբերությունը և նպաստել աճին: Մեր ստեղծարար թիմը համատեղ ուժերով տալիս Է նորարարական լուծումներ, որոնք նպաստում են ձեր բիզնեսի թիրախային լսարանի ներգրավմանը:
                                    «ԳԼՈԲԱԼ ԻՏ» ՍՊԸ-ն հիմնադրվել է 2017թ.-ի հոկտեմբերի 19ին Գ. Քոսյանի կողմից: Մենք առաջարկում ենք ծրագրային տարատեսակ լուծումներ, որոնց նպատակն է մեծացնել ձեր բիզնեսի շահութաբերությունը և նպաստել աճին: Մեր ստեղծարար թիմը համատեղ ուժերով տալիս Է նորարարական լուծումներ, որոնք նպաստում են ձեր բիզնեսի թիրախային լսարանի ներգրավմանը:
                                </div>
                            </div>

                        </div>
                        <div className={styles.service_logo}></div>

                    </div>

                    <div className={styles.container}>
                        <div className={styles.width_container}>
                            {serviceElements}
                        </div>
                    </div>
                    <div className={styles.other_services_text}>
                        <h1 className={styles.text_style}>Այլ Ծառայություններ</h1>
                    </div>
                    <div className={styles.other_service_container}>
                        <div className={styles.other_service_width_continer}>
                            {otherServices}
                        </div>
                    </div>
                </div>}


        </main>
    )
}

export default Service