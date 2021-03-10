import React from 'react';
import './Footer.css';
import facebookLogo from '../../Icon/Facebook.png'
import youtubeLogo from '../../Icon/YouTube.png'
import twitterLogo from '../../Icon/Twitter.png'
const Footer = (props) => {
    const {strTwitter,strFacebook,strYoutube} = props.team;
    return (
        <div className="footer">
            <a href={`https://${strTwitter}`}><img src={twitterLogo} alt=""/></a>
            <a href={`https://${strFacebook}`}><img src={facebookLogo} alt=""/></a>
            <a href={`https://${strYoutube}`}><img src={youtubeLogo} alt=""/></a>
        </div>
    );
};

export default Footer;