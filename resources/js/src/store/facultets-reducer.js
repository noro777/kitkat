import styles from '../components/Facultets/Facultets.module.css'
import frontend from '../static/images/Facultet/fak6.png'
import backend from '../static/images/Facultet/fak7.png'
import fullstack from '../static/images/Facultet/fak8.png'
import ruby from '../static/images/Facultet/fak9.png'
import php from '../static/images/Facultet/fak10.png'
import python from '../static/images/Facultet/fak11.png'
import javascript from '../static/images/Facultet/fak12.png'
import web_design from '../static/images/Facultet/fak13.png'

const initialState = {
    box: [
        {id: 1, className: styles.blue, text: "Front End Ծրագրավորում", image: frontend},
        {id: 2, className: styles.yellow, text: "Back End Ծրագրավորում", image: backend},
        {id: 3, className: styles.orange, text: "Full Stack Ծրագրավորում", image: fullstack},
        {id: 4, className: styles.red, text: "Ruby", image: ruby},
        {id: 5, className: styles.very_blue, text: "PHP", image: php},
        {id: 6, className: styles.very_yellow, text: "Python (Django)", image: python},
        {id: 7, className: styles.green, text: "Java Script", image: javascript},
        {id: 8, className: styles.light_blue, text: "Վեբ Դիզայն", image: web_design},
    ]
}

export const facultetsReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}
