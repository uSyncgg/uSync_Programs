import React, { useEffect, useState } from 'react';
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCardSubtitle, CListGroup, CListGroupItem, CContainer, CRow, CCol } from '@coreui/react'
import axios from 'axios';

function TournamentList({tournaments, format, region, platform, skill, entry}) {
    // const { tournaments } = tournaments;
    console.log(`FORMAT: ${format}`)
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
    // console.log(`TOURNAMENTS: ${tournament}`)
    return (
        <div className={"container-fluid d-flex justify-content-md-start "} style={{ paddingLeft: '12.5%', height: '60%' }}>
            <CCard style={{ marginRight: '5rem' }} className='mb-4 tournament-card-wrapper'>
                <CCardBody className='py-3'>
                    <CRow>
                        {/* Left side: Title and subtitle - Now vertically centered */}
                        <CCol xs={12} md={4} lg={3} className="mb-3 mb-md-0 d-flex flex-column justify-content-center">
                            <CCardTitle>{tournament.gamemode.toUpperCase()}</CCardTitle>
                            <CCardSubtitle className='mb-0'>{tournament.team_size}</CCardSubtitle>
                            <CCardSubtitle className='mb-0'>{tournament.series}</CCardSubtitle>
                        </CCol>
                        
                        {/* Right side: Information in CListGroups */}
                        <CCol xs={12} md={8} lg={6}>
                            <CContainer fluid className="p-0">
                            <CRow>
                                <CRow>
                                    <CCol xs={12} sm={6} md={4} lg={6} className="mb-0">
                                    <CListGroup flush className="border-0">
                                        <CListGroupItem className='py-1 px-2'>Time</CListGroupItem>
                                        <CListGroupItem className='py-1 px-2'>{tournament.time}</CListGroupItem>
                                    </CListGroup>
                                    </CCol>

                                    <CCol xs={12} sm={6} md={4} lg={6} className="mb-0">
                                    <CListGroup flush className="border-0">
                                        <CListGroupItem className='py-1 px-2'>Entry</CListGroupItem>
                                        <CListGroupItem className='py-1 px-2'>{tournament.entry}</CListGroupItem>
                                    </CListGroup>
                                    </CCol>
                                </CRow>

                                <CRow>
                                    <CCol xs={12} sm={6} md={4} lg={4} className="mb-0">
                                    <CListGroup flush className="border-0">
                                        <CListGroupItem className='py-1 px-2'>Region</CListGroupItem>
                                        <CListGroupItem className='py-1 px-2'>{tournament.region}</CListGroupItem>
                                    </CListGroup>
                                    </CCol>

                                    <CCol xs={12} sm={6} md={4} lg={3} className="mb-0">
                                    <CListGroup flush className="border-0">
                                        <CListGroupItem className='py-1 px-2'>Skill</CListGroupItem>
                                        <CListGroupItem className='py-1 px-2'>{tournament.skill}</CListGroupItem>
                                    </CListGroup>
                                    </CCol>

                                    <CCol xs={12} sm={6} md={4} lg={5}className="mb-0" >
                                    <CListGroup flush className="border-0">
                                        <CListGroupItem className='py-1 px-2'>Restrictions</CListGroupItem>
                                        <CListGroupItem className='py-1 px-2'>{tournament.requirements}</CListGroupItem>
                                    </CListGroup>
                                    </CCol>
                                </CRow>
                            </CRow>
                            </CContainer>
                        </CCol>

                        {/* Right side: Join Now - Now vertically centered */}
                        <CCol xs={12} md={4} lg={3} className="mb-3 mb-md-0 d-flex flex-column justify-content-center align-items-center">
                            <button className="btn btn-primary">Join Now</button>
                        </CCol>
                    </CRow>
                    {/* <CCardTitle>{tournament.gamemode.toUpperCase()}</CCardTitle>
                    <CCardSubtitle>CHANGE TEAM SIZE TO TEAM_SIZE IN DB</CCardSubtitle>
                    <CCardSubtitle>{tournament.series}</CCardSubtitle>
                    <CContainer>
                        

                        
                    </CContainer>

                    <CCardText>
                        WILL WANT TO FIX DATE TO BE ALL 1 FORMAT IN DB SO PULLING TO SITE IS A SEAMLESS PROCESS<br/>
                        {tournament.date}<br/>
                    </CCardText> */}
                </CCardBody>
            </CCard>
        </div>
    );
}

function Experiement_Tourney() {
    const [tournaments, setTournaments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 20;

    useEffect(() => {
        axios.get("http://localhost:5000/usyncapp/tournaments").then(res => {
            setTournaments(res.data)
        }).catch(err => {
            console.log(err)
        });
    }, []);

    // Get current tournaments
    const indexOfLastTournament = currentPage * cardsPerPage;
    const indexOfFirstTournament = indexOfLastTournament - cardsPerPage;
    const currentTournaments = tournaments.slice(indexOfFirstTournament, indexOfLastTournament);

    const [selectedFormats, setSelectedFormats] = useState([]);
    const [selectedRegions, setSelectedRegions] = useState([]);
    const [selectedPlatforms, setSelectedPlatforms] = useState([]);
    const [SelectedSkills, setSelectedSkills] = useState([]);
    const [SelectedEntry, setSelectedEntry] = useState([]);

    // Available filter options
    const teamOptions = ['1v1', '2v2', '3v3', '4v4']; 
    const regionOptions = ['NA', 'EU', 'LATAM'];
    const consoleOptions = ['Console', 'PC']
    const skillOptions = ['Novice', 'Amateur', 'Expert', 'Agent', 'Master', 'Challenger']
    const entryOptions = ['Free', 'ECO']

    const handleFormatChange = (selectedOptions) => {
        setSelectedFormats(selectedOptions);
    };
    
    // Handle region filter changes
    const handleRegionChange = (selectedOptions) => {
        setSelectedRegions(selectedOptions);
    };

    // Handle region filter changes
    const handlePlatformChange = (selectedOptions) => {
        setSelectedPlatforms(selectedOptions);
    };

    // Handle region filter changes
    const handleSkillChange = (selectedOptions) => {
        setSelectedSkills(selectedOptions);
    };

    // Handle region filter changes
    const handleEntryChange = (selectedOptions) => {
        setSelectedEntry(selectedOptions);
    };

    // console.log('Rendering the tourney')
    return(
        <div>
            <TournamentList 
                tournaments={currentTournaments}
                format={selectedFormats}
                region={selectedRegions}
                platform={selectedPlatforms}
                skills={SelectedSkills}
                entry={SelectedEntry} 
            />
        </div>
    )
}

export default Experiement_Tourney