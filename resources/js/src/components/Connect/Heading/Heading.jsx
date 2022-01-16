import React from 'react';
import './Heading.css';
import { connect } from 'react-redux'
import { setColorModeAC } from '../../../store/service-reducer';
import { getColor } from '../../../store/reselect/theme-reselect';



const Heading = (props) => {
    return (
        <div>
            {props.colorMode === "true"
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
        colorMode: getColor(state)
    }
}



export default connect(mapStateToProps, {})(Heading)
