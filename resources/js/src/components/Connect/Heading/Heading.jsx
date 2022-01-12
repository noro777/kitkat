import React from 'react';
import './Heading.css';
import { connect } from 'react-redux'
import { setColorModeAC } from '../../../store/service-reducer';



const Heading = (props) => {
    return (
        <div>
            {props.colorMode
                ? <section className="heading">
                    <div className="headingTitleBlack">Մենք միշտ կապի մեջ ենք</div>
                    <div className="headingImg"></div>
                </section>
                :
                <section className="heading">
                    <div className="headingTitle">Մենք միշտ կապի մեջ ենք</div>
                    <div className="headingImg"></div>
                </section>
    
            }
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        colorMode: state.service.colorMode
    }
}



export default connect(mapStateToProps, {})(Heading)
