import React from 'react';
import './Iconic.css';

import { RiFacebookFill, RiInstagramFill, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";
import { connect } from 'react-redux';
import { getColor } from '../../../../../store/reselect/theme-reselect';
import { setColorModeAC } from '../../../../../store/theme-color';


const Iconic = (props) => {
    return (
        <div>
        {props.colorMode 
        ?
        <section className="iconic">
        <a href="https://www.facebook.com/Glteducenter" target="_blank" className="iconicItem"><RiFacebookFill /></a>
        <a href="#" target="_blank" className="iconicItem"><RiInstagramFill /></a>
        <a href="#" target="_blank" className="iconicItem"><RiTwitterFill /></a>
        <a href="#" target="_blank" className="iconicItem"><RiLinkedinFill /></a>
        </section>
        :
        <section className="iconic">
        <a href="https://www.facebook.com/Glteducenter" target="_blank" className="iconicItemBlack"><RiFacebookFill /></a>
        <a href="#" target="_blank" className="iconicItemBlack"><RiInstagramFill /></a>
        <a href="#" target="_blank" className="iconicItemBlack"><RiTwitterFill /></a>
        <a href="#" target="_blank" className="iconicItemBlack"><RiLinkedinFill /></a>
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

export default connect(mapStateToProps, {setColorModeAC})(Iconic)


