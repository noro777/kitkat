import React, {useState} from 'react'
import styles from './Facultets.module.css'





const Facultets = (props) => {
    

    const [activeMode, SetActiveMode] = useState("web")
    const [openSectionThreeMenu, setOpenSectionThreeMenu] = useState(false)
    const [input1,setInput1] = useState(false)
    const [input2,setInput2] = useState(false)
    const [input3,setInput3] = useState(false)



    let content

    if(activeMode === "web"){
        content = 
        <section className={styles.section2}>
        <div className={styles.web_image}></div>
        <div className={styles.category_text_active} onClick={() => SetActiveMode("web")}>
        Վեբ Ծրագրավորման
        Ֆակուլտետ
        </div>
        <div className={styles.web_hr}></div>
        <div className={styles.programming_text} onClick={() => SetActiveMode("programming")}>
        Ծրագրավորման
        Ֆակուլտետ
        </div>
        <div className={styles.multimedia_text} onClick={() => SetActiveMode("multimedia")}>
        Մուլտիմեդիայի
        Ֆակուլտետ
        </div>
    </section>
    }else if(activeMode === "programming"){
        content = <section className={styles.section2}>

        <div className={styles.category_text} onClick={() => SetActiveMode("web")}>
        Վեբ Ծրագրավորման
        Ֆակուլտետ
        </div>
        <div className={styles.programming_image}></div>
        <div className={styles.programming_text_active} onClick={() => SetActiveMode("programming")}>
        Ծրագրավորման
        Ֆակուլտետ
        </div>
        <div className={styles.programming_hr}></div>
        <div className={styles.multimedia_text} onClick={() => SetActiveMode("multimedia")}>
        Մուլտիմեդիայի
        Ֆակուլտետ
        </div>
    </section>
    }else if(activeMode === "multimedia"){
        content = <section className={styles.section2}>

        <div className={styles.category_text} onClick={() => SetActiveMode("web")}>
        Վեբ Ծրագրավորման
        Ֆակուլտետ
        </div>
        <div className={styles.programming_text} onClick={() => SetActiveMode("programming")}>
        Ծրագրավորման
        Ֆակուլտետ
        </div>
        <div className={styles.multimedia_image}></div>
        <div className={styles.multimedia_text_active} onClick={() => SetActiveMode("multimedia")}>
        Մուլտիմեդիայի
        Ֆակուլտետ
        </div>
        <div className={styles.multimedia_hr}></div>
    </section>
    }



    return (
        <div className={styles.main_background}>
            <section className={styles.section1}>
                <div className={styles.facultets_text}>Ֆակուլտետներ</div>
                <span className={styles.facultets_paragraph}>
                «Gloab IT» ընկերությունում առկան են երեք ֆակուլտետներ, վեբ ծրագրավորման, ծրագրավորման և մուլտիմեդիայի։ «ԳԼՈԲԱԼ ԻՏ» ՍՊԸ-ն հիմնադրվել է 2017թ.-ի հոկտեմբերի 19ին Գ. Քոսյանի կողմից: Մենք առաջարկում ենք ծրագրային տարատեսակ լուծումներ, որոնց նպատակն է մեծացնել ձեր բիզնեսի շահութաբերությունը և նպաստել աճին: Մեր ստեղծարար թիմը համատեղ ուժերով տալիս Է նորարարական լուծումներ, որոնք նպաստում են ձեր բիզնեսի թիրախային լսարանի ներգրավմանը:
                «ԳԼՈԲԱԼ ԻՏ» ՍՊԸ-ն հիմնադրվել է 2017թ.-ի հոկտեմբերի 19ին Գ. Քոսյանի կողմից: Մենք առաջարկում ենք ծրագրային տարատեսակ լուծումներ, որոնց նպատակն է մեծացնել ձեր բիզնեսի շահութաբերությունը և նպաստել աճին: Մեր ստեղծարար թիմը համատեղ ուժերով տալիս Է նորարարական լուծումներ, որոնք նպաստում են ձեր բիզնեսի թիրախային լսարանի ներգրավմանը:

                </span>
                <div className={styles.main_image}>

                </div>

            </section>
            {content}
            <section className={styles.section3}>
                <div className={styles.section3_image} onClick={() => setOpenSectionThreeMenu(!openSectionThreeMenu)}></div>
                {openSectionThreeMenu 
                ?
                <div className={styles.section3}>
                <div className={styles.section3_menu}>
                </div>
                {input1
                 ?
                 <div className={styles.input_1_hr_active}></div>
                 :
                 <div className={styles.input_1_hr}></div>
                 }
                 {input2 
                 ?
                 <div className={styles.input_2_hr_active} ></div>
                 :
                 <div className={styles.input_2_hr} ></div>
                 }
                {input3
                 ?
                 <div className={styles.input_3_hr_active} ></div>
                 :
                 <div className={styles.input_3_hr}></div>
                 }
                <div className={styles.input_1} onClick={() => setInput1(!input1)}>
                    <input type='checkbox' />
                </div>
                <div className={styles.input_2} onClick={() => setInput2(!input2)}>
                    <input type='checkbox' />
                </div>
                <div className={styles.input_3} onClick={() => setInput3(!input3)}>
                    <input type='checkbox' />
                </div>
                <div className={styles.first_text}>
                    Ըստ գների աճման կարգի
                </div>
                <div className={styles.second_text}>
                    Ըստ գների նվազման կարգի
                </div>
                <div className={styles.third_text}>
                Զեղչված դասընթացները
                </div>
            </div>
                :
                null
                }
                <div className={styles.facultets_text_category}>
                    Ֆակուլտետ
                </div>
                <div className={styles.facultets_category_menu}>
                </div>
                <div className={styles.input_4}>
                    <input type='checkbox' />
                </div>
                <div className={styles.input_5}>
                    <input type='checkbox' />
                </div>
                <div className={styles.input_6}>
                    <input type='checkbox' />
                </div>
                <div>
                Վեբ Ծրագրավորում
                </div>
                <div>
                Ծրագրավորում
                </div>
                <div>
                Մուլտիմեդիա
                </div>
            </section>
        </div>
    ) 
}

export default Facultets