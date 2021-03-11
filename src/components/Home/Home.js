import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Team from '../Team/Team';
import banner from '../../Photo/banner.jpg'
import './Home.css'
const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=UEFA%20Champions%20league';
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <div>
            <Header hasBanner={false} banner={banner}></Header>
            <div className="team-container">
                {
                    teams.map(team => <Team key={team.idTeam} team={team}></Team>)
                }
            </div>
        </div>
    );
};

export default Home;