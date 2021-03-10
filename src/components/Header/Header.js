import React from 'react';
import './Header.css'
const Header = (props) => {
    const teamLogo = props.logo;
    return (
        <div className='top-banner'>
            <div className='logo'>
                {
                    teamLogo===undefined?<h1>UEFA CHAMPIONS LEAGUE</h1>:<img src={teamLogo} alt="" />
                }
            </div>
        </div>
    );
};

export default Header;