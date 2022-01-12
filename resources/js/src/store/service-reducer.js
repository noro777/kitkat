import ri_computer from './../static/images/ServicePage/1.png'
import phone from './../static/images/ServicePage/2.png'
import computers_software from './../static/images/ServicePage/3.png'
import gamepad from './../static/images/ServicePage/4.png'
import web_design from './../static/images/ServicePage/5.png'
import seo from './../static/images/ServicePage/6.png'
import business_marketing from './../static/images/ServicePage/7.png'
import buhgalter from './../static/images/ServicePage/8.png'
import print from './../static/images/ServicePage/9.png'
import fa_solid_photo_video from './../static/images/ServicePage/10.png'
import comp_repairing from './../static/images/ServicePage/11.png'
import adversting from './../static/images/ServicePage/12.png'
import programming_security from './../static/images/ServicePage/13.png'
import automating from './../static/images/ServicePage/14.png'
import cyber_security from './../static/images/ServicePage/15.png'
import domain_hosting from './../static/images/ServicePage/16.png'
import video_montage from './../static/images/ServicePage/17.png'
import wedding from './../static/images/ServicePage/18.png'
import birthday from './../static/images/ServicePage/19.png'
import baptism from './../static/images/ServicePage/20.png'
import campaings from './../static/images/ServicePage/21.png'
import excursions from './../static/images/ServicePage/22.png'

let initialState = {
    services: [
        {serviceId: 1, text:"Վեբ Կայքերի \n Պատրաստում", img: ri_computer},
        {serviceId: 2, text:"Բջջային Հավելվածների Պատրաստում", img: phone},
        {serviceId: 3, text:"Համակարգչային Հավելվածների Պատրաստում", img: computers_software},
        {serviceId: 4, text:"Մոբայլ և Համակարգչային Խաղերի Ստեղծում", img: gamepad},
        {serviceId: 5, text:"Վեբ և Գրաֆիկ Դիզայն", img: web_design},
        {serviceId: 6, text:"SEO և SMM Առաջխաղացում", img: seo},
        {serviceId: 7, text:"Բիզնես Կառավարում և Մարքեթինգ", img: business_marketing},
        {serviceId: 8, text:"Հաշվապահական Հաշվառում և Հարկային Օրենսդրություն", img: buhgalter},
        {serviceId: 9, text:"Տպագրական Աշխատանքներ", img: print},
        {serviceId: 10, text:"Ֆոտո և Վիդեո Նկարահանումներ", img: fa_solid_photo_video},
        {serviceId: 11, text:"Համակարգչային Տեխնիկայի Վերանորոգում", img: comp_repairing},
        {serviceId: 12, text:"Գովազդ և Առաջխաղացում", img: adversting},
        {serviceId: 13, text:"Տեխնիկական և Ծրագրային Ապահովում", img: programming_security},
        {serviceId: 14, text:"Ավտոմատացված Կառավարման Համակարգեր", img: automating},
        {serviceId: 15, text:"Ցանցային Անվտանգության Ծառայություններ", img: cyber_security},
        {serviceId: 16, text:"Դումեն և Հոստինգ", img: domain_hosting},
        {serviceId: 17, text:"Վիդեո Մոնտաժ և Անիմացիա", img: video_montage},
    ],
    otherServices: [
        {otherServiceId: 1, text:"Հարսանիքի Կազմակերպում", img: wedding},
        {otherServiceId: 2, text:"Ծննդյան Տոների Կազմակերպում", img: birthday},
        {otherServiceId: 3, text:"Կնունքի Կազմակերպում", img: baptism},
        {otherServiceId: 4, text:"Արշավների Կազմակերպում", img: campaings},
        {otherServiceId: 5, text:"Էքսկուրսիաների Կազմակերպում", img: excursions},
    ],
    colorMode: false
}

const CHANGE_COLOR_MODE = "CHANGE_COLOR_MODE"

export const serviceReducer = (state = initialState,action) => {
    switch(action.type){
        default:
            return state
    }
}

