import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { connect } from 'react-redux';
import { getColor } from '../../../../../store/reselect/theme-reselect';
import { setColorModeAC } from '../../../../../store/theme-color';


import './ContactInfo.css';

const ContactInfo = (props) => {


    return (
        <div>
            {props.colorMode
            ?
            <section className="contactInfo">
            <div className="contactInfoCall" id="orderCall">
                <div className="contactInfoBtn"><FiPhoneCall /></div>
                <div className="contactInfoOrder">Պատվիրել զանգ</div>
            </div>
            <div className="contactInfoInfoBlack">
                <div className="contactInfoPhone">
                    <div className="contactInfoPhoneText">կամ զանգահարել</div>
                    <div className="contactInfoNumbers">
                        <div className="contactInfoNum">+374 98 960 959</div>
                        <div className="contactInfoNum">+374 95 355 255</div>
                    </div>
                </div>
                <div className="contactInfoMailBlack">
                    <div className="contactInfoEmailText">Էլ-փոստ</div>
                    <div className="contactInfoEmails">
                        <div className="contactInfoEmail">gitedu@bk.ru</div>
                        <div className="contactInfoEmail">globalit@gitedu.am</div>
                    </div>
                </div>
            </div>
        </section>
            :
            <section className="contactInfo">
            <div className="contactInfoCall" id="orderCall">
                <div className="contactInfoBtn"><FiPhoneCall /></div>
                <div className="contactInfoOrder">Պատվիրել զանգ</div>
            </div>
            <div className="contactInfoInfo">
                <div className="contactInfoPhone">
                    <div className="contactInfoPhoneText">կամ զանգահարել</div>
                    <div className="contactInfoNumbers">
                        <div className="contactInfoNum">+374 98 960 959</div>
                        <div className="contactInfoNum">+374 95 355 255</div>
                    </div>
                </div>
                <div className="contactInfoMail">
                    <div className="contactInfoEmailText">Էլ-փոստ</div>
                    <div className="contactInfoEmails">
                        <div className="contactInfoEmail">gitedu@bk.ru</div>
                        <div className="contactInfoEmail">globalit@gitedu.am</div>
                    </div>
                </div>
            </div>
        </section>
            }
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        colorMode: getColor(state)
    }
}



export default connect(mapStateToProps, {setColorModeAC})(ContactInfo)
