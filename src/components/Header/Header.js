import React from 'react';
import './Header.css'
const Header = (props) => {
    const {hasLogo,logo,hasBanner,banner,dynamicBanner} = props;
    const bannerStyle={
        backgroundImage:hasBanner ?`url(${dynamicBanner})`:`url(${banner})`
    }
    return (
        <div style={bannerStyle} className='top-banner'>
            <div className='logo'>
                {
                   hasLogo?<img src={logo} alt="" />:<h2>UEFA CHAMPIONS LEAGUE</h2>
                }
            </div>
        </div>
    );
};

export default Header;