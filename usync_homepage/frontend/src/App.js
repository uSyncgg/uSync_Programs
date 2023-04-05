import { useState } from 'react';
//import styles from './Home.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Comingsoon from './pages/Comingsoon';
import Games from './pages/Games';
import './App.css';
import Navbar from './Navbar';

import Cod_headtohead from './pages/game_pages/CoD/Cod_headtohead'
import Cod_Wagers from './pages/game_pages/CoD/Cod_Wagers'
import Cod_Leagues from './pages/game_pages/CoD/Cod_Leagues';
import Cod from './pages/game_pages/CoD/Cod';
import Cod_Lan from './pages/game_pages/CoD/Cod_Lan';
import CodTourneys from './pages/game_pages/CoD/CodTourneys';


//COD LEAGUES
import HOE_Amateur from './pages/game_pages/CoD/leagues/House_Of_Esports/HOE_Amateur'
import HOE_Challengers from './pages/game_pages/CoD/leagues/House_Of_Esports/HOE_Challengers'
import HOE_CrossPlay from './pages/game_pages/CoD/leagues/House_Of_Esports/HOE_CrossPlay'
import HOE_Masters from './pages/game_pages/CoD/leagues/House_Of_Esports/HOE_Masters'
import AWL_League from './pages/game_pages/CoD/leagues/AWL_League'
import CCL_League from './pages/game_pages/CoD/leagues/CCL_League'
import K7_League from './pages/game_pages/CoD/leagues/K7_League'
import EHUB_League from './pages/game_pages/CoD/leagues/EHUB_League'
import GEC_League from './pages/game_pages/CoD/leagues/GEC_League'
import Cgn_league_cod from './pages/game_pages/CoD/leagues/Cgn_league_cod'
import Chicago_COD_League from './pages/game_pages/CoD/leagues/Chicago_COD_League'
import Click_Gaming_LeagueCOD from './pages/game_pages/CoD/leagues/Click_Gaming_LeagueCOD'
import COD_Beer_League from './pages/game_pages/CoD/leagues/COD_Beer_League'
import College_XP from './pages/game_pages/CoD/leagues/College_XP'
import Corporate_COD_League from './pages/game_pages/CoD/leagues/Corporate_COD_League'
import FPC_League from './pages/game_pages/CoD/leagues/FPC_League'
import Kanna_Gaming_League from './pages/game_pages/CoD/leagues/Kanna_Gaming_League'
import Lunar_League from './pages/game_pages/CoD/leagues/Lunar_League'
import Snd_league from './pages/game_pages/CoD/leagues/Snd_league'
import NACAL_league from './pages/game_pages/CoD/leagues/NACAL_league'
import NACE_COD_League from './pages/game_pages/CoD/leagues/NACE_COD_League'
import U18_League from './pages/game_pages/CoD/leagues/U18_League'
import UNG_League from './pages/game_pages/CoD/leagues/UNG_League'
import XP_League_Cod from './pages/game_pages/CoD/leagues/XP_League_Cod'
//COD LEAGUES

//COD HEAD TO HEAD
import Arena from './pages/game_pages/CoD/Head-To-Head/Arena'
import CMG_Xp from './pages/game_pages/CoD/Head-To-Head/CMG_Xp'
import GB from './pages/game_pages/CoD/Head-To-Head/GB'
import UMG from './pages/game_pages/CoD/Head-To-Head/UMG'
//COD HEAD TO HEAD

//COD WAGERS
import App_1v1ME from './pages/game_pages/CoD/Wagers/App_1v1ME'
import CMG_Wagers from './pages/game_pages/CoD/Wagers/CMG_Wagers'
import Dropin_Wagers from './pages/game_pages/CoD/Wagers/Dropin_Wagers'
import EAgent_Wagers from './pages/game_pages/CoD/Wagers/EAgent_Wagers'
import Oneup_Wagers from './pages/game_pages/CoD/Wagers/Oneup_Wagers'
import Stakester from './pages/game_pages/CoD/Wagers/Stakester'
//COD WAGERS

//HALO HEAD TO HEAD
import ArenaHalo from './pages/game_pages/Halo/Head-To-Head/ArenaHalo'
import RecXP from './pages/game_pages/Halo/Head-To-Head/RecXP'
import Sauana from './pages/game_pages/Halo/Head-To-Head/Sauana'
import UGC_Scrim from './pages/game_pages/Halo/Head-To-Head/UGC_Scrim'
import UMGScrim from './pages/game_pages/Halo/Head-To-Head/UMGScrim'
//HALO HEAD TO HEAD

//HALO WAGERS
import CMG_Halo from './pages/game_pages/Halo/Wagers/CMG_Halo'
import OneupHalo from './pages/game_pages/Halo/Wagers/OneupHalo'
//HALO WAGERS


//HALO LEAGUES
import College_Halo from './pages/game_pages/Halo/Leagues/College_Halo'
import Corporate_Halo_League from './pages/game_pages/Halo/Leagues/Corporate_Halo_League'
import ECAC_Halo_League from './pages/game_pages/Halo/Leagues/ECAC_Halo_League'
import Halo_Agent from './pages/game_pages/Halo/Leagues/Halo_Agent'
import Halo_Rec_League from './pages/game_pages/Halo/Leagues/Halo_Rec_League'
import NACL_Halo from './pages/game_pages/Halo/Leagues/NACL_Halo'
import NECC_Halo from './pages/game_pages/Halo/Leagues/NECC_Halo'
import UGC_Halo from './pages/game_pages/Halo/Leagues/UGC_Halo'
//HALO LEAGUES

//WARZONE HEAD TO HEAD
import CMGWZXP from './pages/game_pages/Warzone/Head-To-Head/CMGWZXP'
import GBWZ from './pages/game_pages/Warzone/Head-To-Head/GBWZ'
import UMGWZ from './pages/game_pages/Warzone/Head-To-Head/UMGWZ'
//WARZONE HEAD TO HEAD

//WARZONE WAGERS
import CMG_WZ from './pages/game_pages/Warzone/Wagers/CMG_WZ'
import DropinWZ from './pages/game_pages/Warzone/Wagers/DropinWZ'
import GamerSaloon from './pages/game_pages/Warzone/Wagers/GamerSaloon'
import OneUpWZ from './pages/game_pages/Warzone/Wagers/OneUpWZ'
import StakeWZ from './pages/game_pages/Warzone/Wagers/StakeWZ'
import Wager_1v1WZ from './pages/game_pages/Warzone/Wagers/Wager_1v1WZ'
//WARZONE WAGERS

//WARZONE LEAGUES
import CCL_WZ_League from './pages/game_pages/Warzone/Leagues/CCL_WZ_League'
import CGN_WZ_League from './pages/game_pages/Warzone/Leagues/CGN_WZ_League'
import EHUB_WZ_League from './pages/game_pages/Warzone/Leagues/EHUB_WZ_League'
import GG_Gaming_League from './pages/game_pages/Warzone/Leagues/GG_Gaming_League'
import GHML_Gaming_League from './pages/game_pages/Warzone/Leagues/GHML_Gaming_League'
import NJCAAE_League from './pages/game_pages/Warzone/Leagues/NJCAAE_League'
//WARZONE LEAGUES

//LoL HEAD TO HEAD
import Esport_Scrim from './pages/game_pages/LoL/Head-To-Head/Esport_Scrim'
import Gankster from './pages/game_pages/LoL/Head-To-Head/Gankster'
//LoL HEAD TO HEAD

//LoL WAGERS
import DropinLoL from './pages/game_pages/LoL/Wagers/DropinLoL'
import StakeLoL from './pages/game_pages/LoL/Wagers/StakeLoL'
//LoL WAGERS

//LoL LEAGUES
import Aegis_Champ from './pages/game_pages/LoL/Leagues/Aegis_Leagues/Aegis_Champ'
import Aegis_Guardians from './pages/game_pages/LoL/Leagues/Aegis_Leagues/Aegis_Guardians'
import Aegis_Marauder from './pages/game_pages/LoL/Leagues/Aegis_Leagues/Aegis_Marauder'
import Aegis_Protectors from './pages/game_pages/LoL/Leagues/Aegis_Leagues/Aegis_Protectors'
import Aegis_Squire from './pages/game_pages/LoL/Leagues/Aegis_Leagues/Aegis_Squire'
import Frontpage_Aegis from './pages/game_pages/LoL/Leagues/Aegis_Leagues/Frontpage_Aegis'

import Blue_Otter_Diamond from './pages/game_pages/LoL/Leagues/Blue_Otter_Leagues/Blue_Otter_Diamond'
import Blue_Otter_Gold from './pages/game_pages/LoL/Leagues/Blue_Otter_Leagues/Blue_Otter_Gold'
import Blue_Otter_IBS from './pages/game_pages/LoL/Leagues/Blue_Otter_Leagues/Blue_Otter_IBS'
import Blue_Otter_Plat from './pages/game_pages/LoL/Leagues/Blue_Otter_Leagues/Blue_Otter_Plat'
import Frontpage_Otter from './pages/game_pages/LoL/Leagues/Blue_Otter_Leagues/Frontpage_Otter'

import CCS_Diamond from './pages/game_pages/LoL/Leagues/CCS_Leagues/CCS_Diamond'
import CCS_Plat from './pages/game_pages/LoL/Leagues/CCS_Leagues/CCS_Plat'
import Frontpage_CCS from './pages/game_pages/LoL/Leagues/CCS_Leagues/Frontpage_CCS'

import Division_1 from './pages/game_pages/LoL/Leagues/Cobalt_Winds_Leagues/Division_1'
import Division_2 from './pages/game_pages/LoL/Leagues/Cobalt_Winds_Leagues/Division_2'
import Division_3 from './pages/game_pages/LoL/Leagues/Cobalt_Winds_Leagues/Division_3'
import Frontpage_Cobalt from './pages/game_pages/LoL/Leagues/Cobalt_Winds_Leagues/Frontpage_Cobalt'

import Frontpage_DUO from './pages/game_pages/LoL/Leagues/Duo_Esports_Leagues/Frontpage_DUO'
import GPCS from './pages/game_pages/LoL/Leagues/Duo_Esports_Leagues/GPCS'
import IBSGCS from './pages/game_pages/LoL/Leagues/Duo_Esports_Leagues/IBSGCS'

import FFS_Heroic from './pages/game_pages/LoL/Leagues/Friend_or_Foe_Leagues/FFS_Heroic'
import FFS_Mythic from './pages/game_pages/LoL/Leagues/Friend_or_Foe_Leagues/FFS_Mythic'
import Frontpage_FFS from './pages/game_pages/LoL/Leagues/Friend_or_Foe_Leagues/Frontpage_FFS'

import Division_A from './pages/game_pages/LoL/Leagues/GG_Leagues/Division_A'
import Division_B from './pages/game_pages/LoL/Leagues/GG_Leagues/Division_B'
import Division_C from './pages/game_pages/LoL/Leagues/GG_Leagues/Division_C'
import Frontpage_GG from './pages/game_pages/LoL/Leagues/GG_Leagues/Frontpage_GG'

import Frontpage_LAS from './pages/game_pages/LoL/Leagues/LAS_Leagues/Frontpage_LAS'
import Tier_1 from './pages/game_pages/LoL/Leagues/LAS_Leagues/Tier_1'
import Tier_2 from './pages/game_pages/LoL/Leagues/LAS_Leagues/Tier_2'

import Frontpage_LCS from './pages/game_pages/LoL/Leagues/Low_Budget_Leagues/Frontpage_LCS'
import LCS_Commercial from './pages/game_pages/LoL/Leagues/Low_Budget_Leagues/LCS_Commercial'
import LCS_Economy from './pages/game_pages/LoL/Leagues/Low_Budget_Leagues/LCS_Economy'
import LCS_Executive from './pages/game_pages/LoL/Leagues/Low_Budget_Leagues/LCS_Executive'
import LCS_Financial from './pages/game_pages/LoL/Leagues/Low_Budget_Leagues/LCS_Financial'

import Argon from './pages/game_pages/LoL/Leagues/MetaShift_Leagues/Argon'
import Frontpage_MetaShift from './pages/game_pages/LoL/Leagues/MetaShift_Leagues/Frontpage_MetaShift'
import Helium from './pages/game_pages/LoL/Leagues/MetaShift_Leagues/Helium'
import Krypton from './pages/game_pages/LoL/Leagues/MetaShift_Leagues/Krypton'
import Neon from './pages/game_pages/LoL/Leagues/MetaShift_Leagues/Neon'
import Radon from './pages/game_pages/LoL/Leagues/MetaShift_Leagues/Radon'
import Xenon from './pages/game_pages/LoL/Leagues/MetaShift_Leagues/Xenon'

import Frontpage_Risen from './pages/game_pages/LoL/Leagues/Risen_Leagues/Frontpage_Risen'
import Risen_Champions from './pages/game_pages/LoL/Leagues/Risen_Leagues/Risen_Champions'
import Risen_Divine from './pages/game_pages/LoL/Leagues/Risen_Leagues/Risen_Divine'
import Risen_Dominate from './pages/game_pages/LoL/Leagues/Risen_Leagues/Risen_Dominate'
import Risen_Draft from './pages/game_pages/LoL/Leagues/Risen_Leagues/Risen_Draft'
import Risen_Rampage from './pages/game_pages/LoL/Leagues/Risen_Leagues/Risen_Rampage'
import Risen_Unstoppable from './pages/game_pages/LoL/Leagues/Risen_Leagues/Risen_Unstoppable'

import Conqueror from './pages/game_pages/LoL/Leagues/Titan_Leagues/Conqueror'
import Divinity from './pages/game_pages/LoL/Leagues/Titan_Leagues/Divinity'
import Frontpage_Titan from './pages/game_pages/LoL/Leagues/Titan_Leagues/Frontpage_Titan'

import Frontpage_Victoris from './pages/game_pages/LoL/Leagues/Victoris_Leagues/Frontpage_Victoris'
import Victoris_Amateur from './pages/game_pages/LoL/Leagues/Victoris_Leagues/Victoris_Amateur'
import Victoris_Amateur_Draft from './pages/game_pages/LoL/Leagues/Victoris_Leagues/Victoris_Amateur_Draft'
import Victoris_Rival from './pages/game_pages/LoL/Leagues/Victoris_Leagues/Victoris_Rival'
import Victoris_Rival_Draft from './pages/game_pages/LoL/Leagues/Victoris_Leagues/Victoris_Rival_Draft'
import Victoris_Triumph from './pages/game_pages/LoL/Leagues/Victoris_Leagues/Victoris_Triumph'

import Frontpage_Zero from './pages/game_pages/LoL/Leagues/ZeroGrav_Leagues/Frontpage_Zero'
import Zero_Gold from './pages/game_pages/LoL/Leagues/ZeroGrav_Leagues/Zero_Gold'
import Zero_IBS from './pages/game_pages/LoL/Leagues/ZeroGrav_Leagues/Zero_IBS'
import Zero_Platinum from './pages/game_pages/LoL/Leagues/ZeroGrav_Leagues/Zero_Platinum'

import Black_Twitch_League from './pages/game_pages/LoL/Leagues/Black_Twitch_League'
import CLOL from './pages/game_pages/LoL/Leagues/CLOL'
import Corporate_LoL_League from './pages/game_pages/LoL/Leagues/Corporate_LoL_League'
import Emerald_Draft_League from './pages/game_pages/LoL/Leagues/Emerald_Draft_League'
import HSEL_LoL from './pages/game_pages/LoL/Leagues/HSEL_LoL'
import NACE_LoL from './pages/game_pages/LoL/Leagues/NACE_LoL'
import NECC_LoL from './pages/game_pages/LoL/Leagues/NECC_LoL'
import OPSE_LoL from './pages/game_pages/LoL/Leagues/OPSE_LoL'
import PlayVS_LoL from './pages/game_pages/LoL/Leagues/PlayVS_LoL'
import Scottish_Esports_League from './pages/game_pages/LoL/Leagues/Scottish_Esports_League'
import SDC_League from './pages/game_pages/LoL/Leagues/SDC_League'
import VantaGG_LoL from './pages/game_pages/LoL/Leagues/VantaGG_LoL'
//LoL LEAGUES

//ROCKET LEAGUE HEAD TO HEAD
import GanksterRL from './pages/game_pages/RocketLeague/Head-To-Head/GanksterRL'
//ROCKET LEAGUE HEAD TO HEAD

//ROCKET LEAGUE WAGERS
import CMGRL from './pages/game_pages/RocketLeague/Wagers/CMGRL'
import DropinRL from './pages/game_pages/RocketLeague/Wagers/DropinRL'
import SaloonRL from './pages/game_pages/RocketLeague/Wagers/SaloonRL'
import StakeRL from './pages/game_pages/RocketLeague/Wagers/StakeRL'
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
import Independent from './pages/game_pages/RocketLeague/Leagues/RLPC/Independent'
import Major from './pages/game_pages/RocketLeague/Leagues/RLPC/Major'

import Frontpage_RSC from './pages/game_pages/RocketLeague/Leagues/Rocket_Soccer_Confederation/Frontpage_RSC'
import RSC_2v2 from './pages/game_pages/RocketLeague/Leagues/Rocket_Soccer_Confederation/RSC_2v2'
import RSC_3v3_EU from './pages/game_pages/RocketLeague/Leagues/Rocket_Soccer_Confederation/RSC_3v3_EU'
import RSC_3v3_NA from './pages/game_pages/RocketLeague/Leagues/Rocket_Soccer_Confederation/RSC_3v3_NA'

import Frontpage_URL from './pages/game_pages/RocketLeague/Leagues/URL_Leagues/Frontpage_URL'
import URL_2s from './pages/game_pages/RocketLeague/Leagues/URL_Leagues/URL_2s'
import URL_3s from './pages/game_pages/RocketLeague/Leagues/URL_Leagues/URL_3s'

import Blue_Bird from './pages/game_pages/RocketLeague/Leagues/Blue_Bird'
import CCA from './pages/game_pages/RocketLeague/Leagues/CCA'
import CSMG_RL from './pages/game_pages/RocketLeague/Leagues/CSMG_RL'
import ECAC_RL from './pages/game_pages/RocketLeague/Leagues/ECAC_RL'
import EGFC_RL from './pages/game_pages/RocketLeague/Leagues/EGFC_RL'
import EGFH_HS_RL from './pages/game_pages/RocketLeague/Leagues/EGFH_HS_RL'
import Elite_Series from './pages/game_pages/RocketLeague/Leagues/Elite_Series'
import HBCU_RL from './pages/game_pages/RocketLeague/Leagues/HBCU_RL'
import HSEL_RL from './pages/game_pages/RocketLeague/Leagues/HSEL_RL'
import Master_Cup from './pages/game_pages/RocketLeague/Leagues/Master_Cup'
import NACE_RL from './pages/game_pages/RocketLeague/Leagues/NACE_RL'
import NACL_Rl from './pages/game_pages/RocketLeague/Leagues/NACL_Rl'
import NASEF_RL from './pages/game_pages/RocketLeague/Leagues/NASEF_RL'
import NECC_RL from './pages/game_pages/RocketLeague/Leagues/NECC_RL'
import NECL_HS_RL from './pages/game_pages/RocketLeague/Leagues/NECL_HS_RL'
import Nitro_League from './pages/game_pages/RocketLeague/Leagues/Nitro_League'
import OPSE_RL from './pages/game_pages/RocketLeague/Leagues/OPSE_RL'
import PlayVS_HS_RL from './pages/game_pages/RocketLeague/Leagues/PlayVS_HS_RL'
import Raket_Ligaen from './pages/game_pages/RocketLeague/Leagues/Raket_Ligaen'
import Scottish_Esports_RL from './pages/game_pages/RocketLeague/Leagues/Scottish_Esports_RL'
import TEC_RL from './pages/game_pages/RocketLeague/Leagues/TEC_RL'
import UGC_College from './pages/game_pages/RocketLeague/Leagues/UGC_College'
import UGC_HS_RL from './pages/game_pages/RocketLeague/Leagues/UGC_HS_RL'
import United_Rogue from './pages/game_pages/RocketLeague/Leagues/United_Rogue'
import VantaGG_HS_RL from './pages/game_pages/RocketLeague/Leagues/VantaGG_HS_RL'
//ROCKET LEAGUE LEAGUES




import Halo_headtohead from './pages/game_pages/Halo/Halo_headtohead'
import Halo_Wagers from './pages/game_pages/Halo/Halo_Wagers'
import Halo_Leagues from './pages/game_pages/Halo/Halo_Leagues'
import Halo from './pages/game_pages/Halo/Halo'
import Halo_Lan from './pages/game_pages/Halo/Halo_Lan';

import Lol_Lan from './pages/game_pages/LoL/Lol_Lan';
import LoL from './pages/game_pages/LoL/LoL'
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


import Verification from './pages/more-pages/Verification';
import Becomeverified from './pages/more-pages/Becomeverified';
import Eventhost from './pages/more-pages/Eventhost';
import Contactus from './pages/more-pages/Contactus';
// All CoD league pages will be imported the same way Snd_league was imported
// All that needs to be changed is the information after the last /
// Change from Snd_league to whatever the filename is
// Also make sure to have the name after import be spelled the exact same as the filename otherwise it will not work
import HOE_Leagues from './pages/game_pages/CoD/leagues/House_Of_Esports/HOE_Leagues';
import './style.css'
//import './pages/more-pages/Verification.css';
//import './pages/more-pages/Eventhost.css';
//import './pages/more-pages/Contactus.css';
//import './pages/Comingsoon.css';
import './pages/more-pages/Verification.css';
import './pages/more-pages/Eventhost.css';
import './pages/more-pages/Contactus.css';
import './pages/Comingsoon.css';

// Different components needed for homepage: Nav bar, on click events for each image + button currently just take to a random page, css (A LOT)


function App() {
  let component;
  console.log(window.location.pathname);
  switch (window.location.pathname) {
    // To create a custom path to implement in the navbar simply hit enter after the last break;
    // type case like all the other cases and create a custom path, for example case "/cxp_league":
    // then for the component have it equal to the league page you imported
    // Finally have a break; after the component, everything should be the same format
    case "/":
      component = <Home />
      break;
    case "/Comingsoon":
      component = <Comingsoon />
      break;
    case "/Verification":
      component = <Verification />
      break;
    case "/Becomeverified":
      component = <Becomeverified />
      break;
    case "/Eventhost":
      component = <Eventhost />
      break;
    case "/Contactus":
      component = <Contactus />
      break;

    case "/games":
      component = <Games />
      break;
    case "/games/call-of-duty":
      component = <Cod />
      break;
    case "/games/call-of-duty/leagues":
      component = <Cod_Leagues />
      break;
    case "/games/call-of-duty/lans":
      component = <Cod_Lan />
      break;
    case "/games/call-of-duty/wagers":
      component = <Cod_Wagers />
      break;
    case "/games/call-of-duty/head-to-head":
      component = <Cod_headtohead />
      break;

    case "/games/Halo":
      component = <Halo />
      break;
    case "/games/Halo/leagues":
      component = <Halo_Leagues />
      break;
    case "/games/Halo/lans":
      component = <Halo_Lan />
      break;
    case "/games/Halo/wagers":
      component = <Halo_Wagers />
      break;
    case "/games/halo/head-to-head":
      component = <Halo_headtohead />
      break;

    case "/games/LoL":
      component = <LoL />
      break;
    case "/games/LoL/leagues":
      component = <Lol_Leagues />
      break;
    case "/games/LoL/lans":
      component = <Lol_Lan />
      break;
    case "/games/LoL/wagers":
      component = <LoL_Wagers />
      break;
    case "/games/LoL/head-to-head":
      component = <Lol_headtohead />
      break;

    case "/games/RocketLeague":
      component = <Rl />
      break;
    case "/games/RocketLeague/leagues":
      component = <Rl_Leagues />
      break;
    case "/games/RocketLeague/wagers":
      component = <Rl_Wagers />
      break;
    case "/games/RocketLeague/head-to-head":
      component = <Rl_headtohead />
      break;

    case "/games/Valorant":
      component = <Val />
      break;
    case "/games/Valorant/leagues":
      component = <Val_Leagues />
      break;
    case "/games/Valorant/wagers":
      component = <Val_Wagers />
      break;
    case "/games/Valorant/head-to-head":
      component = <Val_headtohead />
      break;

    case "/games/Warzone":
      component = <Wz />
      break;
    case "/games/Warzone/leagues":
      component = <Wz_Leagues />
      break;
    case "/games/Warzone/lans":
      component = <Wz_Lan />
      break;
    case "/games/Warzone/wagers":
      component = <Wz_Wagers />
      break;
    case "/games/Warzone/head-to-head":
      component = <Wz_headtohead />
      break;


    case "/CoD/Tournaments":
      component = <CodTourneys />
      break;
    // case "/test":
    //   component = <Test />
    //   break;       


    //COD LEAGUES
    case "/games/call-of-duty/leagues/snd-league":
      component = <Snd_league />
      break;
    case "/NACAL-league":
      component = <NACAL_league />
      break;
    case "/games/call-of-duty/leagues/awl-league":
      component = <AWL_League />
      break;
    case "/games/call-of-duty/leagues/House-of-esports-leagues":
      component = <HOE_Leagues />
      break;
    case "/games/call-of-duty/leagues/House-of-esports-leagues/hoe-amateur":
      component = <HOE_Amateur />
      break;
    case "/games/call-of-duty/leagues/House-of-esports-leagues/hoe-challengers":
      component = <HOE_Challengers />
      break;
    case "/games/call-of-duty/leagues/House-of-esports-leagues/hoe-crossplay":
      component = <HOE_CrossPlay />
      break;
    case "/games/call-of-duty/leagues/House-of-esports-leagues/hoe-masters":
      component = <HOE_Masters />
      break;
    case "/games/call-of-duty/leagues/ccl-league":
      component = <CCL_League />
      break;
    case "/games/call-of-duty/leagues/ehub-league":
      component = <EHUB_League />
      break;
    case "/games/call-of-duty/leagues/gec-league":
      component = <GEC_League />
      break;
    case "/games/call-of-duty/leagues/k7-league":
      component = <K7_League />
      break;
    case "/games/call-of-duty/leagues/cgn-league-cod":
      component = <Cgn_league_cod />
      break;
    case "/games/call-of-duty/leagues/chicago-league-cod":
      component = <Chicago_COD_League />
      break;
    case "/games/call-of-duty/leagues/click-gaming-league":
      component = <Click_Gaming_LeagueCOD />
      break;
    case "/games/call-of-duty/leagues/cod-beer-league":
      component = <COD_Beer_League />
      break;
    case "/games/call-of-duty/leagues/college-xp":
      component = <College_XP />
      break;
    case "/games/call-of-duty/leagues/corporate-cod-league":
      component = <Corporate_COD_League />
      break;
    case "/games/call-of-duty/leagues/fpc-league":
      component = <FPC_League />
      break;
    case "/games/call-of-duty/leagues/kanna-gaming-league":
      component = <Kanna_Gaming_League />
      break;
    case "/games/call-of-duty/leagues/lunar-league":
      component = <Lunar_League />
      break;
    case "/games/call-of-duty/leagues/nace-cod-league":
      component = <NACE_COD_League />
      break;
    case "/games/call-of-duty/leagues/u18-league":
      component = <U18_League />
      break;
    case "/games/call-of-duty/leagues/ung-league":
      component = <UNG_League />
      break;
    case "/games/call-of-duty/leagues/xp-league-cod":
      component = <XP_League_Cod />
      break;
    // COD LEAGUES

    // COD HEAD TO HEAD
    case "/games/call-of-duty/head-to-head/arena":
      component = <Arena />
      break;
    case "/games/call-of-duty/head-to-head/cmg":
      component = <CMG_Xp />
      break;
    case "/games/call-of-duty/head-to-head/gb":
      component = <GB />
      break;
    case "/games/call-of-duty/head-to-head/umg":
      component = <UMG />
      break;
    // COD HEAD TO HEAD

    // COD WAGERS
    case "/games/call-of-duty/wagers/1v1me":
      component = <App_1v1ME />
      break;
    case "/games/call-of-duty/wagers/cmg":
      component = <CMG_Wagers />
      break;
    case "/games/call-of-duty/wagers/dropin":
      component = <Dropin_Wagers />
      break;
    case "/games/call-of-duty/wagers/eagent":
      component = <EAgent_Wagers />
      break;
    case "/games/call-of-duty/wagers/oneup":
      component = <Oneup_Wagers />
      break;
    case "/games/call-of-duty/wagers/stakester":
      component = <Stakester />
      break;
    // COD WAGERS

    // HALO HEAD TO HEAD
    case "/games/halo/head-to-head/arena":
      component = <ArenaHalo />
      break;
    case "/games/halo/head-to-head/rec-xp":
      component = <RecXP />
      break;
    case "/games/halo/head-to-head/sauna":
      component = <Sauana />
      break;
    case "/games/halo/head-to-head/ugc-scrim":
      component = <UGC_Scrim />
      break;
    case "/games/halo/head-to-head/umg-scrim":
      component = <UMGScrim />
      break;
    // HALO HEAD TO HEAD

    // HALO WAGERS
    case "/games/halo/wagers/cmg":
      component = <CMG_Halo />
      break;
    case "/games/halo/wagers/oneup":
      component = <OneupHalo />
      break;
    // HALO WAGERS

    // HALO LEAGUES
    case "/games/halo/leagues/college-halo":
      component = <College_Halo />
      break;
    case "/games/halo/leagues/corporate-halo":
      component = <Corporate_Halo_League />
      break;
    case "/games/halo/leagues/ecac":
      component = <ECAC_Halo_League />
      break;
    case "/games/halo/leagues/halo-agent":
      component = <Halo_Agent />
      break;
    case "/games/halo/leagues/halo-rec-league":
      component = <Halo_Rec_League />
      break;
    case "/games/halo/leagues/nacl":
      component = <NACL_Halo />
      break;
    case "/games/halo/leagues/necc":
      component = <NECC_Halo />
      break;
    case "/games/halo/leagues/ugc-halo":
      component = <UGC_Halo />
      break;
    // HALO LEAGUES

    // WARZONE HEAD TO HEAD
    case "/games/warzone/head-to-head/cmg":
      component = <CMGWZXP />
      break;
    case "/games/warzone/head-to-head/gb":
      component = <GBWZ />
      break;
    case "/games/warzone/head-to-head/umg":
      component = <UMGWZ />
      break;
    // WARZONE HEAD TO HEAD

    // WARZONE WAGERS
    case "/games/warzone/wagers/cmg":
      component = <CMG_WZ />
      break;
    case "/games/warzone/wagers/dropingaming":
      component = <DropinWZ />
      break;
    case "/games/warzone/wagers/gamersaloon":
      component = <GamerSaloon />
      break;
    case "/games/warzone/wagers/oneup":
      component = <OneUpWZ />
      break;
    case "/games/warzone/wagers/stakester":
      component = <StakeWZ />
      break;
    case "/games/warzone/wagers/1v1me":
      component = <Wager_1v1WZ />
      break;
    // WARZONE WAGERS

    // WARZONE LEAGUES
    case "/games/warzone/leagues/ccl":
      component = <CCL_WZ_League />
      break;
    case "/games/warzone/leagues/cgn":
      component = <CGN_WZ_League />
      break;
    case "/games/warzone/leagues/ehub":
      component = <EHUB_WZ_League />
      break;
    case "/games/warzone/leagues/gg-gaming":
      component = <GG_Gaming_League />
      break;
    case "/games/warzone/leagues/ghml":
      component = <GHML_Gaming_League />
      break;
    case "/games/warzone/leagues/njcaae":
      component = <NJCAAE_League />
      break;
    // WARZONE LEAGUES

    // LoL HEAD TO HEAD
    case "/games/LoL/head-to-head/esport-scrim":
      component = <Esport_Scrim />
      break;
    case "/games/LoL/head-to-head/gankster":
      component = <Gankster />
      break;
    // LoL HEAD TO HEAD

    // LoL WAGERS
    case "/games/LoL/wagers/dropingaming":
      component = <DropinLoL />
      break;
    case "/games/LoL/wagers/stakester":
      component = <StakeLoL />
      break;
    // LoL WAGERS

    // LoL LEAGUES
    case "/games/LoL/leagues/aegis-leagues":
      component = <Frontpage_Aegis />
      break;
    case "/games/LoL/leagues/aegis-leagues/champ":
      component = <Aegis_Champ />
      break;
    case "/games/LoL/leagues/aegis-leagues/guardians":
      component = <Aegis_Guardians />
      break;
    case "/games/LoL/leagues/aegis-leagues/marauder":
      component = <Aegis_Marauder />
      break;
    case "/games/LoL/leagues/aegis-leagues/protectors":
      component = <Aegis_Protectors />
      break;
    case "/games/LoL/leagues/aegis-leagues/squire":
      component = <Aegis_Squire />
      break;

    case "/games/LoL/leagues/blue-otter-leagues":
      component = <Frontpage_Otter />
      break;
    case "/games/LoL/leagues/blue-otter-leagues/diamond":
      component = <Blue_Otter_Diamond />
      break;
    case "/games/LoL/leagues/blue-otter-leagues/gold":
      component = <Blue_Otter_Gold />
      break;
    case "/games/LoL/leagues/blue-otter-leagues/ibs":
      component = <Blue_Otter_IBS />
      break;
    case "/games/LoL/leagues/blue-otter-leagues/plat":
      component = <Blue_Otter_Plat />
      break;

    case "/games/LoL/leagues/ccs-leagues":
      component = <Frontpage_CCS />
      break;
    case "/games/LoL/leagues/ccs-leagues/diamond":
      component = <CCS_Diamond />
      break;
    case "/games/LoL/leagues/ccs-leagues/plat":
      component = <CCS_Plat />
      break;

    case "/games/LoL/leagues/cobalt-winds-leagues":
      component = <Frontpage_Cobalt />
      break;
    case "/games/LoL/leagues/cobalt-winds-leagues/division1":
      component = <Division_1 />
      break;
    case "/games/LoL/leagues/cobalt-winds-leagues/division2":
      component = <Division_2 />
      break;
    case "/games/LoL/leagues/cobalt-winds-leagues/division3":
      component = <Division_3 />
      break;

    case "/games/LoL/leagues/duo-esports-league":
      component = <Frontpage_DUO />
      break;
    case "/games/LoL/leagues/duo-esports-league/gpcs":
      component = <GPCS />
      break;
    case "/games/LoL/leagues/duo-esports-league/ibsgcs":
      component = <IBSGCS />
      break;

    case "/games/LoL/leagues/ffs-leagues":
      component = <Frontpage_FFS />
      break;
    case "/games/LoL/leagues/ffs-leagues/mythic":
      component = <FFS_Mythic />
      break;
    case "/games/LoL/leagues/ffs-leagues/heroic":
      component = <FFS_Heroic />
      break;

    case "/games/LoL/leagues/gg-leagues":
      component = <Frontpage_GG />
      break;
    case "/games/LoL/leagues/gg-leagues/division-a":
      component = <Division_A />
      break;
    case "/games/LoL/leagues/gg-leagues/division-b":
      component = <Division_B />
      break;
    case "/games/LoL/leagues/gg-leagues/division-c":
      component = <Division_C />
      break;

    case "/games/LoL/leagues/las-leagues":
      component = <Frontpage_LAS />
      break;
    case "/games/LoL/leagues/las-leagues/tier-1":
      component = <Tier_1 />
      break;
    case "/games/LoL/leagues/las-leagues/tier-2":
      component = <Tier_2 />
      break;

    case "/games/LoL/leagues/low-budget-leagues":
      component = <Frontpage_LCS />
      break;
    case "/games/LoL/leagues/low-budget-leagues/commercial":
      component = <LCS_Commercial />
      break;
    case "/games/LoL/leagues/low-budget-leagues/economy":
      component = <LCS_Economy />
      break;
    case "/games/LoL/leagues/low-budget-leagues/executive":
      component = <LCS_Executive />
      break;
    case "/games/LoL/leagues/low-budget-leagues/financial":
      component = <LCS_Financial />
      break;

    case "/games/LoL/leagues/meta-shift-leagues":
      component = <Frontpage_MetaShift />
      break;
    case "/games/LoL/leagues/meta-shift-leagues/argon":
      component = <Argon />
      break;
    case "/games/LoL/leagues/meta-shift-leagues/helium":
      component = <Helium />
      break;
    case "/games/LoL/leagues/meta-shift-leagues/krypton":
      component = <Krypton />
      break;
    case "/games/LoL/leagues/meta-shift-leagues/neon":
      component = <Neon />
      break;
    case "/games/LoL/leagues/meta-shift-leagues/radon":
      component = <Radon />
      break;
    case "/games/LoL/leagues/meta-shift-leagues/xenon":
      component = <Xenon />
      break;

    case "/games/LoL/leagues/risen-leagues":
      component = <Frontpage_Risen />
      break;
    case "/games/LoL/leagues/risen-leagues/champions":
      component = <Risen_Champions />
      break;
    case "/games/LoL/leagues/risen-leagues/divine":
      component = <Risen_Divine />
      break;
    case "/games/LoL/leagues/risen-leagues/dominate":
      component = <Risen_Dominate />
      break;
    case "/games/LoL/leagues/risen-leagues/draft":
      component = <Risen_Draft />
      break;
    case "/games/LoL/leagues/risen-leagues/rampage":
      component = <Risen_Rampage />
      break;
    case "/games/LoL/leagues/risen-leagues/unstoppable":
      component = <Risen_Unstoppable />
      break;

    case "/games/LoL/leagues/titan-leagues":
      component = <Frontpage_Titan />
      break;
    case "/games/LoL/leagues/titan-leagues/divinity":
      component = <Divinity />
      break;
    case "/games/LoL/leagues/titan-leagues/conqueror":
      component = <Conqueror />
      break;

    case "/games/LoL/leagues/victoris-leagues":
      component = <Frontpage_Victoris />
      break;
    case "/games/LoL/leagues/victoris-leagues/amateur":
      component = <Victoris_Amateur />
      break;
    case "/games/LoL/leagues/victoris-leagues/amateur-draft":
      component = <Victoris_Amateur_Draft />
      break;
    case "/games/LoL/leagues/victoris-leagues/rival":
      component = <Victoris_Rival />
      break;
    case "/games/LoL/leagues/victoris-leagues/rival-draft":
      component = <Victoris_Rival_Draft />
      break;
    case "/games/LoL/leagues/victoris-leagues/triumph":
      component = <Victoris_Triumph />
      break;

    case "/games/LoL/leagues/zerograv-leagues":
      component = <Frontpage_Zero />
      break;
    case "/games/LoL/leagues/zerograv-leagues/gold":
      component = <Zero_Gold />
      break;
    case "/games/LoL/leagues/zerograv-leagues/ibs":
      component = <Zero_IBS />
      break;
    case "/games/LoL/leagues/zerograv-leagues/platinum":
      component = <Zero_Platinum />
      break;

    case "/games/LoL/leagues/black-twitch-league":
      component = <Black_Twitch_League />
      break;
    case "/games/LoL/leagues/clol":
      component = <CLOL />
      break;
    case "/games/LoL/leagues/corporate-league":
      component = <Corporate_LoL_League />
      break;
    case "/games/LoL/leagues/emerald-draft":
      component = <Emerald_Draft_League />
      break;
    case "/games/LoL/leagues/hsel":
      component = <HSEL_LoL />
      break;
    case "/games/LoL/leagues/nace":
      component = <NACE_LoL />
      break;
    case "/games/LoL/leagues/necc":
      component = <NECC_LoL />
      break;
    case "/games/LoL/leagues/opse":
      component = <OPSE_LoL />
      break;
    case "/games/LoL/leagues/playvs":
      component = <PlayVS_LoL />
      break;
    case "/games/LoL/leagues/scottish-esports":
      component = <Scottish_Esports_League />
      break;
    case "/games/LoL/leagues/sdc":
      component = <SDC_League />
      break;
    case "/games/LoL/leagues/vantagg":
      component = <VantaGG_LoL />
      break;
    // LoL LEAGUES

    // ROCKET LEAGUE HEAD TO HEAD
    case "/games/RocketLeague/head-to-head/gankster":
      component = <GanksterRL />
      break;
    // ROCKET LEAGUE HEAD TO HEAD

    // ROCKET LEAGUE LEAGUES
    case "/games/RocketLeague/leagues/frontier-doubles-leagues":
      component = <Frontpage_Doubles />
      break;
      case "/games/RocketLeague/leagues/frontier-doubles-leagues/elite":
      component = <Elite />
      break;
      case "/games/RocketLeague/leagues/frontier-doubles-leagues/expert":
      component = <Expert />
      break;
      case "/games/RocketLeague/leagues/frontier-doubles-leagues/origin":
      component = <Origin />
      break;
      case "/games/RocketLeague/leagues/frontier-doubles-leagues/star":
      component = <Star />
      break;

      case "/games/RocketLeague/leagues/frontline-leagues":
      component = <Frontpage_Frontline />
      break;
      case "/games/RocketLeague/leagues/frontline-leagues/challenger":
      component = <FDS_Challenger />
      break;
      case "/games/RocketLeague/leagues/frontline-leagues/champ":
      component = <FDS_Champ />
      break;
      case "/games/RocketLeague/leagues/frontline-leagues/prospect":
      component = <FDS_Prospect />
      break;
      case "/games/RocketLeague/leagues/frontline-leagues/vanguard":
      component = <FDS_Vanguard />
      break;

      case "/games/RocketLeague/leagues/italian-leagues":
      component = <Frontpage_Italian />
      break;
      case "/games/RocketLeague/leagues/italian-leagues/serie-a":
      component = <Serie_A />
      break;
      case "/games/RocketLeague/leagues/italian-leagues/serie-b":
      component = <Serie_B />
      break;

      case "/games/RocketLeague/leagues/mle-leagues":
      component = <Frontpage_MLE />
      break;
      case "/games/RocketLeague/leagues/mle-leagues/academy":
      component = <Academy />
      break;
      case "/games/RocketLeague/leagues/mle-leagues/champ":
      component = <Champ />
      break;
      case "/games/RocketLeague/leagues/mle-leagues/foundation":
      component = <Foundation />
      break;
      case "/games/RocketLeague/leagues/mle-leagues/master":
      component = <Master />
      break;
      case "/games/RocketLeague/leagues/mle-leagues/premier":
      component = <Premier />
      break;

      case "/games/RocketLeague/leagues/nemesis-leagues":
      component = <Frontpage_Nemesis />
      break;
      case "/games/RocketLeague/leagues/nemesis-leagues/challenger":
      component = <Challenger />
      break;
      case "/games/RocketLeague/leagues/nemesis-leagues/novice":
      component = <Novice />
      break;
      case "/games/RocketLeague/leagues/nemesis-leagues/prospect":
      component = <Prospect />
      break;
      case "/games/RocketLeague/leagues/nemesis-leagues/rival":
      component = <Rival />
      break;
      case "/games/RocketLeague/leagues/nemesis-leagues/titan":
      component = <Titan />
      break;

      case "/games/RocketLeague/leagues/oce-leagues":
      component = <Frontpage_OCE />
      break;
      case "/games/RocketLeague/leagues/oce-leagues/divisions":
      component = <Divisions_OCE />
      break;

      case "/games/RocketLeague/leagues/rlpc-leagues":
      component = <Frontpage_RLPC />
      break;
      case "/games/RocketLeague/leagues/rlpc-leagues/a":
      component = <A />
      break;
      case "/games/RocketLeague/leagues/rlpc-leagues/aa":
      component = <AA />
      break;
      case "/games/RocketLeague/leagues/rlpc-leagues/aaa":
      component = <AAA />
      break;
      case "/games/RocketLeague/leagues/rlpc-leagues/independent":
      component = <Independent />
      break;
      case "/games/RocketLeague/leagues/rlpc-leagues/major":
      component = <Major />
      break;

      case "/games/RocketLeague/leagues/rsc-leagues":
      component = <Frontpage_RSC />
      break;
      case "/games/RocketLeague/leagues/rsc-leagues/2v2":
      component = <RSC_2v2 />
      break;
      case "/games/RocketLeague/leagues/rsc-leagues/3v3-eu":
      component = <RSC_3v3_EU />
      break;
      case "/games/RocketLeague/leagues/rsc-leagues/3v3-na":
      component = <RSC_3v3_NA />
      break;

      case "/games/RocketLeague/leagues/url-leagues":
      component = <Frontpage_URL />
      break;
      case "/games/RocketLeague/leagues/url-leagues/2s":
      component = <URL_2s />
      break;
      case "/games/RocketLeague/leagues/url-leagues/3s":
      component = <URL_3s />
      break;

      case "/games/RocketLeague/leagues/blue-bird":
      component = <Blue_Bird />
      break;
      case "/games/RocketLeague/leagues/cca":
      component = <CCA />
      break;
      case "/games/RocketLeague/leagues/csmg":
      component = <CSMG_RL />
      break;
      case "/games/RocketLeague/leagues/ecac":
      component = <ECAC_RL />
      break;
      case "/games/RocketLeague/leagues/egfc":
      component = <EGFC_RL />
      break;
      case "/games/RocketLeague/leagues/egfh":
      component = <EGFH_HS_RL />
      break;
      case "/games/RocketLeague/leagues/elite-series":
      component = <Elite_Series />
      break;
      case "/games/RocketLeague/leagues/hbcu":
      component = <HBCU_RL />
      break;
      case "/games/RocketLeague/leagues/hsel":
      component = <HSEL_RL />
      break;
      case "/games/RocketLeague/leagues/master-cup":
      component = <Master_Cup />
      break;
      case "/games/RocketLeague/leagues/nace":
      component = <NACE_RL />
      break;
      case "/games/RocketLeague/leagues/nacl":
      component = <NACL_Rl />
      break;
      case "/games/RocketLeague/leagues/nasef":
      component = <NASEF_RL />
      break;
      case "/games/RocketLeague/leagues/necc":
      component = <NECC_RL />
      break;
      case "/games/RocketLeague/leagues/necl":
      component = <NECL_HS_RL />
      break;
      case "/games/RocketLeague/leagues/nitro-league":
      component = <Nitro_League />
      break;
      case "/games/RocketLeague/leagues/opse":
      component = <OPSE_RL />
      break;
      case "/games/RocketLeague/leagues/playvs":
      component = <PlayVS_HS_RL />
      break;
      case "/games/RocketLeague/leagues/raket-ligaen":
      component = <Raket_Ligaen />
      break;
      case "/games/RocketLeague/leagues/scottish-esports":
      component = <Scottish_Esports_RL />
      break;
      case "/games/RocketLeague/leagues/tec":
      component = <TEC_RL />
      break;
      case "/games/RocketLeague/leagues/ugc":
      component = <UGC_College />
      break;
      case "/games/RocketLeague/leagues/ugc-hs":
      component = <UGC_HS_RL />
      break;
      case "/games/RocketLeague/leagues/united-rogue":
      component = <United_Rogue />
      break;
      case "/games/RocketLeague/leagues/vantagg":
      component = <VantaGG_HS_RL />
      break;
    // ROCKET LEAGUE LEAGUES

    // ROCKET LEAGUE WAGERS
    case "/games/RocketLeague/wagers/cmg":
      component = <CMGRL />
      break;
      case "/games/RocketLeague/wagers/dropingaming":
      component = <DropinRL />
      break;
      case "/games/RocketLeague/wagers/gamersaloon":
      component = <SaloonRL />
      break;
      case "/games/RocketLeague/wagers/stakester":
      component = <StakeRL />
      break;
    // ROCKET LEAGUE WAGERS





  }

  return (
    <div className="App">
      <Navbar />
      <div>{component}</div>
    </div>    
  );
}

export default App;
