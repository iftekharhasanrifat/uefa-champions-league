import { Button } from '@material-ui/core';
import React from 'react';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const Team = (props) => {
    const {idTeam,strTeam,strTeamBadge,strSport} = props.team;
    let history = useHistory();
    const handleExploreClick = teamId=>{
        const url=`/team/${teamId}`;
        history.push(url);
    }
    return (
        <div className='team'>
            <img src={strTeamBadge} alt=""/>
            <h2>{strTeam}</h2>
            <p>Sports type : {strSport}</p>
            <Button onClick={()=>handleExploreClick(idTeam)} variant="contained" color="secondary">Explore<FontAwesomeIcon icon={faArrowRight} /></Button>
        </div>
    );
};

export default Team;