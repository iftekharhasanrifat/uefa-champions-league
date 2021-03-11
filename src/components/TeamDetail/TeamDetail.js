import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import './TeamDetail.css'
import foundedIcon from '../../Icon/found 1.png'
import flagIcon from '../../Icon/flag (1) 1.png'
import footballIcon from '../../Icon/football (1) 1.png'
import genderIcon from '../../Icon/male-gender-sign 1.png'
import maleImage from '../../Photo/male.png'
import femaleImage from '../../Photo/female.png'
import Footer from '../Footer/Footer';
const TeamDetail = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
            .catch(error => console.log(error))
    }, [teamId])
    const { strTeamBadge, strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strStadiumDescription } = team;
    return (
        <div>
            {team === 'I'||team.length=== 0? <h1 className="text-danger text-center m-5">Data Not Found</h1>
                : <div>
                    <Header logo={strTeamBadge}></Header>
                    <div className="team-info">
                        <div className="team-detail-container">
                            <div className='row m-5 container d-flex justify-content-center align-items-center team-detail'>
                                <div className="p-4 col-md-7">
                                    <h2>{strTeam}</h2>
                                    <div className='d-flex mt-3'>
                                        <img className='icon mr-2' src={foundedIcon} alt="" />
                                        <p><strong>Founded: {intFormedYear}</strong></p>
                                    </div>
                                    <div className='d-flex mt-2'>
                                        <img className='icon mr-2' src={flagIcon} alt="" />
                                        <p><strong>Country: {strCountry}</strong></p>
                                    </div>
                                    <div className='d-flex mt-2'>
                                        <img className='icon mr-2' src={footballIcon} alt="" />
                                        <p><strong>Sports type: {strSport}</strong></p>
                                    </div>
                                    <div className='d-flex mt-2'>
                                        <img className='icon mr-2' src={genderIcon} alt="" />
                                        {strGender === 'Male' ? <p><strong>Gender: Male</strong></p> : <p><strong>Gender: Female</strong></p>}

                                    </div>
                                </div>
                                <div className="col-md-5 p-4">
                                    {strGender === 'Male' ? <img className="w-100" src={maleImage} alt="" /> : <img className="w-100" src={femaleImage} alt="" />}
                                </div>
                            </div>
                        </div>
                        <div className="description-container d-flex justify-content-center align-items-center">
                            <div className="row p-1 container ">
                                <div className="col-md-12">
                                    <p className="team-description text-justify">{strDescriptionEN}</p>
                                </div>
                            </div>
                        </div>
                        <div className="description-container d-flex justify-content-center align-items-center">
                            <div className="row p-1 container ">
                                <div className="col-md-12">
                                    <p className="stadium-description text-justify">{strStadiumDescription}</p>
                                </div>
                            </div>
                        </div>
                        <Footer team={team} ></Footer>
                    </div>
                </div>
            }
        </div>
    );
};

export default TeamDetail;