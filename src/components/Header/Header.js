import React from 'react';
import './Header.css'
const Header = (props) => {
    const teamLogo = props.logo;
    return (
        <div className='top-banner'>
            <div className='logo'>
                {
                    teamLogo===''?<h2>UEFA CHAMPIONS LEAGUE</h2>:<img src={teamLogo} alt="" />
                }
            </div>
        </div>
    );
};

export default Header;