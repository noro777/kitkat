import React from 'react';
import './QRCode.css';
import qr from './../../../static/images/QR/QR.svg'
import { connect } from 'react-redux';
import { getColor } from '../../../store/reselect/theme-reselect';

const QRCode = (props) => {
    return (
        <div>
            {props.colorMode === "true"
                ? <section className="QR">
                    <div className="QRTitleBlack">Կրկնորինակիր QR Կոդը, և ստացիր մեր բոլոր տվյալները քո Բջջայինի մեջ</div>
                    <div className="QRCode">
                        <img src={qr} alt="QR" className="QRcodeImageBlack" />
                    </div>
                </section>
                : <section className="QR">
                    <div className="QRTitle">Կրկնորինակիր QR Կոդը, և ստացիր մեր բոլոր տվյալները քո Բջջայինի մեջ</div>
                    <div className="QRCode">
                        <img src={qr} alt="QR" className="QRcodeImage" />
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

export default connect(mapStateToProps)(QRCode)
