import React, { useEffect, useState } from 'react';
import axios from 'axios';
import check from '../../../website_images/games/check-under-image.png';
import snd_league from '../../../website_images/games/cod/cod-leagues/snd-league.png';
import './Cod.css';
import styles from './CodTourney.module.css';
import EventTime from '../EventTime';

function CodTourneys() {
    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/usyncapp/tournaments").then(res => {
            setTournaments(res.data)
        }).catch(err => {
            console.log(err)
        });
    }, []);

    return (
        <div>
            <h1>Tournaments</h1>
            <TournamentList tournaments={tournaments} />
        </div>
    );
}

function TournamentList(props) {
    const { tournaments } = props;

    return (
        <div>
            {tournaments.map(tournament => (
                <Tournament key={tournament._id} tournament={tournament} />
            ))}
        </div>
    );
}

function Tournament(props) {
    const { tournament } = props;
    const time = '3:30 PM'

    return (
        <div>
            <div className='Background-mid'>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>{tournament.title}</h1>
                                <div className='parent'>
                                    <img src={snd_league} alt="The SND League" className='league-img' />
                                    <img src={check} alt="The SND League" className='over-img' />
                                </div>
                                <h2>{tournament.time}</h2>
                                {/* <img src="https://i.imgur.com/DRq2uD6.png" alt="entry, region, skill, req" className={styles.entry}/> */}
                                {/* className={styles.text} */}
                                <div className={styles.text}>
                                    <div className={styles.columnContainer}>
                                    <div className={styles.entryPlayer}>
                                        Entry/Player
                                    </div>

                                    <div className={styles.region}>
                                        Region
                                    </div>

                                    <div className={styles.skill}>
                                        Skill
                                    </div>

                                    <div className={styles.requirements}>
                                        Requirements
                                    </div>  
                                    </div>                            
                                    
                                    <div className={styles.variableContainer}>
                                        <div className={`${styles.entryPlayerVar} ${styles.centeredText}`}>
                                            {tournament.entry}
                                        </div>

                                        <div className={`${styles.regionVar} ${styles.centeredText}`}>
                                            All
                                        </div>

                                        <div className={`${styles.skillVar} ${styles.centeredText}`}>
                                            All
                                        </div>

                                        <div className={`${styles.requirementsVar} ${styles.centeredText}`}>
                                            Console Only
                                        </div>
                                    </div>                                    
                                </div>
                                
                                {/* <p className={styles.info}>{tournament.entry}</p>
                                

                                
                                <p className={styles.info2}>All</p>
                                <br /> */}
                                    
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div>
                        
                        {/* <div className='col-lg-6'>
                            <div className='league'>
                                <h1 className='Leagueh1'>{tournament.title}</h1>
                                <div className='parent'>
                                    <img src={snd_league} alt="The SND League" className='league-img' />
                                    <img src={check} alt="The SND League" className='over-img' />
                                </div>
                                <h2>{tournament.time}</h2>
                                <div>
                                    <p>Entry/Player</p>
                                    <p>{tournament.entry}</p>
                                    <p>Region</p>
                                    <p>{tournament.size}</p>
                                    <p>Skill</p>
                                    <p>{tournament.size}</p>
                                    <p>Requirements</p>
                                    <p>Platforms: {tournament.platforms}</p>
                                </div> */}
                                {/* <img src={check} alt="uSync Verified" className='check' /> */}
                                {/* <button type="submit" className='info-button'>More Info</button>
                            </div>
                        </div> */}
                        <p className='hr' />
                    </div>
                </div>
            </div>
            {/* <h2>{tournament.title}</h2>
            <p>Date: {tournament.date}</p>
            <p>Time: {tournament.time}</p>
            <p>Entry: {tournament.entry}</p>
            <p>Size: {tournament.size}</p> */}
            {/* <p>Platforms: {tournament.platforms}</p>
            <p>Game mode: {tournament.gamemode}</p> */}
        </div>
    );
}

 export default CodTourneys;