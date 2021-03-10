import React from 'react';
import './Footer.css';
import facebookLogo from '../../Icon/Facebook.png'
import youtubeLogo from '../../Icon/YouTube.png'
import twitterLogo from '../../Icon/Twitter.png'
const Footer = (props) => {
    const {strTwitter,strFacebook,strYoutube} = props.team;
    return (
        <div className="footer">
            <a target="_blank" href={`https://${strTwitter}`}><img src={twitterLogo} alt=""/></a>
            <a target="_blank" href={`https://${strFacebook}`}><img src={facebookLogo} alt=""/></a>
            <a target="_blank"href={`https://${strYoutube}`}><img src={youtubeLogo} alt=""/></a>
        </div>
    );
};

export default Footer;