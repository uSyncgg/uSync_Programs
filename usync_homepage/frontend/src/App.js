import { useState } from 'react';
//import styles from './Home.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Comingsoon from './pages/Comingsoon';
import Games from './pages/Games';
import Lans from './pages/Lans';
import Leagues from './pages/Leagues';
import Tournaments from './pages/Tournaments';
import FAQ from './pages/more-pages/FAQ';
import Fix from './pages/more-pages/FAQ/How_We_Fix_It';
import Better from './pages/more-pages/FAQ/How_Esports_Can_Be_Better';
import Problem from './pages/more-pages/FAQ/Problem_With_Esports';
import Provide from './pages/more-pages/FAQ/What_We_Provide';
import Join from './pages/more-pages/FAQ/How_To_Join_Esports_League';
import './App.css';
import Navbar from './Navbar';
import Playground from './Playground';
import PlaygroundTwo from './pages/more-pages/PlaygroundTwo';
import { Helmet } from 'react-helmet';

import Cod_headtohead from './pages/game_pages/CoD/Cod_headtohead'
import Cod_Wagers from './pages/game_pages/CoD/Cod_Wagers'
import Cod_Leagues from './pages/game_pages/CoD/Cod_Leagues';
import Cod from './pages/game_pages/CoD/Cod';
import Cod_Lan from './pages/game_pages/CoD/Cod_Lan';
import CodTourneys from './pages/game_pages/CoD/CodTourneys';
import Experiement_Tourney from './pages/game_pages/CoD/Experiement_Tourney';

//COD LEAGUES
import HOE_Amateur from './pages/game_pages/CoD/leagues/House_Of_Esports/HOE_Amateur'
import HOE_Challengers from './pages/game_pages/CoD/leagues/House_Of_Esports/HOE_Challengers'
import CCL_League from './pages/game_pages/CoD/leagues/CCL_League'
import COD_Beer_League from './pages/game_pages/CoD/leagues/COD_Beer_League'
import Corporate_COD_League from './pages/game_pages/CoD/leagues/Corporate_COD_League'
import Snd_league from './pages/game_pages/CoD/leagues/Snd_league'
import Playfly_COD_League from './pages/game_pages/CoD/leagues/Playfly_COD_League'
import U18_League from './pages/game_pages/CoD/leagues/U18_League'
import XP_League_Cod from './pages/game_pages/CoD/leagues/XP_League_Cod'
import COD_Rec_League from './pages/game_pages/CoD/leagues/COD_Rec_League'
import United_rogue_league from './pages/game_pages/CoD/leagues/United_rogue_league';
import TPCWomens from './pages/game_pages/CoD/leagues/TPCWomens';
import FCL from './pages/game_pages/CoD/leagues/FCL';
import ZonedoutCOD from './pages/game_pages/CoD/leagues/ZonedoutCOD';
import AFGL from './pages/game_pages/CoD/leagues/AFGL';
import Kinetic_league from './pages/game_pages/CoD/leagues/Kinetic_league';
import ECAC from './pages/game_pages/CoD/leagues/ECAC';
import NJCAAE from './pages/game_pages/CoD/leagues/NJCAAE';
import Ixi_Esports from './pages/game_pages/CoD/leagues/Ixi_Esports';
import CXP_Leagues from './pages/game_pages/CoD/leagues/CXP_Leagues/CXP_Leagues';
import CXP_Varsity from './pages/game_pages/CoD/leagues/CXP_Leagues/CXP_Varsity';
import CXP_Club from './pages/game_pages/CoD/leagues/CXP_Leagues/CXP_Club';
import CXP_Open from './pages/game_pages/CoD/leagues/CXP_Leagues/CXP_Open';
//COD LEAGUES

//COD HEAD TO HEAD
import Arena from './pages/game_pages/CoD/Head-To-Head/Arena'
import Eagent from './pages/game_pages/CoD/Head-To-Head/Eagent'
import Erivals from './pages/game_pages/CoD/Head-To-Head/Erivals'
import CMG_Xp from './pages/game_pages/CoD/Head-To-Head/CMG_Xp'
//COD HEAD TO HEAD

//COD WAGERS
import App_1v1ME from './pages/game_pages/CoD/Wagers/App_1v1ME'
import CMG_Wagers from './pages/game_pages/CoD/Wagers/CMG_Wagers'
import Dropin_Wagers from './pages/game_pages/CoD/Wagers/Dropin_Wagers'
import EAgent_Wagers from './pages/game_pages/CoD/Wagers/EAgent_Wagers'
import Oneup_Wagers from './pages/game_pages/CoD/Wagers/Oneup_Wagers'
import Dubbz from './pages/game_pages/CoD/Wagers/Dubbz'
import EsportsHub from './pages/game_pages/CoD/Wagers/EsportsHub'
import Ewagers from './pages/game_pages/CoD/Wagers/Ewagers'
//COD WAGERS

//HALO HEAD TO HEAD
import ArenaHalo from './pages/game_pages/Halo/Head-To-Head/ArenaHalo'
import RecXP from './pages/game_pages/Halo/Head-To-Head/RecXP'
import Sauana from './pages/game_pages/Halo/Head-To-Head/Sauana'
import UGC_Scrim from './pages/game_pages/Halo/Head-To-Head/UGC_Scrim'
//HALO HEAD TO HEAD

//HALO WAGERS
import CMG_Halo from './pages/game_pages/Halo/Wagers/CMG_Halo'
import OneupHalo from './pages/game_pages/Halo/Wagers/OneupHalo'
import EsportWagHalo from './pages/game_pages/Halo/Wagers/EsportWagHalo'
//HALO WAGERS


//HALO LEAGUES
import Halo_Agent from './pages/game_pages/Halo/Leagues/Halo_Agent'
import Halo_Rec_League from './pages/game_pages/Halo/Leagues/Halo_Rec_League'
import UGC_Halo from './pages/game_pages/Halo/Leagues/UGC_Halo'
import HSELHalo from './pages/game_pages/Halo/Leagues/HSELHalo'
//HALO LEAGUES

//WARZONE HEAD TO HEAD
import CMGWZXP from './pages/game_pages/Warzone/Head-To-Head/CMGWZXP'
import EsportRivals from './pages/game_pages/Warzone/Head-To-Head/EsportRivals'
//WARZONE HEAD TO HEAD

//WARZONE WAGERS
import CMG_WZ from './pages/game_pages/Warzone/Wagers/CMG_WZ'
import DropinWZ from './pages/game_pages/Warzone/Wagers/DropinWZ'
import GamerSaloon from './pages/game_pages/Warzone/Wagers/GamerSaloon'
import OneUpWZ from './pages/game_pages/Warzone/Wagers/OneUpWZ'
import Wager_1v1WZ from './pages/game_pages/Warzone/Wagers/Wager_1v1WZ'
import Dubbzwz from './pages/game_pages/Warzone/Wagers/Dubbzwz'
import EwagersWZ from './pages/game_pages/Warzone/Wagers/EwagersWZ'
//WARZONE WAGERS

//WARZONE LEAGUES
import Airforce from './pages/game_pages/Warzone/Leagues/Airforce'
import GHML_Gaming_League from './pages/game_pages/Warzone/Leagues/GHML_Gaming_League'
import NJCAAE_League from './pages/game_pages/Warzone/Leagues/NJCAAE_League'
//WARZONE LEAGUES

//LoL HEAD TO HEAD
import Esport_Scrim from './pages/game_pages/LoL/Head-To-Head/Esport_Scrim'
import PraccLol from './pages/game_pages/LoL/Head-To-Head/PraccLol'
import Gankster from './pages/game_pages/LoL/Head-To-Head/Gankster'
//LoL HEAD TO HEAD

//LoL WAGERS
import DropinLoL from './pages/game_pages/LoL/Wagers/DropinLoL'
import DubbzLol from './pages/game_pages/LoL/Wagers/DubbzLol'
import EwagersLol from './pages/game_pages/LoL/Wagers/EwagersLol'
//LoL WAGERS

//LoL LEAGUES
import Aegis_Champ from './pages/game_pages/LoL/Leagues/Aegis_Leagues/Aegis_Champ'
import Aegis_Defenders from './pages/game_pages/LoL/Leagues/Aegis_Leagues/Aegis_Defenders'
import Aegis_Marauder from './pages/game_pages/LoL/Leagues/Aegis_Leagues/Aegis_Marauder'
import Aegis_Protectors from './pages/game_pages/LoL/Leagues/Aegis_Leagues/Aegis_Protectors'
import Aegis_Executioners from './pages/game_pages/LoL/Leagues/Aegis_Leagues/Aegis_Executioners'
import Frontpage_Aegis from './pages/game_pages/LoL/Leagues/Aegis_Leagues/Frontpage_Aegis'

import Blue_Otter_Diamond from './pages/game_pages/LoL/Leagues/Blue_Otter_Leagues/Blue_Otter_Diamond'
import Blue_Otter_Gold from './pages/game_pages/LoL/Leagues/Blue_Otter_Leagues/Blue_Otter_Gold'
import Blue_Otter_Draft from './pages/game_pages/LoL/Leagues/Blue_Otter_Leagues/Blue_Otter_Draft'
import Blue_Otter_Plat from './pages/game_pages/LoL/Leagues/Blue_Otter_Leagues/Blue_Otter_Plat'
import Blue_Otter_Masters from './pages/game_pages/LoL/Leagues/Blue_Otter_Leagues/Blue_Otter_Masters'
import Blue_Otter_Emerald from './pages/game_pages/LoL/Leagues/Blue_Otter_Leagues/Blue_Otter_Emerald'
import Frontpage_Otter from './pages/game_pages/LoL/Leagues/Blue_Otter_Leagues/Frontpage_Otter'

import Division_1 from './pages/game_pages/LoL/Leagues/Cobalt_Winds_Leagues/Division_1'
import Division_2 from './pages/game_pages/LoL/Leagues/Cobalt_Winds_Leagues/Division_2'
import Division_3 from './pages/game_pages/LoL/Leagues/Cobalt_Winds_Leagues/Division_3'
import Frontpage_Cobalt from './pages/game_pages/LoL/Leagues/Cobalt_Winds_Leagues/Frontpage_Cobalt'

import Frontpage_LCS from './pages/game_pages/LoL/Leagues/Low_Budget_Leagues/Frontpage_LCS'
import LCS_Commercial from './pages/game_pages/LoL/Leagues/Low_Budget_Leagues/LCS_Commercial'
import LCS_Economy from './pages/game_pages/LoL/Leagues/Low_Budget_Leagues/LCS_Economy'
import LCS_Executive from './pages/game_pages/LoL/Leagues/Low_Budget_Leagues/LCS_Executive'
import LCS_Financial from './pages/game_pages/LoL/Leagues/Low_Budget_Leagues/LCS_Financial'

import Argon from './pages/game_pages/LoL/Leagues/MetaShift_Leagues/Argon'
import Frontpage_MetaShift from './pages/game_pages/LoL/Leagues/MetaShift_Leagues/Frontpage_MetaShift'
import Nitrogen from './pages/game_pages/LoL/Leagues/MetaShift_Leagues/Nitrogen'
import Krypton from './pages/game_pages/LoL/Leagues/MetaShift_Leagues/Krypton'
import Neon from './pages/game_pages/LoL/Leagues/MetaShift_Leagues/Neon'
import Radon from './pages/game_pages/LoL/Leagues/MetaShift_Leagues/Radon'
import Xenon from './pages/game_pages/LoL/Leagues/MetaShift_Leagues/Xenon'

import Frontpage_Risen from './pages/game_pages/LoL/Leagues/Risen_Leagues/Frontpage_Risen'
import Risen_Champions from './pages/game_pages/LoL/Leagues/Risen_Leagues/Risen_Champions'
import Risen_Dominate from './pages/game_pages/LoL/Leagues/Risen_Leagues/Risen_Dominate'
import Risen_Draft from './pages/game_pages/LoL/Leagues/Risen_Leagues/Risen_Draft'
import Risen_Rampage from './pages/game_pages/LoL/Leagues/Risen_Leagues/Risen_Rampage'
import Risen_Unstoppable from './pages/game_pages/LoL/Leagues/Risen_Leagues/Risen_Unstoppable'

import Conqueror from './pages/game_pages/LoL/Leagues/Titan_Leagues/Conqueror'
import Divinity from './pages/game_pages/LoL/Leagues/Titan_Leagues/Divinity'
import Immortal_T from './pages/game_pages/LoL/Leagues/Titan_Leagues/Immortal_T'
import Vanquisher_T from './pages/game_pages/LoL/Leagues/Titan_Leagues/Vanquisher_T'
import Eternal_T from './pages/game_pages/LoL/Leagues/Titan_Leagues/Eternal_T'
import Gladiator_T from './pages/game_pages/LoL/Leagues/Titan_Leagues/Gladiator_T'
import Frontpage_Titan from './pages/game_pages/LoL/Leagues/Titan_Leagues/Frontpage_Titan'

import Black_Twitch_League from './pages/game_pages/LoL/Leagues/Black_Twitch_League'
import CLOL from './pages/game_pages/LoL/Leagues/CLOL'
import Corporate_LoL_League from './pages/game_pages/LoL/Leagues/Corporate_LoL_League'
import Playfly_LoL from './pages/game_pages/LoL/Leagues/Playfly_LoL'
import NECC_LoL from './pages/game_pages/LoL/Leagues/NECC_LoL'
import NSELol from './pages/game_pages/LoL/Leagues/NSELol'
import ECAC_Lol from './pages/game_pages/LoL/Leagues/ECAC_Lol'
import PlayVS_LoL from './pages/game_pages/LoL/Leagues/PlayVS_LoL'
import SDC_League from './pages/game_pages/LoL/Leagues/SDC_League'
import VantaGG_LoL from './pages/game_pages/LoL/Leagues/VantaGG_LoL'
//LoL LEAGUES

//ROCKET LEAGUE HEAD TO HEAD
import GanksterRL from './pages/game_pages/RocketLeague/Head-To-Head/GanksterRL'
import PraccRL from './pages/game_pages/RocketLeague/Head-To-Head/PraccRL'
//ROCKET LEAGUE HEAD TO HEAD

//ROCKET LEAGUE WAGERS
import CMGRL from './pages/game_pages/RocketLeague/Wagers/CMGRL'
import DropinRL from './pages/game_pages/RocketLeague/Wagers/DropinRL'
import SaloonRL from './pages/game_pages/RocketLeague/Wagers/SaloonRL'
import DubbzRL from './pages/game_pages/RocketLeague/Wagers/DubbzRL'
import EwagersRL from './pages/game_pages/RocketLeague/Wagers/EwagersRL'
//ROCKET LEAGUE WAGERS

//ROCKET LEAGUE LEAGUES
import Frontpage_Doubles from './pages/game_pages/RocketLeague/Leagues/Frontier_Doubles/Frontpage_Doubles'
import Elite from './pages/game_pages/RocketLeague/Leagues/Frontier_Doubles/Elite'
import Expert from './pages/game_pages/RocketLeague/Leagues/Frontier_Doubles/Expert'
import Origin from './pages/game_pages/RocketLeague/Leagues/Frontier_Doubles/Origin'
import Star from './pages/game_pages/RocketLeague/Leagues/Frontier_Doubles/Star'

import Frontpage_Frontline from './pages/game_pages/RocketLeague/Leagues/Frontline_Leagues/Frontpage_Frontline'
import FDS_Challenger from './pages/game_pages/RocketLeague/Leagues/Frontline_Leagues/FDS_Challenger'
import FDS_Champ from './pages/game_pages/RocketLeague/Leagues/Frontline_Leagues/FDS_Champ'
import FDS_Prospect from './pages/game_pages/RocketLeague/Leagues/Frontline_Leagues/FDS_Prospect'
import FDS_Vanguard from './pages/game_pages/RocketLeague/Leagues/Frontline_Leagues/FDS_Vanguard'

import Frontpage_Italian from './pages/game_pages/RocketLeague/Leagues/Italian_League/Frontpage_Italian'
import Serie_A from './pages/game_pages/RocketLeague/Leagues/Italian_League/Serie_A'
import Serie_B from './pages/game_pages/RocketLeague/Leagues/Italian_League/Serie_B'

import Academy from './pages/game_pages/RocketLeague/Leagues/MLE_Leagues/Academy'
import Champ from './pages/game_pages/RocketLeague/Leagues/MLE_Leagues/Champ'
import Foundation from './pages/game_pages/RocketLeague/Leagues/MLE_Leagues/Foundation'
import Frontpage_MLE from './pages/game_pages/RocketLeague/Leagues/MLE_Leagues/Frontpage_MLE'
import Master from './pages/game_pages/RocketLeague/Leagues/MLE_Leagues/Master'
import Premier from './pages/game_pages/RocketLeague/Leagues/MLE_Leagues/Premier'

import Challenger from './pages/game_pages/RocketLeague/Leagues/Nemesis_Leagues/Challenger'
import Frontpage_Nemesis from './pages/game_pages/RocketLeague/Leagues/Nemesis_Leagues/Frontpage_Nemesis'
import Novice from './pages/game_pages/RocketLeague/Leagues/Nemesis_Leagues/Novice'
import Prospect from './pages/game_pages/RocketLeague/Leagues/Nemesis_Leagues/Prospect'
import Rival from './pages/game_pages/RocketLeague/Leagues/Nemesis_Leagues/Rival'
import Titan from './pages/game_pages/RocketLeague/Leagues/Nemesis_Leagues/Titan'

import Divisions_OCE from './pages/game_pages/RocketLeague/Leagues/OCE_Leagues/Divisions_OCE'
import Frontpage_OCE from './pages/game_pages/RocketLeague/Leagues/OCE_Leagues/Frontpage_OCE'

import A from './pages/game_pages/RocketLeague/Leagues/RLPC/A'
import AA from './pages/game_pages/RocketLeague/Leagues/RLPC/AA'
import AAA from './pages/game_pages/RocketLeague/Leagues/RLPC/AAA'
import Frontpage_RLPC from './pages/game_pages/RocketLeague/Leagues/RLPC/Frontpage_RLPC'
import Major from './pages/game_pages/RocketLeague/Leagues/RLPC/Major'

import Frontpage_RSC from './pages/game_pages/RocketLeague/Leagues/Rocket_Soccer_Confederation/Frontpage_RSC'
import RSC_2v2 from './pages/game_pages/RocketLeague/Leagues/Rocket_Soccer_Confederation/RSC_2v2'
import RSC_3v3_EU from './pages/game_pages/RocketLeague/Leagues/Rocket_Soccer_Confederation/RSC_3v3_EU'
import RSC_3v3_NA from './pages/game_pages/RocketLeague/Leagues/Rocket_Soccer_Confederation/RSC_3v3_NA'

import Frontpage_URL from './pages/game_pages/RocketLeague/Leagues/URL_Leagues/Frontpage_URL'
import URL_2s from './pages/game_pages/RocketLeague/Leagues/URL_Leagues/URL_2s'
import URL_3s from './pages/game_pages/RocketLeague/Leagues/URL_Leagues/URL_3s'

import CCA from './pages/game_pages/RocketLeague/Leagues/CCA'
import CSMG_RL from './pages/game_pages/RocketLeague/Leagues/CSMG_RL'
import ECAC_RL from './pages/game_pages/RocketLeague/Leagues/ECAC_RL'
import EGFC_RL from './pages/game_pages/RocketLeague/Leagues/EGFC_RL'
import EGFH_HS_RL from './pages/game_pages/RocketLeague/Leagues/EGFH_HS_RL'
import HSEL_RL from './pages/game_pages/RocketLeague/Leagues/HSEL_RL'
import Playfly_RL from './pages/game_pages/RocketLeague/Leagues/Playfly_RL'
import NASEF_RL from './pages/game_pages/RocketLeague/Leagues/NASEF_RL'
import NECC_RL from './pages/game_pages/RocketLeague/Leagues/NECC_RL'
import PlayVS_HS_RL from './pages/game_pages/RocketLeague/Leagues/PlayVS_HS_RL'
import Raket_Ligaen from './pages/game_pages/RocketLeague/Leagues/Raket_Ligaen'
import TEC_RL from './pages/game_pages/RocketLeague/Leagues/TEC_RL'
import UGC_College from './pages/game_pages/RocketLeague/Leagues/UGC_College'
import UGC_HS_RL from './pages/game_pages/RocketLeague/Leagues/UGC_HS_RL'
import United_Rogue from './pages/game_pages/RocketLeague/Leagues/United_Rogue'
import VantaGG_HS_RL from './pages/game_pages/RocketLeague/Leagues/VantaGG_HS_RL'
import Finality_League from './pages/game_pages/RocketLeague/Leagues/Finality_League';
import CorporateRL from './pages/game_pages/RocketLeague/Leagues/CorporateRL';
import AirforceRL from './pages/game_pages/RocketLeague/Leagues/AirforceRL';
import NJCAAERL from './pages/game_pages/RocketLeague/Leagues/NJCAAERL';
import AELRL from './pages/game_pages/RocketLeague/Leagues/AELRL';
import FACEITRL from './pages/game_pages/RocketLeague/Leagues/FACEITRL';
import NSERL from './pages/game_pages/RocketLeague/Leagues/NSERL';
import AELHSRL from './pages/game_pages/RocketLeague/Leagues/AELHSRL';
//ROCKET LEAGUE LEAGUES

//VALORANT HEAD TO HEAD
import College_Hub from './pages/game_pages/Valorant/Head-To-Head/College_Hub'
import Dropin_VAL_XP from './pages/game_pages/Valorant/Head-To-Head/Dropin_VAL_XP'
import EsportScrim from './pages/game_pages/Valorant/Head-To-Head/EsportScrim'
import GanksterVAL from './pages/game_pages/Valorant/Head-To-Head/GanksterVAL'
import PraccVal from './pages/game_pages/Valorant/Head-To-Head/PraccVal'
//VALORANT HEAD TO HEAD

//VALORANT WAGERS
import DropinVAL from './pages/game_pages/Valorant/Wagers/DropinVAL'
import EwagersVal from './pages/game_pages/Valorant/Wagers/EwagersVal'
//VALORANT WAGERS

//VALORANT LEAGUES
import Frontpage_ECAC from './pages/game_pages/Valorant/Leagues/ECAC_Val/Frontpage_ECAC'
import DivisionA from './pages/game_pages/Valorant/Leagues/ECAC_Val/DivisionA'
import DivisionB from './pages/game_pages/Valorant/Leagues/ECAC_Val/DivisionB'
import DivisionC from './pages/game_pages/Valorant/Leagues/ECAC_Val/DivisionC'

import Academy_val from './pages/game_pages/Valorant/Leagues/Frontline_Leagues_Val/Academy_val'
import Frontpage_Frontline_val from './pages/game_pages/Valorant/Leagues/Frontline_Leagues_Val/Frontpage_Frontline_val'
import Prime from './pages/game_pages/Valorant/Leagues/Frontline_Leagues_Val/Prime'

import Gold from './pages/game_pages/Valorant/Leagues/LPL_Leagues/Gold'
import Silver from './pages/game_pages/Valorant/Leagues/LPL_Leagues/Silver'
import Bronze from './pages/game_pages/Valorant/Leagues/LPL_Leagues/Bronze'
import Frontpage_LPL from './pages/game_pages/Valorant/Leagues/LPL_Leagues/Frontpage_LPL'
import Open from './pages/game_pages/Valorant/Leagues/LPL_Leagues/Open'

import Frontpage_Playfly from './pages/game_pages/Valorant/Leagues/Playfly_Leagues/Frontpage_Playfly'
import Playfly_Open from './pages/game_pages/Valorant/Leagues/Playfly_Leagues/Playfly_Open'
import Playfly_VARSITY from './pages/game_pages/Valorant/Leagues/Playfly_Leagues/Playfly_VARSITY'

import CSMG_VAL from './pages/game_pages/Valorant/Leagues/CSMG_VAL'
import College_Val_Riot from './pages/game_pages/Valorant/Leagues/College_Val_Riot'
import EGFC_College_VAL from './pages/game_pages/Valorant/Leagues/EGFC_College_VAL'
import EGFH_VAL from './pages/game_pages/Valorant/Leagues/EGFH_VAL'
import HSEL_VAL from './pages/game_pages/Valorant/Leagues/HSEL_VAL'
import NASEF_VAL from './pages/game_pages/Valorant/Leagues/NASEF_VAL'
import NECC_Val from './pages/game_pages/Valorant/Leagues/NECC_Val'
import NJCAAE_Val from './pages/game_pages/Valorant/Leagues/NJCAAE_Val'
import TEC_VAL from './pages/game_pages/Valorant/Leagues/TEC_VAL'
import UGC_College_Val from './pages/game_pages/Valorant/Leagues/UGC_College_Val'
import Unified_Val from './pages/game_pages/Valorant/Leagues/Unified_Val'
import VantaGG_VAL from './pages/game_pages/Valorant/Leagues/VantaGG_VAL'
import CorporateVAL from './pages/game_pages/Valorant/Leagues/CorporateVAL'
import FACEITVal from './pages/game_pages/Valorant/Leagues/FACEITVal'
import NSEVal from './pages/game_pages/Valorant/Leagues/NSEVal'
//VALORANT LEAGUES JAKE

//COUNTERSTIKE 2 HEAD TO HEAD
import EsportScrimCS2 from './pages/game_pages/Counter-Strike2/Head-To-Head/EsportScrimCS2'
import FACEITCS2 from './pages/game_pages/Counter-Strike2/Head-To-Head/FACEITCS2'
import Pracc from './pages/game_pages/Counter-Strike2/Head-To-Head/Pracc'
import CKRAS from './pages/game_pages/Counter-Strike2/Head-To-Head/CKRAS'
//COUNTERSTIKE 2 HEAD TO HEAD

//COUNTERSTIKE 2 WAGERS
import DubbzCS2 from './pages/game_pages/Counter-Strike2/Wagers/DubbzCS2'
import ShowdownGaming_CS2 from './pages/game_pages/Counter-Strike2/Wagers/ShowdownGaming_CS2'
import GamerSaloon_CS2 from './pages/game_pages/Counter-Strike2/Wagers/GamerSaloon_CS2'
//COUNTERSTIKE 2 WAGERS

//COUNTERSTIKE 2 LEAGUES
import AEL_CS2 from './pages/game_pages/Counter-Strike2/Leagues/AEL_CS2'
import Corporate_CS2 from './pages/game_pages/Counter-Strike2/Leagues/Corporate_CS2'
import ECAC_CS2 from './pages/game_pages/Counter-Strike2/Leagues/ECAC_CS2'
import EGFC_CS2 from './pages/game_pages/Counter-Strike2/Leagues/EGFC_CS2'
import FACEITCollege_CS2 from './pages/game_pages/Counter-Strike2/Leagues/FACEITCollege_CS2'
import FACEITESEA from './pages/game_pages/Counter-Strike2/Leagues/FACEITESEA'
import Fast_Cup_CS2 from './pages/game_pages/Counter-Strike2/Leagues/Fast_Cup_CS2'
import FiReLEAGUE from './pages/game_pages/Counter-Strike2/Leagues/FiReLEAGUE'
import HSEL_CS2 from './pages/game_pages/Counter-Strike2/Leagues/HSEL_CS2'
import Playfly_CS2 from './pages/game_pages/Counter-Strike2/Leagues/Playfly_CS2'
import NECC_CS2 from './pages/game_pages/Counter-Strike2/Leagues/NECC_CS2'
import NJCAAE_CS2 from './pages/game_pages/Counter-Strike2/Leagues/NJCAAE_CS2'
import NSE_CS2 from './pages/game_pages/Counter-Strike2/Leagues/NSE_CS2'
import United_TwentyOne from './pages/game_pages/Counter-Strike2/Leagues/United_TwentyOne'
import Frontpage_LPLCS from './pages/game_pages/Counter-Strike2/Leagues/LPL_Leagues/Frontpage_LPLCS'
import LPL_Bronze from './pages/game_pages/Counter-Strike2/Leagues/LPL_Leagues/LPL_Bronze'
import LPL_Gold from './pages/game_pages/Counter-Strike2/Leagues/LPL_Leagues/LPL_Gold'
import LPL_Open from './pages/game_pages/Counter-Strike2/Leagues/LPL_Leagues/LPL_Open'
import LPL_Silver from './pages/game_pages/Counter-Strike2/Leagues/LPL_Leagues/LPL_Silver'
import Frontpage_hyper from './pages/game_pages/Counter-Strike2/Leagues/Hyperfibre_Leagues/Frontpage_hyper'
import Elite_hyper from './pages/game_pages/Counter-Strike2/Leagues/Hyperfibre_Leagues/Elite_hyper'
import Social_hyper from './pages/game_pages/Counter-Strike2/Leagues/Hyperfibre_Leagues/Social_hyper'
import Frontpage_scl from './pages/game_pages/Counter-Strike2/Leagues/SCL_Leagues/Frontpage_scl'
import Challenger_SCL from './pages/game_pages/Counter-Strike2/Leagues/SCL_Leagues/Challenger_SCL'
import Intermediate_SCL from './pages/game_pages/Counter-Strike2/Leagues/SCL_Leagues/Intermediate_SCL'
import Masters_SCL from './pages/game_pages/Counter-Strike2/Leagues/SCL_Leagues/Masters_SCL'
import Public_SCL from './pages/game_pages/Counter-Strike2/Leagues/SCL_Leagues/Public_SCL'
//COUNTERSTIKE 2 LEAGUES


import Halo_headtohead from './pages/game_pages/Halo/Halo_headtohead'
import Halo_Wagers from './pages/game_pages/Halo/Halo_Wagers'
import Halo_Leagues from './pages/game_pages/Halo/Halo_Leagues'
import Halo from './pages/game_pages/Halo/Halo'
import Halo_Lan from './pages/game_pages/Halo/Halo_Lan';

import Lol_Lan from './pages/game_pages/LoL/Lol_Lan';
import LoL from './pages/game_pages/LoL/Lol'
import Lol_headtohead from './pages/game_pages/LoL/Lol_headtohead'
import LoL_Wagers from './pages/game_pages/LoL/LoL_Wagers'
import Lol_Leagues from './pages/game_pages/LoL/Lol_Leagues'


import Wz_Lan from './pages/game_pages/Warzone/Wz_Lan';
import Wz from './pages/game_pages/Warzone/Wz';
import Wz_headtohead from './pages/game_pages/Warzone/Wz_headtohead';
import Wz_Wagers from './pages/game_pages/Warzone/Wz_Wagers';
import Wz_Leagues from './pages/game_pages/Warzone/Wz_Leagues';

import Val from './pages/game_pages/Valorant/Val';
import Val_headtohead from './pages/game_pages/Valorant/Val_headtohead';
import Val_Leagues from './pages/game_pages/Valorant/Val_Leagues';
import Val_Wagers from './pages/game_pages/Valorant/Val_Wagers';

import Rl from './pages/game_pages/RocketLeague/Rl';
import Rl_headtohead from './pages/game_pages/RocketLeague/Rl_headtohead';
import Rl_Leagues from './pages/game_pages/RocketLeague/Rl_Leagues';
import Rl_Wagers from './pages/game_pages/RocketLeague/Rl_Wagers';

import CS2 from './pages/game_pages/Counter-Strike2/CS2';
import CS2_headtohead from './pages/game_pages/Counter-Strike2/CS2_headtohead';
import CS2_Leagues from './pages/game_pages/Counter-Strike2/CS2_Leagues';
import CS2_Wagers from './pages/game_pages/Counter-Strike2/CS2_Wagers';

import Verification from './pages/more-pages/Verification';
import Becomeverified from './pages/more-pages/Becomeverified';
import Eventhost from './pages/more-pages/Eventhost';
import Eventhostrequest from './pages/more-pages/Eventhostrequest';
import Contactus from './pages/more-pages/Contactus';
// All CoD league pages will be imported the same way Snd_league was imported
// All that needs to be changed is the information after the last /
// Change from Snd_league to whatever the filename is
// Also make sure to have the name after import be spelled the exact same as the filename otherwise it will not work
import HOE_Leagues from './pages/game_pages/CoD/leagues/House_Of_Esports/HOE_Leagues';
import './Navbar.css'
//import './pages/more-pages/Verification.css';
//import './pages/more-pages/Eventhost.css';
//import './pages/more-pages/Contactus.css';
//import './pages/Comingsoon.css';
import './pages/more-pages/Verification.css';
import './pages/more-pages/Eventhost.css';
import './pages/more-pages/Contactus.css';
import Report from './pages/game_pages/Report';
import './pages/Comingsoon.css';
import './pages/more-pages/FAQ.css';
import VantaGG_CS2 from './pages/game_pages/Counter-Strike2/Leagues/VantaGG_CS2';

// Different components needed for homepage: Nav bar, on click events for each image + button currently just take to a random page, css (A LOT)


function App() {
  let component;
  let title;

  switch (window.location.pathname) {
    // To create a custom path to implement in the navbar simply hit enter after the last break;
    // type case like all the other cases and create a custom path, for example case "/cxp_league":
    // then for the component have it equal to the league page you imported
    // Finally have a break; after the component, everything should be the same format
    case "/":
      title = "Home | uSync";
      component = <Home />;
      break;
    case "/Comingsoon":
      title = "Coming Soon | uSync";
      component = <Comingsoon />
      break;
    case "/more/verification":
      title = "Verification | uSync";
      component = <Verification />
      break;
    case "/more/verification/becomeverified":
      title = "Become Verified | uSync";
      component = <Becomeverified />
      break;
    case "/more/eventhost":
      title = "Event Host | uSync";
      component = <Eventhost />
      break;
    case "/more/eventhost/eventhostrequest":
      title = "Event Host Request| uSync";
      component = <Eventhostrequest />
      break;
    case "/more/contactus":
      title = "Contact Us | uSync";
      component = <Contactus />
      break;
    case"/reportproblem":
    title = "Report Problem | uSync";
      component = <Report />
      break;
    case "/lans":
      title = "LANs | uSync";
      component = <Lans />
      break;
    case "/leagues":
      title = "Leagues | uSync";
      component = <Leagues />
      break;
    case "/tournaments":
      title = "Tournaments | uSync";
      component = <Tournaments />
      break;
    case "/games":
      title = "Games | uSync";
      component = <Games />
      break;
    case "/games/call-of-duty":
      title = "Call of Duty | uSync";
      component = <Cod />
      break;
    case "/games/call-of-duty/leagues":
      title = "Call of Duty Leagues | uSync";
      component = <Cod_Leagues />
      break;
    case "/games/call-of-duty/lans":
      title = "Call of Duty LANs | uSync";
      component = <Cod_Lan />
      break;
    case "/games/call-of-duty/wagers":
      title = "Call of Duty Wagers | uSync";
      component = <Cod_Wagers />
      break;
    case "/games/call-of-duty/head-to-head":
      title = "Call of Duty Head to Head | uSync";
      component = <Cod_headtohead />
      break;

    case "/games/halo":
      title = "Halo | uSync";
      component = <Halo />
      break;
    case "/games/halo/leagues":
      title = "Halo Leagues | uSync";
      component = <Halo_Leagues />
      break;
    case "/games/halo/lans":
      title = "Halo LANs | uSync";
      component = <Halo_Lan />
      break;
    case "/games/halo/wagers":
      title = "Halo Wagers | uSync";
      component = <Halo_Wagers />
      break;
    case "/games/halo/head-to-head":
      title = "Halo Head to Head | uSync";
      component = <Halo_headtohead />
      break;

    case "/games/LoL":
      title = "League of Legends | uSync";
      component = <LoL />
      break;
    case "/games/LoL/leagues":
      title = "League of Legends Leagues | uSync";
      component = <Lol_Leagues />
      break;
    case "/games/LoL/lans":
      title = "League of Legends LANs | uSync";
      component = <Lol_Lan />
      break;
    case "/games/LoL/wagers":
      title = "League of Legends Wagers | uSync";
      component = <LoL_Wagers />
      break;
    case "/games/LoL/head-to-head":
      title = "League of Legends Head to Head | uSync";
      component = <Lol_headtohead />
      break;

    case "/games/RocketLeague":
      title = "Rocket League | uSync";
      component = <Rl />
      break;
    case "/games/RocketLeague/leagues":
      title = "Rocket League Leagues | uSync";
      component = <Rl_Leagues />
      break;
    case "/games/RocketLeague/wagers":
      title = "Rocket League Wagers | uSync";
      component = <Rl_Wagers />
      break;
    case "/games/RocketLeague/head-to-head":
      title = "Rocket League Head to Head | uSync";
      component = <Rl_headtohead />
      break;

    case "/games/Valorant":
      title = "Valorant | uSync";
      component = <Val />
      break;
    case "/games/Valorant/leagues":
      title = "Valorant Leagues | uSync";
      component = <Val_Leagues />
      break;
    case "/games/Valorant/wagers":
      title = "Valorant Wagers | uSync";
      component = <Val_Wagers />
      break;
    case "/games/Valorant/head-to-head":
      title = "Valorant Head to Head | uSync";
      component = <Val_headtohead />
      break;

    case "/games/warzone":
      title = "Warzone | uSync";
      component = <Wz />
      break;
    case "/games/warzone/leagues":
      title = "Warzone Leagues | uSync";
      component = <Wz_Leagues />
      break;
    case "/games/warzone/lans":
      title = "Warzone LANs | uSync";
      component = <Wz_Lan />
      break;
    case "/games/warzone/wagers":
      title = "Warzone Wagers | uSync";
      component = <Wz_Wagers />
      break;
    case "/games/warzone/head-to-head":
      title = "Warzone Head to Head | uSync";
      component = <Wz_headtohead />
      break;

      case "/games/CS2":
        title = "Counter-Strike 2 | uSync";
        component = <CS2 />
        break;
      case "/games/CS2/leagues":
        title = "Counter-Strike 2 Leagues | uSync";
        component = <CS2_Leagues />
        break;
      case "/games/CS2/wagers":
        title = "Counter-Strike 2 Wagers | uSync";
        component = <CS2_Wagers />
        break;
      case "/games/CS2/head-to-head":
        title = "Counter-Strike 2 Head to Head | uSync";
        component = <CS2_headtohead />
        break;
  

    case "/games/call-of-duty/tournaments":
      title = "Call of Duty Tournaments | uSync";
      component = <CodTourneys />
      break;
    case "/games/call-of-duty/tournaments/experiment":
      title = "Experiement Tourneys"
      component = <Experiement_Tourney />
      break;       


    //COD LEAGUES
    case "/games/call-of-duty/leagues/snd-league":
      title = "SND League | uSync";
      component = <Snd_league />
      break;
      case "/games/call-of-duty/leagues/cod-rec-league":
        title = "Call of Duty Rec League | uSync";
      component = <COD_Rec_League />
      break;
    case "/games/call-of-duty/leagues/House-of-esports-leagues":
      title = "House of Esports Leagues | uSync";
      component = <HOE_Leagues />
      break;
    case "/games/call-of-duty/leagues/House-of-esports-leagues/hoe-amateur":
      title = "House of Esports Amateur League | uSync";
      component = <HOE_Amateur />
      break;
    case "/games/call-of-duty/leagues/House-of-esports-leagues/hoe-challengers":
      title = "House of Esports Challengers League | uSync";
      component = <HOE_Challengers />
      break;
    case "/games/call-of-duty/leagues/ccl-league":
      title = "College Call of Duty League | uSync";
      component = <CCL_League />
      break;
    case "/games/call-of-duty/leagues/cod-beer-league":
      title = "Call of Duty Beer League | uSync";
      component = <COD_Beer_League />
      break;
    case "/games/call-of-duty/leagues/corporate-cod-league":
      title = "Corporate Call of Duty League | uSync";
      component = <Corporate_COD_League />
      break;
    case "/games/call-of-duty/leagues/playfly-cod-league":
      title = "Playfly Call of Duty League | uSync";
      component = <Playfly_COD_League />
      break;
    case "/games/call-of-duty/leagues/u18-league":
      title = "U18 League | uSync";
      component = <U18_League />
      break;
    case "/games/call-of-duty/leagues/xp-league-cod":
      title = "XP Call of Duty League | uSync";
      component = <XP_League_Cod />
      break;
    case "/games/call-of-duty/leagues/united-rogue-league":
      title = "United Rogue Call of Duty League | uSync";
      component = <United_rogue_league />
      break;  
    case "/games/call-of-duty/leagues/tpc-womens-cod":
      title = "TPC Womens Call of Duty League | uSync";
      component = <TPCWomens />
      break;
    case "/games/call-of-duty/leagues/fcl":
      title = "FCL Call of Duty League | uSync";
      component = <FCL />
      break;    
    case "/games/call-of-duty/leagues/zoned-out":
      title = "Zoned Out Call of Duty League | uSync";
      component = <ZonedoutCOD />
      break;
    case "/games/call-of-duty/leagues/airforce-league":
      title = "Air Force Call of Duty League | uSync";
      component = <AFGL />
      break;
    case "/games/call-of-duty/leagues/kinetic-league":
      title = "Kinetic Call of Duty League | uSync";
      component = <Kinetic_league />
      break; 
    case "/games/call-of-duty/leagues/ecac":
      title = "ECAC Call of Duty League | uSync";
      component = <ECAC />
      break;
    case "/games/call-of-duty/leagues/njcaae":
      title = "NJCAAE Call of Duty League | uSync";
      component = <NJCAAE />
      break;
    case "/games/call-of-duty/leagues/ixi-esports":
      title = "IXI Call of Duty League | uSync";
      component = <Ixi_Esports />
      break;     
    case "/games/call-of-duty/leagues/cxp-leagues/cxp-leagues":
      title = "CXP Call of Duty Leagues | uSync";
      component = <CXP_Leagues />
      break;
    case "/games/call-of-duty/leagues/cxp-leagues/cxp-varsity":
      title = "CXP Varsity Call of Duty League | uSync";
      component = <CXP_Varsity />
      break;     
    case "/games/call-of-duty/leagues/cxp-leagues/cxp-club":
      title = "CXP Club Call of Duty League | uSync";
      component = <CXP_Club />
      break;     
    case "/games/call-of-duty/leagues/cxp-leagues/cxp-open":
      title = "CXP Open Call of Duty League | uSync";
      component = <CXP_Open />
      break;     
    // COD LEAGUES

    // COD HEAD TO HEAD
    case "/games/call-of-duty/head-to-head/arena":
      title = "The Arena Call of Duty | uSync";
      component = <Arena />
      break;
    case "/games/call-of-duty/head-to-head/cmg":
      title = "Checkmate Gaming Head to Head | uSync";
      component = <CMG_Xp />
      break;
    case "/games/call-of-duty/head-to-head/eagent":
      title = "Esports Agent Call of Duty | uSync";
      component = <Eagent />
      break;
    case "/games/call-of-duty/head-to-head/erivals":
      title = "Esport Rivals Call of Duty | uSync";
      component = <Erivals />
      break;
      // COD HEAD TO HEAD

    // COD WAGERS
    case "/games/call-of-duty/wagers/1v1me":
      title = "1v1me Call of Duty Wagers | uSync";
      component = <App_1v1ME />
      break;
    case "/games/call-of-duty/wagers/cmg":
      title = "Checkmate Gaming Call of Duty Wagers | uSync";
      component = <CMG_Wagers />
      break;
    case "/games/call-of-duty/wagers/dropin":
      title = "DropIn Gaming Call of Duty Wagers | uSync";
      component = <Dropin_Wagers />
      break;
    case "/games/call-of-duty/wagers/eagent":
      title = "Esports Agent Call of Duty Wagers | uSync";
      component = <EAgent_Wagers />
      break;
    case "/games/call-of-duty/wagers/oneup":
      title = "Oneup Call of Duty Wagers | uSync";
      component = <Oneup_Wagers />
      break;
    case "/games/call-of-duty/wagers/dubbz":
      title = "Dubbz Call of Duty Wagers | uSync";
      component = <Dubbz />
      break;
    case "/games/call-of-duty/wagers/the-esports-hub":
      title = "Esports Hub Call of Duty Wagers | uSync";
      component = <EsportsHub />
      break;
    case "/games/call-of-duty/wagers/ewagers":
      title = "Ewagers Call of Duty | uSync";
      component = <Ewagers />
      break;
      // COD WAGERS

    // HALO HEAD TO HEAD
    case "/games/halo/head-to-head/arena":
      title = "The Arena Halo | uSync";
      component = <ArenaHalo />
      break;
    case "/games/halo/head-to-head/rec-xp":
      title = "Halo Recreational Scrims | uSync";
      component = <RecXP />
      break;
    case "/games/halo/head-to-head/sauna":
      title = "The Sauna Halo | uSync";
      component = <Sauana />
      break;
    case "/games/halo/head-to-head/ugc-scrim":
      title = "Halo UGC Scrims | uSync";
      component = <UGC_Scrim />
      break;
    // HALO HEAD TO HEAD

    // HALO WAGERS
    case "/games/halo/wagers/cmg":
      title = "Checkmate Gaming Halo Wagers | uSync";
      component = <CMG_Halo />
      break;
    case "/games/halo/wagers/oneup":
      title = "Oneup Halo Wagers | uSync";
      component = <OneupHalo />
      break;
    case "/games/halo/wagers/esport-wagers":
      title = "Esport Wagers Halo | uSync";
      component = <EsportWagHalo />
      break;
    // HALO WAGERS

    // HALO LEAGUES
    case "/games/halo/leagues/halo-agent":
      title = "Halo Agent League | uSync";
      component = <Halo_Agent />
      break;
    case "/games/halo/leagues/halo-rec-league":
      title = "Halo Rec League | uSync";
      component = <Halo_Rec_League />
      break;
    case "/games/halo/leagues/ugc-halo":
      title = "UGC Halo League | uSync";
      component = <UGC_Halo />
      break;
    case "/games/halo/leagues/hsel":
      title = "HSEL Halo League | uSync";
      component = <HSELHalo />
      break;  
    // HALO LEAGUES

    // WARZONE HEAD TO HEAD
    case "/games/warzone/head-to-head/cmg":
      title = "Checkmate Gaming Warzone Head to Head | uSync";
      component = <CMGWZXP />
      break;
    case "/games/warzone/head-to-head/esport-rivals":
      title = "Esport Rivals Warzone Head to Head | uSync";
      component = <EsportRivals />
      break;
    // WARZONE HEAD TO HEAD

    // WARZONE WAGERS
    case "/games/warzone/wagers/cmg":
      title = "Checkmate Gaming Warzone Wagers | uSync";
      component = <CMG_WZ />
      break;
    case "/games/warzone/wagers/dropingaming":
      title = "DropIn Gaming Warzone Wagers | uSync";
      component = <DropinWZ />
      break;
    case "/games/warzone/wagers/gamersaloon":
      title = "GamerSaloon Warzone Wagers | uSync";
      component = <GamerSaloon />
      break;
    case "/games/warzone/wagers/oneup":
      title = "Oneup Warzone Wagers | uSync";
      component = <OneUpWZ />
      break;
    case "/games/warzone/wagers/1v1me":
      title = "1v1me Warzone Wagers | uSync";
      component = <Wager_1v1WZ />
      break;
    case "/games/warzone/wagers/dubbz":
      title = "Dubbz Warzone Wagers | uSync";
      component = <Dubbzwz />
      break;  
    case "/games/warzone/wagers/ewagers":
      title = "Ewagers Warzone | uSync";
      component = <EwagersWZ />
      break;    
    // WARZONE WAGERS

    // WARZONE LEAGUES
    case "/games/warzone/leagues/airforce":
      title = "Air Force Warzone League | uSync";
      component = <Airforce />
      break;
    case "/games/warzone/leagues/ghml":
      title = "GHML Warzone League | uSync";
      component = <GHML_Gaming_League />
      break;
    case "/games/warzone/leagues/njcaae":
      title = "NJCAAE Warzone League | uSync";
      component = <NJCAAE_League />
      break;
    // WARZONE LEAGUES

    // LoL HEAD TO HEAD
    case "/games/LoL/head-to-head/esport-scrim":
      title = "Esport Scrim League of Legends | uSync";
      component = <Esport_Scrim />
      break;
    case "/games/LoL/head-to-head/gankster":
      title = "Gankster League of Legends | uSync";
      component = <Gankster />
      break;
    case "/games/LoL/head-to-head/pracc":
      title = "Pracc League of Legends | uSync";
      component = <PraccLol />
      break;
    // LoL HEAD TO HEAD

    // LoL WAGERS
    case "/games/LoL/wagers/dropingaming":
      title = "DropIn Gaming League of Legends Wagers | uSync";
      component = <DropinLoL />
      break;
    case "/games/LoL/wagers/dubbz":
      title = "Dubbz League of Legends Wagers | uSync";
      component = <DubbzLol />
      break;
    case "/games/LoL/wagers/ewagers":
      title = "Ewagers League of Legends | uSync";
      component = <EwagersLol />
      break;  
    // LoL WAGERS

    // LoL LEAGUES
    case "/games/LoL/leagues/aegis-leagues":
      title = "Aegis Leagues | uSync";
      component = <Frontpage_Aegis />
      break;
    case "/games/LoL/leagues/aegis-leagues/champ":
      title = "Aegis Champion League | uSync";
      component = <Aegis_Champ />
      break;
    case "/games/LoL/leagues/aegis-leagues/defenders":
      title = "Aegis Defenders League | uSync";
      component = <Aegis_Defenders />
      break;
    case "/games/LoL/leagues/aegis-leagues/marauder":
      title = "Aegis Marauder League | uSync";
      component = <Aegis_Marauder />
      break;
    case "/games/LoL/leagues/aegis-leagues/protectors":
      title = "Aegis Protectors League | uSync";
      component = <Aegis_Protectors />
      break;
    case "/games/LoL/leagues/aegis-leagues/executioners":
      title = "Aegis Executioners League | uSync";
      component = <Aegis_Executioners />
      break;

    case "/games/LoL/leagues/blue-otter-leagues":
      title = "Blue Otter Leagues | uSync";
      component = <Frontpage_Otter />
      break;
    case "/games/LoL/leagues/blue-otter-leagues/diamond":
      title = "Blue Otter Diamond League | uSync";
      component = <Blue_Otter_Diamond />
      break;
    case "/games/LoL/leagues/blue-otter-leagues/gold":
      title = "Blue Otter Gold League | uSync";
      component = <Blue_Otter_Gold />
      break;
    case "/games/LoL/leagues/blue-otter-leagues/draft":
      title = "Blue Otter Draft League | uSync";
      component = <Blue_Otter_Draft />
      break;
    case "/games/LoL/leagues/blue-otter-leagues/plat":
      title = "Blue Otter Platinum League | uSync";
      component = <Blue_Otter_Plat />
      break;
    case "/games/LoL/leagues/blue-otter-leagues/emerald":
      title = "Blue Otter Emerald League | uSync";
      component = <Blue_Otter_Emerald />
      break;
    case "/games/LoL/leagues/blue-otter-leagues/masters":
      title = "Blue Otter Masters League | uSync";
      component = <Blue_Otter_Masters />
      break;
      
    case "/games/LoL/leagues/cobalt-winds-leagues":
      title = "Cobalt Winds Leagues | uSync";
      component = <Frontpage_Cobalt />
      break;
    case "/games/LoL/leagues/cobalt-winds-leagues/division1":
      title = "Cobalt Winds Division 1 League | uSync";
      component = <Division_1 />
      break;
    case "/games/LoL/leagues/cobalt-winds-leagues/division2":
      title = "Cobalt Winds Division 2 League | uSync";
      component = <Division_2 />
      break;
    case "/games/LoL/leagues/cobalt-winds-leagues/division3":
      title = "Cobalt Winds Division 3 League | uSync";
      component = <Division_3 />
      break;

    case "/games/LoL/leagues/low-budget-leagues":
      title = "Low Budget Leagues | uSync";
      component = <Frontpage_LCS />
      break;
    case "/games/LoL/leagues/low-budget-leagues/commercial":
      title = "Low Budget Commerical League | uSync";
      component = <LCS_Commercial />
      break;
    case "/games/LoL/leagues/low-budget-leagues/economy":
      title = "Low Budget Economy League | uSync";
      component = <LCS_Economy />
      break;
    case "/games/LoL/leagues/low-budget-leagues/executive":
      title = "Low Budget Executive League | uSync";
      component = <LCS_Executive />
      break;
    case "/games/LoL/leagues/low-budget-leagues/financial":
      title = "Low Budget Financial League | uSync";
      component = <LCS_Financial />
      break;

    case "/games/LoL/leagues/meta-shift-leagues":
      title = "MetaShift Leagues | uSync";
      component = <Frontpage_MetaShift />
      break;
    case "/games/LoL/leagues/meta-shift-leagues/argon":
      title = "MetaShift Argon League | uSync";
      component = <Argon />
      break;
    case "/games/LoL/leagues/meta-shift-leagues/nitrogen":
      title = "MetaShift Nitrogen League | uSync";
      component = <Nitrogen />
      break;
    case "/games/LoL/leagues/meta-shift-leagues/krypton":
      title = "MetaShift Krypton League | uSync";
      component = <Krypton />
      break;
    case "/games/LoL/leagues/meta-shift-leagues/neon":
      title = "MetaShift Neon League | uSync";
      component = <Neon />
      break;
    case "/games/LoL/leagues/meta-shift-leagues/radon":
      title = "MetaShift Radon League | uSync";
      component = <Radon />
      break;
    case "/games/LoL/leagues/meta-shift-leagues/xenon":
      title = "MetaShift Xenon League | uSync";
      component = <Xenon />
      break;

    case "/games/LoL/leagues/risen-leagues":
      title = "Risen League of Legends Leagues | uSync";
      component = <Frontpage_Risen />
      break;
    case "/games/LoL/leagues/risen-leagues/champions":
      title = "Risen Champions League | uSync";
      component = <Risen_Champions />
      break;
    case "/games/LoL/leagues/risen-leagues/dominate":
      title = "Risen Dominate League | uSync";
      component = <Risen_Dominate />
      break;
    case "/games/LoL/leagues/risen-leagues/draft":
      title = "Risen Draft League | uSync";
      component = <Risen_Draft />
      break;
    case "/games/LoL/leagues/risen-leagues/rampage":
      title = "Risen Rampage League | uSync";
      component = <Risen_Rampage />
      break;
    case "/games/LoL/leagues/risen-leagues/unstoppable":
      title = "Risen Unstoppable League | uSync";
      component = <Risen_Unstoppable />
      break;

    case "/games/LoL/leagues/titan-leagues":
      title = "Titan League of Legends Leagues | uSync";
      component = <Frontpage_Titan />
      break;
    case "/games/LoL/leagues/titan-leagues/divinity":
      title = "Titan Divinity League | uSync";
      component = <Divinity />
      break;
    case "/games/LoL/leagues/titan-leagues/conqueror":
      title = "Titan Conqueror League | uSync";
      component = <Conqueror />
      break;
    case "/games/LoL/leagues/titan-leagues/immortal":
      title = "Titan Immortal League | uSync";
      component = <Immortal_T />
      break;
    case "/games/LoL/leagues/titan-leagues/vanquisher":
      title = "Titan Vanquisher League | uSync";
      component = <Vanquisher_T />
      break;
    case "/games/LoL/leagues/titan-leagues/eternal":
      title = "Titan Eternal League | uSync";
      component = <Eternal_T />
      break;
    case "/games/LoL/leagues/titan-leagues/gladiator":
      title = "Titan Gladiator League | uSync";
      component = <Gladiator_T />
      break;

    case "/games/LoL/leagues/black-twitch-league":
      title = "Black Twitch League | uSync";
      component = <Black_Twitch_League />
      break;
    case "/games/LoL/leagues/clol":
      title = "Collegiate League of Legends League | uSync";
      component = <CLOL />
      break;
    case "/games/LoL/leagues/corporate-league":
      title = "Corporate League of Legends League | uSync";
      component = <Corporate_LoL_League />
      break;
    case "/games/LoL/leagues/playfly":
      title = "Playfly League of Legends League | uSync";
      component = <Playfly_LoL />
      break;
    case "/games/LoL/leagues/necc":
      title = "NECC League of Legends League | uSync";
      component = <NECC_LoL />
      break;
    case "/games/LoL/leagues/ecac":
      title = "ECAC League of Legends League | uSync";
      component = <ECAC_Lol />
      break;
    case "/games/LoL/leagues/nse":
      title = "NSE League of Legends League | uSync";
      component = <NSELol />
      break;
    case "/games/LoL/leagues/playvs":
      title = "PlayVS League of Legends League | uSync";
      component = <PlayVS_LoL />
      break;
    case "/games/LoL/leagues/sdc":
      title = "SDC League | uSync";
      component = <SDC_League />
      break;
    case "/games/LoL/leagues/vantagg":
      title = "VantaGG League of Legends League | uSync";
      component = <VantaGG_LoL />
      break;
    // LoL LEAGUES

    // ROCKET LEAGUE HEAD TO HEAD
    case "/games/RocketLeague/head-to-head/gankster":
      title = "Gankster Rocket League | uSync";
      component = <GanksterRL />
      break;
    case "/games/RocketLeague/head-to-head/pracc":
      title = "Pracc Rocket League | uSync";
      component = <PraccRL />
      break;
    // ROCKET LEAGUE HEAD TO HEAD

    // ROCKET LEAGUE LEAGUES
    case "/games/RocketLeague/leagues/frontier-doubles-leagues":
      title = "Frontier Doubles Leagues | uSync";
      component = <Frontpage_Doubles />
      break;
      case "/games/RocketLeague/leagues/frontier-doubles-leagues/elite":
        title = "Frontier Doubles Elite League | uSync";
      component = <Elite />
      break;
      case "/games/RocketLeague/leagues/frontier-doubles-leagues/expert":
        title = "Frontier Doubles Expert League | uSync";
      component = <Expert />
      break;
      case "/games/RocketLeague/leagues/frontier-doubles-leagues/origin":
        title = "Frontier Doubles Origin League | uSync";
      component = <Origin />
      break;
      case "/games/RocketLeague/leagues/frontier-doubles-leagues/star":
        title = "Frontier Doubles Star League | uSync";
      component = <Star />
      break;

      case "/games/RocketLeague/leagues/frontline-leagues":
        title = "Frontline Rocket League Leagues | uSync";
      component = <Frontpage_Frontline />
      break;
      case "/games/RocketLeague/leagues/frontline-leagues/challenger":
        title = "Frontline Challenger League | uSync";
      component = <FDS_Challenger />
      break;
      case "/games/RocketLeague/leagues/frontline-leagues/champ":
        title = "Frontline Champ League | uSync";
      component = <FDS_Champ />
      break;
      case "/games/RocketLeague/leagues/frontline-leagues/prospect":
        title = "Frontline Prospect League | uSync";
      component = <FDS_Prospect />
      break;
      case "/games/RocketLeague/leagues/frontline-leagues/vanguard":
        title = "Frontline Vanguard League | uSync";
      component = <FDS_Vanguard />
      break;

      case "/games/RocketLeague/leagues/italian-leagues":
        title = "Italian Rocket League Leagues | uSync";
      component = <Frontpage_Italian />
      break;
      case "/games/RocketLeague/leagues/italian-leagues/serie-a":
        title = "Italian Rocket League Serie A League | uSync";
      component = <Serie_A />
      break;
      case "/games/RocketLeague/leagues/italian-leagues/serie-b":
        title = "Italian Rocket League Serie B League | uSync";
      component = <Serie_B />
      break;

      case "/games/RocketLeague/leagues/mle-leagues":
        title = "Minor League Esports Rocket League Leagues | uSync";
      component = <Frontpage_MLE />
      break;
      case "/games/RocketLeague/leagues/mle-leagues/academy":
        title = "Minor League Esports Academy League | uSync";
      component = <Academy />
      break;
      case "/games/RocketLeague/leagues/mle-leagues/champ":
        title = "Minor League Esports Champ League | uSync";
      component = <Champ />
      break;
      case "/games/RocketLeague/leagues/mle-leagues/foundation":
        title = "Minor League Esports Foundation League | uSync";
      component = <Foundation />
      break;
      case "/games/RocketLeague/leagues/mle-leagues/master":
        title = "Minor League Esports Master League | uSync";
      component = <Master />
      break;
      case "/games/RocketLeague/leagues/mle-leagues/premier":
        title = "Minor League Esports Premier League | uSync";
      component = <Premier />
      break;

      case "/games/RocketLeague/leagues/nemesis-leagues":
        title = "Nemesis Rocket League Leagues | uSync";
      component = <Frontpage_Nemesis />
      break;
      case "/games/RocketLeague/leagues/nemesis-leagues/challenger":
        title = "Nemesis Challenger League | uSync";
      component = <Challenger />
      break;
      case "/games/RocketLeague/leagues/nemesis-leagues/novice":
        title = "Nemesis Novice League | uSync";
      component = <Novice />
      break;
      case "/games/RocketLeague/leagues/nemesis-leagues/prospect":
        title = "Nemesis Prospect League | uSync";
      component = <Prospect />
      break;
      case "/games/RocketLeague/leagues/nemesis-leagues/rival":
        title = "Nemesis Rival League | uSync";
      component = <Rival />
      break;
      case "/games/RocketLeague/leagues/nemesis-leagues/titan":
        title = "Nemesis Titan League | uSync";
      component = <Titan />
      break;

      case "/games/RocketLeague/leagues/oce-leagues":
        title = "Oceania Rocket League Draft Leagues | uSync";
      component = <Frontpage_OCE />
      break;
      case "/games/RocketLeague/leagues/oce-leagues/divisions":
        title = "Oceania Draft League | uSync";
      component = <Divisions_OCE />
      break;

      case "/games/RocketLeague/leagues/rlpc-leagues":
        title = "RLPC Rocket League Leagues | uSync";
      component = <Frontpage_RLPC />
      break;
      case "/games/RocketLeague/leagues/rlpc-leagues/a":
        title = "RLPC A League | uSync";
      component = <A />
      break;
      case "/games/RocketLeague/leagues/rlpc-leagues/aa":
        title = "RLPC Double A League | uSync";
      component = <AA />
      break;
      case "/games/RocketLeague/leagues/rlpc-leagues/aaa":
        title = "RLPC Triple A League | uSync";
      component = <AAA />
      break;
      case "/games/RocketLeague/leagues/rlpc-leagues/major":
        title = "RLPC Major League | uSync";
      component = <Major />
      break;

      case "/games/RocketLeague/leagues/rsc-leagues":
        title = "Rocket Soccar Confederation Leagues | uSync";
      component = <Frontpage_RSC />
      break;
      case "/games/RocketLeague/leagues/rsc-leagues/2v2":
        title = "RSC 2v2 League | uSync";
      component = <RSC_2v2 />
      break;
      case "/games/RocketLeague/leagues/rsc-leagues/3v3-eu":
        title = "RSC 3v3 EU League | uSync";
      component = <RSC_3v3_EU />
      break;
      case "/games/RocketLeague/leagues/rsc-leagues/3v3-na":
        title = "RSC 3v3 NA League | uSync";
      component = <RSC_3v3_NA />
      break;

      case "/games/RocketLeague/leagues/url-leagues":
        title = "Ultimate Rocket League Leagues | uSync";
      component = <Frontpage_URL />
      break;
      case "/games/RocketLeague/leagues/url-leagues/2s":
        title = "Ultimate Rocket League 2v2 League | uSync";
      component = <URL_2s />
      break;
      case "/games/RocketLeague/leagues/url-leagues/3s":
        title = "Ultimate Rocket League 3v3 League | uSync";
      component = <URL_3s />
      break;

      case "/games/RocketLeague/leagues/cca":
        title = "College Carball Association League | uSync";
      component = <CCA />
      break;
      case "/games/RocketLeague/leagues/csmg":
        title = "CSMG Rocket League League | uSync";
      component = <CSMG_RL />
      break;
      case "/games/RocketLeague/leagues/ecac":
        title = "ECAC Rocket League League | uSync";
      component = <ECAC_RL />
      break;
      case "/games/RocketLeague/leagues/egfc":
        title = "EGFC Rocket League League | uSync";
      component = <EGFC_RL />
      break;
      case "/games/RocketLeague/leagues/egfh":
        title = "EGFH Rocket League League | uSync";
      component = <EGFH_HS_RL />
      break;
      case "/games/RocketLeague/leagues/hsel":
        title = "High School Rocket League League | uSync";
      component = <HSEL_RL />
      break;
      case "/games/RocketLeague/leagues/playfly":
        title = "Playfly Rocket League League | uSync";
      component = <Playfly_RL />
      break;
      case "/games/RocketLeague/leagues/nasef":
        title = "NASEF Rocket League League | uSync";
      component = <NASEF_RL />
      break;
      case "/games/RocketLeague/leagues/necc":
        title = "NECC Rocket League League | uSync";
      component = <NECC_RL />
      break;
      case "/games/RocketLeague/leagues/playvs":
        title = "PlayVS Rocket League League | uSync";
      component = <PlayVS_HS_RL />
      break;
      case "/games/RocketLeague/leagues/raket-ligaen":
        title = "Raket Ligaen League | uSync";
      component = <Raket_Ligaen />
      break;
      case "/games/RocketLeague/leagues/tec":
        title = "The Esports Company Rocket League League | uSync";
      component = <TEC_RL />
      break;
      case "/games/RocketLeague/leagues/ugc":
        title = "UGC Rocket League League | uSync";
      component = <UGC_College />
      break;
      case "/games/RocketLeague/leagues/ugc-hs":
        title = "UGC High School Rocket League League | uSync";
      component = <UGC_HS_RL />
      break;
      case "/games/RocketLeague/leagues/united-rogue":
        title = "United Rogue Rocket League League | uSync";
      component = <United_Rogue />
      break;
      case "/games/RocketLeague/leagues/vantagg":
        title = "VantaGG Rocket League League | uSync";
      component = <VantaGG_HS_RL />
      break;
      case "/games/RocketLeague/leagues/finality":
        title = "Finality Rocket League League | uSync";
      component = <Finality_League />
      break;
      case "/games/RocketLeague/leagues/corporate":
        title = "Corporate Rocket League League | uSync";
      component = <CorporateRL />
      break;
      case "/games/RocketLeague/leagues/airforce":
        title = "Airforce Rocket League League | uSync";
      component = <AirforceRL />
      break;
      case "/games/RocketLeague/leagues/njcaae":
        title = "NJCAAE Rocket League League | uSync";
      component = <NJCAAERL />
      break;
      case "/games/RocketLeague/leagues/ael":
        title = "AEL Rocket League League | uSync";
      component = <AELRL />
      break;
      case "/games/RocketLeague/leagues/faceit":
        title = "FACEIT Rocket League League | uSync";
      component = <FACEITRL />
      break;
      case "/games/RocketLeague/leagues/nse":
        title = "NSE Rocket League League | uSync";
      component = <NSERL />
      break;
      case "/games/RocketLeague/leagues/aelhs":
        title = "AEL HS Rocket League League | uSync";
      component = <AELHSRL />
      break;
    // ROCKET LEAGUE LEAGUES

    // ROCKET LEAGUE WAGERS
    case "/games/RocketLeague/wagers/cmg":
      title = "Checkmate Gaming Rocket League Wagers | uSync";
      component = <CMGRL />
      break;
      case "/games/RocketLeague/wagers/dropingaming":
      title = "DropIn Gaming Rocket League Wagers | uSync";
      component = <DropinRL />
      break;
    case "/games/RocketLeague/wagers/gamersaloon":
      title = "GamerSaloon Rocket League Wagers | uSync";
      component = <SaloonRL />
      break;
    case "/games/RocketLeague/wagers/dubbz":
      title = "Dubbz Rocket League Wagers | uSync";
      component = <DubbzRL />
      break;
    case "/games/RocketLeague/wagers/ewagers":
      title = "Ewagers Rocket League | uSync";
      component = <EwagersRL />
      break;
    // ROCKET LEAGUE WAGERS

    // VALORANT HEAD TO HEAD
      case "/games/Valorant/head-to-head/college-hub":
        title = "College Valorant Hub Scrims | uSync";
      component = <College_Hub />
      break;
      case "/games/Valorant/head-to-head/dropingaming":
        title = "DropIn Gaming Valorant Head to Head | uSync";
      component = <Dropin_VAL_XP />
      break;
      case "/games/Valorant/head-to-head/esport-scrim":
        title = "Esport Scrim Valorant | uSync";
      component = <EsportScrim />
      break;
      case "/games/Valorant/head-to-head/gankster":
        title = "Gankster Valorant | uSync";
      component = <GanksterVAL />
      break;
      case "/games/Valorant/head-to-head/pracc":
        title = "Pracc Valorant | uSync";
      component = <PraccVal />
      break;
    // VALORANT HEAD TO HEAD

    // VALORANT WAGERS
      case "/games/Valorant/wagers/dropingaming":
        title = "DropIn Gaming Valorant Wagers | uSync";
      component = <DropinVAL />
      break;
      case "/games/Valorant/wagers/ewagers":
        title = "Ewagers Valorant | uSync";
      component = <EwagersVal />
      break;
    // VALORANT WAGERS

    // VALORANT LEAGUES
      case "/games/Valorant/leagues/ecac-leagues":
        title = "ECAC Valorant Leagues | uSync";
      component = <Frontpage_ECAC />
      break;
      case "/games/Valorant/leagues/ecac-leagues/division-a":
        title = "ECAC Valorant Division A League | uSync";
      component = <DivisionA />
      break;
      case "/games/Valorant/leagues/ecac-leagues/division-b":
        title = "ECAC Valorant Division B League | uSync";
      component = <DivisionB />
      break;
      case "/games/Valorant/leagues/ecac-leagues/division-c":
        title = "ECAC Valorant Division C League | uSync";
      component = <DivisionC />
      break;

      case "/games/Valorant/leagues/frontline-leagues":
        title = "Frontline Valorant Leagues | uSync";
      component = <Frontpage_Frontline_val />
      break;
      case "/games/Valorant/leagues/frontline-leagues/academy":
        title = "Frontline Valorant Academy League | uSync";
      component = <Academy_val />
      break;
      case "/games/Valorant/leagues/frontline-leagues/prime":
        title = "Frontline Valorant Prime League | uSync";
      component = <Prime />
      break;

      case "/games/Valorant/leagues/lpl-leagues":
        title = "Lets Play Live Valorant Leagues | uSync";
      component = <Frontpage_LPL />
      break;
      case "/games/Valorant/leagues/lpl-leagues/gold":
        title = "Lets Play Live Gold League | uSync";
      component = <Gold />
      break;
      case "/games/Valorant/leagues/lpl-leagues/silver":
        title = "Lets Play Live Silver League | uSync";
      component = <Silver />
      break;
      case "/games/Valorant/leagues/lpl-leagues/open":
        title = "Lets Play Live Open League | uSync";
      component = <Open />
      break;
      case "/games/Valorant/leagues/lpl-leagues/bronze":
        title = "Lets Play Live Bronze League | uSync";
      component = <Bronze />
      break;


      case "/games/Valorant/leagues/playfly-leagues":
        title = "Playfly Valorant Leagues | uSync";
      component = <Frontpage_Playfly />
      break;
      case "/games/Valorant/leagues/playfly-leagues/open":
        title = "Playfly Valorant Open League | uSync";
      component = <Playfly_Open />
      break;
      case "/games/Valorant/leagues/playfly-leagues/varsity":
        title = "Playfly Valorant Varsity League | uSync";
      component = <Playfly_VARSITY />
      break;

      case "/games/Valorant/leagues/csmg":
        title = "CSMG Valorant League | uSync";
      component = <CSMG_VAL />
      break;
      case "/games/Valorant/leagues/riot":
        title = "Collegiate Valorant League | uSync";
      component = <College_Val_Riot />
      break;
      case "/games/Valorant/leagues/egfc":
        title = "EGFC Valorant League | uSync";
      component = <EGFC_College_VAL />
      break;
      case "/games/Valorant/leagues/egfh":
        title = "EGFH Valorant League | uSync";
      component = <EGFH_VAL />
      break;
      case "/games/Valorant/leagues/hsel":
        title = "High School Esports Valorant League | uSync";
      component = <HSEL_VAL />
      break;
      case "/games/Valorant/leagues/nasef":
        title = "NASEF Valorant League | uSync";
      component = <NASEF_VAL />
      break;
      case "/games/Valorant/leagues/necc":
        title = "NECC Valorant League | uSync";
      component = <NECC_Val />
      break;
      case "/games/Valorant/leagues/njcaae":
        title = "NJCAAE Valorant League | uSync";
      component = <NJCAAE_Val />
      break;
      case "/games/Valorant/leagues/tec":
        title = "The Esports Company Valorant League | uSync";
      component = <TEC_VAL />
      break;
      case "/games/Valorant/leagues/ugc-college":
        title = "UGC Collegiate Valorant League | uSync";
      component = <UGC_College_Val />
      break;
      case "/games/Valorant/leagues/unified":
        title = "Unified Valorant League | uSync";
      component = <Unified_Val />
      break;
      case "/games/Valorant/leagues/vantagg":
        title = "VantaGG Valorant League | uSync";
      component = <VantaGG_VAL />
      break;
      case "/games/Valorant/leagues/corporate":
        title = "Corporate Valorant League | uSync";
      component = <CorporateVAL />
      break;
      case "/games/Valorant/leagues/faceit":
        title = "FACEIT Valorant League | uSync";
      component = <FACEITVal />
      break;
      case "/games/Valorant/leagues/nse":
        title = "NSE Valorant League | uSync";
      component = <NSEVal />
      break;
    // VALORANT LEAGUES JAKE

    // COUNTERSTRIKE 2 HEAD TO HEAD
    case "/games/CS2/head-to-head/esport-scrim":
      title = "Esport Scrim CS2 | uSync";
    component = <EsportScrimCS2 />
    break;
    case "/games/CS2/head-to-head/faceit":
      title = "FACEIT CS2 | uSync";
    component = <FACEITCS2 />
    break;
    case "/games/CS2/head-to-head/pracc":
      title = "Pracc CS2 | uSync";
    component = <Pracc />
    break;
    case "/games/CS2/head-to-head/ckras":
      title = "CKRAS CS2 | uSync";
    component = <CKRAS />
    break;
    // COUNTERSTRIKE 2 HEAD TO HEAD

    // COUNTERSTRIKE 2 WAGERS
    case "/games/CS2/wagers/dubbzcs2":
      title = "Dubbz CS2 Wagers | uSync";
    component = <DubbzCS2 />
    break;
    case "/games/CS2/wagers/showdowngaming_cs2":
      title = "Showdown Gaming CS2 Wagers | uSync";
    component = <ShowdownGaming_CS2 />
    break;
    case "/games/CS2/wagers/gamersaloon_cs2":
      title = "GamerSaloon CS2 Wagers | uSync";
    component = <GamerSaloon_CS2 />
    break;
    // COUNTERSTRIKE 2 WAGERS

    // COUNTERSTRIKE 2 LEAGUES
    case "/games/CS2/leagues/ael":
      title = "AEL CS2 League | uSync";
    component = <AEL_CS2 />
    break;
    case "/games/CS2/leagues/corporate":
      title = "Corporate CS2 League | uSync";
    component = <Corporate_CS2 />
    break;
    case "/games/CS2/leagues/ecac":
      title = "ECAC CS2 League | uSync";
    component = <ECAC_CS2 />
    break;
    case "/games/CS2/leagues/egfc":
      title = "EGFC CS2 League | uSync";
    component = <EGFC_CS2 />
    break;
    case "/games/CS2/leagues/faceitcollegiate":
      title = "FACEIT Collegiate CS2 League | uSync";
    component = <FACEITCollege_CS2 />
    break;
    case "/games/CS2/leagues/faceitesea":
      title = "FACEIT ESEA CS2 League | uSync";
    component = <FACEITESEA />
    break;
    case "/games/CS2/leagues/fastcup":
      title = "Fast Cup CS2 League | uSync";
    component = <Fast_Cup_CS2 />
    break;
    case "/games/CS2/leagues/fireleague":
      title = "FiReLEAGUE CS2 League | uSync";
    component = <FiReLEAGUE />
    break;
    case "/games/CS2/leagues/hsel":
      title = "HSEL CS2 League | uSync";
    component = <HSEL_CS2 />
    break;
    case "/games/CS2/leagues/playfly":
      title = "Playfly CS2 League | uSync";
    component = <Playfly_CS2 />
    break;
    case "/games/CS2/leagues/necc":
      title = "NECC CS2 League | uSync";
    component = <NECC_CS2 />
    break;
    case "/games/CS2/leagues/njcaae":
      title = "NJCAAE CS2 League | uSync";
    component = <NJCAAE_CS2 />
    break;
    case "/games/CS2/leagues/nse":
      title = "NSE CS2 League | uSync";
    component = <NSE_CS2 />
    break;
    case "/games/CS2/leagues/unitedtwentyone":
      title = "United TwentyOne CS2 League | uSync";
    component = <United_TwentyOne />
    break;
    case "/games/CS2/leagues/vantagg":
      title = "VantaGG CS2 League | uSync";
    component = <VantaGG_CS2 />
    break;
    case "/games/CS2/leagues/lpl-leagues":
      title = "LPL CS2 Leagues | uSync";
    component = <Frontpage_LPLCS />
    break;
    case "/games/CS2/leagues/lpl-leagues/lpl-gold":
      title = "LPL Gold CS2 League | uSync";
    component = <LPL_Gold />
    break;
    case "/games/CS2/leagues/lpl-leagues/lpl-silver":
      title = "LPL Silver CS2 League | uSync";
    component = <LPL_Silver />
    break;
    case "/games/CS2/leagues/lpl-leagues/lpl-bronze":
      title = "LPL Bronze CS2 League | uSync";
    component = <LPL_Bronze />
    break;
    case "/games/CS2/leagues/lpl-leagues/lpl-open":
      title = "LPL Open CS2 League | uSync";
    component = <LPL_Open />
    break;
    case "/games/CS2/leagues/hyperfibre-leagues":
      title = "Hyperfibre CS2 Leagues | uSync";
    component = <Frontpage_hyper />
    break;
    case "/games/CS2/leagues/hyperfibre-leagues/elite":
      title = "Hyperfibre Elite CS2 League | uSync";
    component = <Elite_hyper />
    break;
    case "/games/CS2/leagues/hyperfibre-leagues/social":
      title = "Hyperfibre Social CS2 League | uSync";
    component = <Social_hyper />
    break;
    case "/games/CS2/leagues/scl-leagues":
      title = "SCL CS2 Leagues | uSync";
    component = <Frontpage_scl />
    break;
    case "/games/CS2/leagues/scl-leagues/challenger":
      title = "SCL Challenger CS2 League | uSync";
    component = <Challenger_SCL />
    break;
    case "/games/CS2/leagues/scl-leagues/intermediate":
      title = "SCL Intermediate CS2 League | uSync";
    component = <Intermediate_SCL />
    break;
    case "/games/CS2/leagues/scl-leagues/masters":
      title = "SCL Masters CS2 League | uSync";
    component = <Masters_SCL />
    break;
    case "/games/CS2/leagues/scl-leagues/public":
      title = "SCL Public CS2 League | uSync";
    component = <Public_SCL />
    break;
  // COUNTERSTRIKE 2 LEAGUES

      case "/playground":
      component = <Playground />
      break;
      case "/more/playground-two":
      component = <PlaygroundTwo />
      break;
      case "/more/FAQ":
          title = "FAQ | uSync";
      component = <FAQ />
      break;
      case "/more/FAQ/How-We-Fix-It":
        title = "How We Fix It | uSync";
        component = <Fix />
        break;
      case "/more/FAQ/How-Esports-Can-Be-Better":
        title = "How Esports Can Be Better | uSync";
        component = <Better />
        break;
      case "/more/FAQ/The-Problem-With-Esports":
        title = "The Problem With Esports | uSync";
        component = <Problem />
        break;
      case "/more/FAQ/What-We-Provide":
        title = "What We Provide | uSync";
        component = <Provide />
        break;
      case "/more/FAQ/How-to-Join-an-Esports-League":
        title = "How to Join an Esports League | uSync";
        component = <Join />
        break;
  } 

  return (
    <div className="App">
      {/*}
      <Navbar />
      <Playground />
    */} <Helmet>
          <title>{title}</title>
        </Helmet>
        <Playground />
        <div>{component}</div>
    </div>    
  );
}

export default App;