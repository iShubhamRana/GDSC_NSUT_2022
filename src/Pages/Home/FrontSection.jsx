import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DSC_Logo from '../../Assets/Images/DSC-Logo.png';
import {  useDispatch } from 'react-redux'
import { toggleNav } from '../../app/store'
import VisibilitySensor from 'react-visibility-sensor';
import '@lottiefiles/lottie-player';

export default function FrontSection(props) {
    const { content } = props;
    const dispatch = useDispatch()

    const onLogoHidden = (isVisible)=>{
         dispatch(toggleNav(isVisible))
    }

    return (
        <section className='home-section front-section hero'>
            <div className="wrapper">
                <div className="home-custom-container">
                    <VisibilitySensor scrollCheck={true} onChange={onLogoHidden} offset={{top:20}}>
                    <div className="horizontal-container">
                        <img src={DSC_Logo} alt="logo" width={10} className="logo" />
                        <div className="vertical-container">
                            <h1 className="soceity-name">Google Developer Student Clubs</h1>
                            <p className="college-name">Netaji Subhash University of Technology</p>
                        </div>
                    </div>
                    </VisibilitySensor>
                    <p className="soceity-info">{content}</p>
                    <Link className="lets-connect-button" to="/contacts">Let's Connect</Link>
                </div>
                <lottie-player  src="https://assets5.lottiefiles.com/packages/lf20_qq5qecip.json"  background="transparent"  speed="1"  loop autoplay></lottie-player>
            </div>
        </section>
    );
}

FrontSection.defaultProps = {
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quo, velit maxime ducimus recusandae quam consequuntur, quidem ipsa ex necessitatibus repellendus aliquid error assumenda doloribus tempora nobis, itaque inventore quae porro exercitationem. Molestiae, debitis voluptatem."
}

FrontSection.propTypes = {
    content: PropTypes.string
}