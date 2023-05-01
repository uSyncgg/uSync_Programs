import { useState } from 'react';
//import styles from './Home.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Comingsoon from './pages/Comingsoon';
import Games from './pages/Games';
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


//COD LEAGUES
import HOE_Amateur from './pages/game_pages/CoD/leagues/House_Of_Esports/HOE_Amateur'
import HOE_Challengers from './pages/game_pages/CoD/leagues/House_Of_Esports/HOE_Challengers'
import HOE_Masters from './pages/game_pages/CoD/leagues/House_Of_Esports/HOE_Masters'
import AWL_League from './pages/game_pages/CoD/leagues/AWL_League'
import CCL_League from './pages/game_pages/CoD/leagues/CCL_League'
import K7_League from './pages/game_pages/CoD/leagues/K7_League'
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
import COD_Rec_League from './pages/game_pages/CoD/leagues/COD_Rec_League'
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
import Wager_1v1WZ from './pages/game_pages/Warzone/Wagers/Wager_1v1WZ'
//WARZONE WAGERS

//WARZONE LEAGUES
import CCL_WZ_League from './pages/game_pages/Warzone/Leagues/CCL_WZ_League'
import CGN_WZ_League from './pages/game_pages/Warzone/Leagues/CGN_WZ_League'
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
import Howlfun from './pages/game_pages/LoL/Leagues/Howlfun';
//LoL LEAGUES

//ROCKET LEAGUE HEAD TO HEAD
import GanksterRL from './pages/game_pages/RocketLeague/Head-To-Head/GanksterRL'
//ROCKET LEAGUE HEAD TO HEAD

//ROCKET LEAGUE WAGERS
import CMGRL from './pages/game_pages/RocketLeague/Wagers/CMGRL'
import DropinRL from './pages/game_pages/RocketLeague/Wagers/DropinRL'
import SaloonRL from './pages/game_pages/RocketLeague/Wagers/SaloonRL'
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

//VALORANT HEAD TO HEAD
import College_Hub from './pages/game_pages/Valorant/Head-To-Head/College_Hub'
import Dropin_VAL_XP from './pages/game_pages/Valorant/Head-To-Head/Dropin_VAL_XP'
import EsportScrim from './pages/game_pages/Valorant/Head-To-Head/EsportScrim'
import GanksterVAL from './pages/game_pages/Valorant/Head-To-Head/GanksterVAL'
import ProjectV from './pages/game_pages/Valorant/Head-To-Head/ProjectV'
//VALORANT HEAD TO HEAD

//VALORANT WAGERS
import DropinVAL from './pages/game_pages/Valorant/Wagers/DropinVAL'
//VALORANT WAGERS

//VALORANT LEAGUES
import Frontpage_ECAC from './pages/game_pages/Valorant/Leagues/ECAC_Val/Frontpage_ECAC'
import DivisionA from './pages/game_pages/Valorant/Leagues/ECAC_Val/DivisionA'
import DivisionB from './pages/game_pages/Valorant/Leagues/ECAC_Val/DivisionB'
import DivisionC from './pages/game_pages/Valorant/Leagues/ECAC_Val/DivisionC'

import Academy_val from './pages/game_pages/Valorant/Leagues/Frontline_Leagues_Val/Academy_val'
import Frontpage_Frontline_val from './pages/game_pages/Valorant/Leagues/Frontline_Leagues_Val/Frontpage_Frontline_val'
import Prime from './pages/game_pages/Valorant/Leagues/Frontline_Leagues_Val/Prime'

import Amateur from './pages/game_pages/Valorant/Leagues/LPL_Leagues/Amateur'
import Evolution from './pages/game_pages/Valorant/Leagues/LPL_Leagues/Evolution'
import Frontpage_LPL from './pages/game_pages/Valorant/Leagues/LPL_Leagues/Frontpage_LPL'
import Open from './pages/game_pages/Valorant/Leagues/LPL_Leagues/Open'

import Frontpage_NACE from './pages/game_pages/Valorant/Leagues/Nace_Leagues/Frontpage_NACE'
import NACE_Open from './pages/game_pages/Valorant/Leagues/Nace_Leagues/NACE_Open'
import NACE_VARSITY from './pages/game_pages/Valorant/Leagues/Nace_Leagues/NACE_VARSITY'

import Frontpage_Val_Victoris from './pages/game_pages/Valorant/Leagues/Victoris_Val_Leagues/Frontpage_Val_Victoris'
import VLS from './pages/game_pages/Valorant/Leagues/Victoris_Val_Leagues/VLS'
import VRS from './pages/game_pages/Valorant/Leagues/Victoris_Val_Leagues/VRS'

import CGN_League_Val from './pages/game_pages/Valorant/Leagues/CGN_League_Val'
import CSMG_VAL from './pages/game_pages/Valorant/Leagues/CSMG_VAL'
import College_Val_Riot from './pages/game_pages/Valorant/Leagues/College_Val_Riot'
import EGFC_College_VAL from './pages/game_pages/Valorant/Leagues/EGFC_College_VAL'
import EGFH_VAL from './pages/game_pages/Valorant/Leagues/EGFH_VAL'
import HBCU_VAL from './pages/game_pages/Valorant/Leagues/HBCU_VAL'
import HSEL_VAL from './pages/game_pages/Valorant/Leagues/HSEL_VAL'
import NASEF_VAL from './pages/game_pages/Valorant/Leagues/NASEF_VAL'
import NECC_Val from './pages/game_pages/Valorant/Leagues/NECC_Val'
import NECL_VAL from './pages/game_pages/Valorant/Leagues/NECL_VAL'
import NJCAAE_Val from './pages/game_pages/Valorant/Leagues/NJCAAE_Val'
import OPSE_VAL from './pages/game_pages/Valorant/Leagues/OPSE_VAL'
import Scottish_Val from './pages/game_pages/Valorant/Leagues/Scottish_Val'
import Talent_League from './pages/game_pages/Valorant/Leagues/Talent_League'
import TEC_VAL from './pages/game_pages/Valorant/Leagues/TEC_VAL'
import UGC_College_Val from './pages/game_pages/Valorant/Leagues/UGC_College_Val'
import Unified_Val from './pages/game_pages/Valorant/Leagues/Unified_Val'
import VantaGG_VAL from './pages/game_pages/Valorant/Leagues/VantaGG_VAL'
import VCT_Game from './pages/game_pages/Valorant/Leagues/VCT_Game'
import VMaster from './pages/game_pages/Valorant/Leagues/VMaster'
//VALORANT LEAGUES


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
import EGFC_College_Val from './pages/game_pages/Valorant/Leagues/EGFC_College_VAL';

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
      title = "Home";
      component = <Home />;
      break;
    case "/Comingsoon":
      title = "Coming Soon";
      component = <Comingsoon />
      break;
    case "/more/verification":
      title = "Verification";
      component = <Verification />
      break;
    case "/more/verification/becomeverified":
      title = "Become Verified";
      component = <Becomeverified />
      break;
    case "/more/eventhost":
      title = "Event Host";
      component = <Eventhost />
      break;
    case "/more/contactus":
      title = "Contact Us";
      component = <Contactus />
      break;
    case"/reportproblem":
    title = "Report Problem";
      component = <Report />
      break;

    case "/games":
      title = "Games";
      component = <Games />
      break;
    case "/games/call-of-duty":
      title = "Call of Duty";
      component = <Cod />
      break;
    case "/games/call-of-duty/leagues":
      title = "Call of Duty Leagues";
      component = <Cod_Leagues />
      break;
    case "/games/call-of-duty/lans":
      title = "Call of Duty LANs";
      component = <Cod_Lan />
      break;
    case "/games/call-of-duty/wagers":
      title = "Call of Duty Wagers";
      component = <Cod_Wagers />
      break;
    case "/games/call-of-duty/head-to-head":
      title = "Call of Duty Head to Head";
      component = <Cod_headtohead />
      break;

    case "/games/halo":
      title = "Halo";
      component = <Halo />
      break;
    case "/games/halo/leagues":
      title = "Halo Leagues";
      component = <Halo_Leagues />
      break;
    case "/games/halo/lans":
      title = "Halo LANs";
      component = <Halo_Lan />
      break;
    case "/games/halo/wagers":
      title = "Halo Wagers";
      component = <Halo_Wagers />
      break;
    case "/games/halo/head-to-head":
      title = "Halo Head to Head";
      component = <Halo_headtohead />
      break;

    case "/games/LoL":
      title = "League of Legends";
      component = <LoL />
      break;
    case "/games/LoL/leagues":
      title = "League of Legends Leagues";
      component = <Lol_Leagues />
      break;
    case "/games/LoL/lans":
      title = "League of Legends LANs";
      component = <Lol_Lan />
      break;
    case "/games/LoL/wagers":
      title = "League of Legends Wagers";
      component = <LoL_Wagers />
      break;
    case "/games/LoL/head-to-head":
      title = "League of Legends Head to Head";
      component = <Lol_headtohead />
      break;

    case "/games/RocketLeague":
      title = "Rocket League";
      component = <Rl />
      break;
    case "/games/RocketLeague/leagues":
      title = "Rocket League Leagues";
      component = <Rl_Leagues />
      break;
    case "/games/RocketLeague/wagers":
      title = "Rocket League Wagers";
      component = <Rl_Wagers />
      break;
    case "/games/RocketLeague/head-to-head":
      title = "Rocket League Head to Head";
      component = <Rl_headtohead />
      break;

    case "/games/Valorant":
      title = "Valorant";
      component = <Val />
      break;
    case "/games/Valorant/leagues":
      title = "Valorant Leagues";
      component = <Val_Leagues />
      break;
    case "/games/Valorant/wagers":
      title = "Valorant Wagers";
      component = <Val_Wagers />
      break;
    case "/games/Valorant/head-to-head":
      title = "Valorant Head to Head";
      component = <Val_headtohead />
      break;

    case "/games/warzone":
      title = "Warzone";
      component = <Wz />
      break;
    case "/games/warzone/leagues":
      title = "Warzone Leagues";
      component = <Wz_Leagues />
      break;
    case "/games/warzone/lans":
      title = "Warzone LANs";
      component = <Wz_Lan />
      break;
    case "/games/warzone/wagers":
      title = "Warzone Wagers";
      component = <Wz_Wagers />
      break;
    case "/games/warzone/head-to-head":
      title = "Warzone Head to Head";
      component = <Wz_headtohead />
      break;


    case "/CoD/Tournaments":
      title = "Call of Duty Tournaments";
      component = <CodTourneys />
      break;
    // case "/test":
    //   component = <Test />
    //   break;       


    //COD LEAGUES
    case "/games/call-of-duty/leagues/snd-league":
      title = "SND League";
      component = <Snd_league />
      break;
      case "/games/call-of-duty/leagues/cod-rec-league":
        title = "Call of Duty Rec League";
      component = <COD_Rec_League />
      break;
    case "/games/call-of-duty/nacal-league":
      title = "NACAL League";
      component = <NACAL_league />
      break;
    case "/games/call-of-duty/leagues/awl-league":
      title = "Call of Duty Amateur World League";
      component = <AWL_League />
      break;
    case "/games/call-of-duty/leagues/House-of-esports-leagues":
      title = "House of Esports Leagues";
      component = <HOE_Leagues />
      break;
    case "/games/call-of-duty/leagues/House-of-esports-leagues/hoe-amateur":
      title = "House of Esports Amateur League";
      component = <HOE_Amateur />
      break;
    case "/games/call-of-duty/leagues/House-of-esports-leagues/hoe-challengers":
      title = "House of Esports Challengers League";
      component = <HOE_Challengers />
      break;
    case "/games/call-of-duty/leagues/House-of-esports-leagues/hoe-masters":
      title = "House of Esports Masters League";
      component = <HOE_Masters />
      break;
    case "/games/call-of-duty/leagues/ccl-league":
      title = "College Call of Duty League";
      component = <CCL_League />
      break;
    case "/games/call-of-duty/leagues/k7-league":
      title = "K7 League";
      component = <K7_League />
      break;
    case "/games/call-of-duty/leagues/cgn-league-cod":
      title = "CGN League";
      component = <Cgn_league_cod />
      break;
    case "/games/call-of-duty/leagues/chicago-league-cod":
      title = "Chicago Call of Duty League";
      component = <Chicago_COD_League />
      break;
    case "/games/call-of-duty/leagues/click-gaming-league":
      title = "Click Gaming League";
      component = <Click_Gaming_LeagueCOD />
      break;
    case "/games/call-of-duty/leagues/cod-beer-league":
      title = "Call of Duty Beer League";
      component = <COD_Beer_League />
      break;
    case "/games/call-of-duty/leagues/college-xp":
      title = "College XP League";
      component = <College_XP />
      break;
    case "/games/call-of-duty/leagues/corporate-cod-league":
      title = "Corporate Call of Duty League";
      component = <Corporate_COD_League />
      break;
    case "/games/call-of-duty/leagues/fpc-league":
      title = "Female Pro Circuit League";
      component = <FPC_League />
      break;
    case "/games/call-of-duty/leagues/kanna-gaming-league":
      title = "Kanna Gaming League";
      component = <Kanna_Gaming_League />
      break;
    case "/games/call-of-duty/leagues/lunar-league":
      title = "Lunar League";
      component = <Lunar_League />
      break;
    case "/games/call-of-duty/leagues/nace-cod-league":
      title = "NACE Call of Duty League";
      component = <NACE_COD_League />
      break;
    case "/games/call-of-duty/leagues/u18-league":
      title = "U18 League";
      component = <U18_League />
      break;
    case "/games/call-of-duty/leagues/ung-league":
      title = "UNG League";
      component = <UNG_League />
      break;
    case "/games/call-of-duty/leagues/xp-league-cod":
      title = "XP Call of Duty League";
      component = <XP_League_Cod />
      break;
    // COD LEAGUES

    // COD HEAD TO HEAD
    case "/games/call-of-duty/head-to-head/arena":
      title = "The Arena Call of Duty";
      component = <Arena />
      break;
    case "/games/call-of-duty/head-to-head/cmg":
      title = "Checkmate Gaming Head to Head";
      component = <CMG_Xp />
      break;
    case "/games/call-of-duty/head-to-head/gb":
      title = "Gamebattles Head to Head";
      component = <GB />
      break;
    case "/games/call-of-duty/head-to-head/umg":
      title = "UMG Head to Head";
      component = <UMG />
      break;
    // COD HEAD TO HEAD

    // COD WAGERS
    case "/games/call-of-duty/wagers/1v1me":
      title = "1v1me Call of Duty Wagers";
      component = <App_1v1ME />
      break;
    case "/games/call-of-duty/wagers/cmg":
      title = "Checkmate Gaming Call of Duty Wagers";
      component = <CMG_Wagers />
      break;
    case "/games/call-of-duty/wagers/dropin":
      title = "DropIn Gaming Call of Duty Wagers";
      component = <Dropin_Wagers />
      break;
    case "/games/call-of-duty/wagers/eagent":
      title = "Esports Agent Call of Duty Wagers";
      component = <EAgent_Wagers />
      break;
    case "/games/call-of-duty/wagers/oneup":
      title = "Oneup Call of Duty Wagers";
      component = <Oneup_Wagers />
      break;
    // COD WAGERS

    // HALO HEAD TO HEAD
    case "/games/halo/head-to-head/arena":
      title = "The Arena Halo";
      component = <ArenaHalo />
      break;
    case "/games/halo/head-to-head/rec-xp":
      title = "Halo Recreational Scrims";
      component = <RecXP />
      break;
    case "/games/halo/head-to-head/sauna":
      title = "The Sauna Halo";
      component = <Sauana />
      break;
    case "/games/halo/head-to-head/ugc-scrim":
      title = "Halo UGC Scrims";
      component = <UGC_Scrim />
      break;
    case "/games/halo/head-to-head/umg-scrim":
      title = "UMG Halo Head to Head";
      component = <UMGScrim />
      break;
    // HALO HEAD TO HEAD

    // HALO WAGERS
    case "/games/halo/wagers/cmg":
      title = "Checkmate Gaming Halo Wagers";
      component = <CMG_Halo />
      break;
    case "/games/halo/wagers/oneup":
      title = "Oneup Halo Wagers";
      component = <OneupHalo />
      break;
    // HALO WAGERS

    // HALO LEAGUES
    case "/games/halo/leagues/college-halo":
      title = "College Halo League";
      component = <College_Halo />
      break;
    case "/games/halo/leagues/corporate-halo":
      title = "Corporate Halo League";
      component = <Corporate_Halo_League />
      break;
    case "/games/halo/leagues/ecac":
      title = "ECAC Halo League";
      component = <ECAC_Halo_League />
      break;
    case "/games/halo/leagues/halo-agent":
      title = "Halo Agent League";
      component = <Halo_Agent />
      break;
    case "/games/halo/leagues/halo-rec-league":
      title = "Halo Rec League";
      component = <Halo_Rec_League />
      break;
    case "/games/halo/leagues/nacl":
      title = "NACL Halo League";
      component = <NACL_Halo />
      break;
    case "/games/halo/leagues/necc":
      title = "NECC Halo League";
      component = <NECC_Halo />
      break;
    case "/games/halo/leagues/ugc-halo":
      title = "UGC Halo League";
      component = <UGC_Halo />
      break;
    // HALO LEAGUES

    // WARZONE HEAD TO HEAD
    case "/games/warzone/head-to-head/cmg":
      title = "Checkmate Gaming Warzone Head to Head";
      component = <CMGWZXP />
      break;
    case "/games/warzone/head-to-head/gb":
      title = "Gamebattles Warzone Head to Head";
      component = <GBWZ />
      break;
    case "/games/warzone/head-to-head/umg":
      title = "UMG Warzone Head to Head";
      component = <UMGWZ />
      break;
    // WARZONE HEAD TO HEAD

    // WARZONE WAGERS
    case "/games/warzone/wagers/cmg":
      title = "Checkmate Gaming Warzone Wagers";
      component = <CMG_WZ />
      break;
    case "/games/warzone/wagers/dropingaming":
      title = "DropIn Gaming Warzone Wagers";
      component = <DropinWZ />
      break;
    case "/games/warzone/wagers/gamersaloon":
      title = "GamerSaloon Warzone Wagers";
      component = <GamerSaloon />
      break;
    case "/games/warzone/wagers/oneup":
      title = "Oneup Warzone Wagers";
      component = <OneUpWZ />
      break;
    case "/games/warzone/wagers/1v1me":
      title = "1v1me Warzone Wagers";
      component = <Wager_1v1WZ />
      break;
    // WARZONE WAGERS

    // WARZONE LEAGUES
    case "/games/warzone/leagues/ccl":
      title = "College Warzone League";
      component = <CCL_WZ_League />
      break;
    case "/games/warzone/leagues/cgn":
      title = "CGN Warzone League";
      component = <CGN_WZ_League />
      break;
    case "/games/warzone/leagues/gg-gaming":
      title = "GG Gaming Warzone League";
      component = <GG_Gaming_League />
      break;
    case "/games/warzone/leagues/ghml":
      title = "GHML Warzone League";
      component = <GHML_Gaming_League />
      break;
    case "/games/warzone/leagues/njcaae":
      title = "NJCAAE Warzone League";
      component = <NJCAAE_League />
      break;
    // WARZONE LEAGUES

    // LoL HEAD TO HEAD
    case "/games/LoL/head-to-head/esport-scrim":
      title = "Esport Scrim League of Legends";
      component = <Esport_Scrim />
      break;
    case "/games/LoL/head-to-head/gankster":
      title = "Gankster League of Legends";
      component = <Gankster />
      break;
    // LoL HEAD TO HEAD

    // LoL WAGERS
    case "/games/LoL/wagers/dropingaming":
      title = "DropIn Gaming League of Legends Wagers";
      component = <DropinLoL />
      break;
    // LoL WAGERS

    // LoL LEAGUES
    case "/games/LoL/leagues/aegis-leagues":
      title = "Aegis Leagues";
      component = <Frontpage_Aegis />
      break;
    case "/games/LoL/leagues/aegis-leagues/champ":
      title = "Aegis Champion League";
      component = <Aegis_Champ />
      break;
    case "/games/LoL/leagues/aegis-leagues/guardians":
      title = "Aegis Guardians League";
      component = <Aegis_Guardians />
      break;
    case "/games/LoL/leagues/aegis-leagues/marauder":
      title = "Aegis Marauder League";
      component = <Aegis_Marauder />
      break;
    case "/games/LoL/leagues/aegis-leagues/protectors":
      title = "Aegis Protectors League";
      component = <Aegis_Protectors />
      break;
    case "/games/LoL/leagues/aegis-leagues/squire":
      title = "Aegis Squire League";
      component = <Aegis_Squire />
      break;

    case "/games/LoL/leagues/blue-otter-leagues":
      title = "Blue Otter Leagues";
      component = <Frontpage_Otter />
      break;
    case "/games/LoL/leagues/blue-otter-leagues/diamond":
      title = "Blue Otter Diamond League";
      component = <Blue_Otter_Diamond />
      break;
    case "/games/LoL/leagues/blue-otter-leagues/gold":
      title = "Blue Otter Gold League";
      component = <Blue_Otter_Gold />
      break;
    case "/games/LoL/leagues/blue-otter-leagues/ibs":
      title = "Blue Otter IBS League";
      component = <Blue_Otter_IBS />
      break;
    case "/games/LoL/leagues/blue-otter-leagues/plat":
      title = "Blue Otter Platinum League";
      component = <Blue_Otter_Plat />
      break;

    case "/games/LoL/leagues/cobalt-winds-leagues":
      title = "Cobalt Winds Leagues";
      component = <Frontpage_Cobalt />
      break;
    case "/games/LoL/leagues/cobalt-winds-leagues/division1":
      title = "Cobalt Winds Division 1 League";
      component = <Division_1 />
      break;
    case "/games/LoL/leagues/cobalt-winds-leagues/division2":
      title = "Cobalt Winds Division 2 League";
      component = <Division_2 />
      break;
    case "/games/LoL/leagues/cobalt-winds-leagues/division3":
      title = "Cobalt Winds Division 3 League";
      component = <Division_3 />
      break;

    case "/games/LoL/leagues/duo-esports-league":
      title = "Duo Esports Leagues";
      component = <Frontpage_DUO />
      break;
    case "/games/LoL/leagues/duo-esports-league/gpcs":
      title = "Duo Esports GPCS League";
      component = <GPCS />
      break;
    case "/games/LoL/leagues/duo-esports-league/ibsgcs":
      title = "Duo Esports IBSGCS League";
      component = <IBSGCS />
      break;

    case "/games/LoL/leagues/ffs-leagues":
      title = "Friend or Foe Leagues";
      component = <Frontpage_FFS />
      break;
    case "/games/LoL/leagues/ffs-leagues/mythic":
      title = "Friend or Foe Mythic League";
      component = <FFS_Mythic />
      break;
    case "/games/LoL/leagues/ffs-leagues/heroic":
      title = "Friend or Foe Heroic League";
      component = <FFS_Heroic />
      break;

    case "/games/LoL/leagues/gg-leagues":
      title = "GG League of Legends Leagues";
      component = <Frontpage_GG />
      break;
    case "/games/LoL/leagues/gg-leagues/division-a":
      title = "GG League of Legends Division A League";
      component = <Division_A />
      break;
    case "/games/LoL/leagues/gg-leagues/division-b":
      title = "GG League of Legends Division B League";
      component = <Division_B />
      break;
    case "/games/LoL/leagues/gg-leagues/division-c":
      title = "GG League of Legends Division C League";
      component = <Division_C />
      break;

    case "/games/LoL/leagues/las-leagues":
      title = "LAS Leagues";
      component = <Frontpage_LAS />
      break;
    case "/games/LoL/leagues/las-leagues/tier-1":
      title = "LAS Tier 1 League";
      component = <Tier_1 />
      break;
    case "/games/LoL/leagues/las-leagues/tier-2":
      title = "LAS Tier 2 League";
      component = <Tier_2 />
      break;

    case "/games/LoL/leagues/low-budget-leagues":
      title = "Low Budget Leagues";
      component = <Frontpage_LCS />
      break;
    case "/games/LoL/leagues/low-budget-leagues/commercial":
      title = "Low Budget Commerical League";
      component = <LCS_Commercial />
      break;
    case "/games/LoL/leagues/low-budget-leagues/economy":
      title = "Low Budget Economy League";
      component = <LCS_Economy />
      break;
    case "/games/LoL/leagues/low-budget-leagues/executive":
      title = "Low Budget Executive League";
      component = <LCS_Executive />
      break;
    case "/games/LoL/leagues/low-budget-leagues/financial":
      title = "Low Budget Financial League";
      component = <LCS_Financial />
      break;

    case "/games/LoL/leagues/meta-shift-leagues":
      title = "MetaShift Leagues";
      component = <Frontpage_MetaShift />
      break;
    case "/games/LoL/leagues/meta-shift-leagues/argon":
      title = "MetaShift Argon League";
      component = <Argon />
      break;
    case "/games/LoL/leagues/meta-shift-leagues/helium":
      title = "MetaShift Helium League";
      component = <Helium />
      break;
    case "/games/LoL/leagues/meta-shift-leagues/krypton":
      title = "MetaShift Krypton League";
      component = <Krypton />
      break;
    case "/games/LoL/leagues/meta-shift-leagues/neon":
      title = "MetaShift Neon League";
      component = <Neon />
      break;
    case "/games/LoL/leagues/meta-shift-leagues/radon":
      title = "MetaShift Radon League";
      component = <Radon />
      break;
    case "/games/LoL/leagues/meta-shift-leagues/xenon":
      title = "MetaShift Xenon League";
      component = <Xenon />
      break;

    case "/games/LoL/leagues/risen-leagues":
      title = "Risen League of Legends Leagues";
      component = <Frontpage_Risen />
      break;
    case "/games/LoL/leagues/risen-leagues/champions":
      title = "Risen Champions League";
      component = <Risen_Champions />
      break;
    case "/games/LoL/leagues/risen-leagues/divine":
      title = "Risen Divine League";
      component = <Risen_Divine />
      break;
    case "/games/LoL/leagues/risen-leagues/dominate":
      title = "Risen Dominate League";
      component = <Risen_Dominate />
      break;
    case "/games/LoL/leagues/risen-leagues/draft":
      title = "Risen Draft League";
      component = <Risen_Draft />
      break;
    case "/games/LoL/leagues/risen-leagues/rampage":
      title = "Risen Rampage League";
      component = <Risen_Rampage />
      break;
    case "/games/LoL/leagues/risen-leagues/unstoppable":
      title = "Risen Unstoppable League";
      component = <Risen_Unstoppable />
      break;

    case "/games/LoL/leagues/titan-leagues":
      title = "Titan League of Legends Leagues";
      component = <Frontpage_Titan />
      break;
    case "/games/LoL/leagues/titan-leagues/divinity":
      title = "Titan Divinity League";
      component = <Divinity />
      break;
    case "/games/LoL/leagues/titan-leagues/conqueror":
      title = "Titan Conqueror League";
      component = <Conqueror />
      break;

    case "/games/LoL/leagues/victoris-leagues":
      title = "Victoris League of Legends Leagues";
      component = <Frontpage_Victoris />
      break;
    case "/games/LoL/leagues/victoris-leagues/amateur":
      title = "Victoris League of Legends Amateur League";
      component = <Victoris_Amateur />
      break;
    case "/games/LoL/leagues/victoris-leagues/amateur-draft":
      title = "Victoris League of Legends Amateur Draft League";
      component = <Victoris_Amateur_Draft />
      break;
    case "/games/LoL/leagues/victoris-leagues/rival":
      title = "Victoris League of Legends Rival League";
      component = <Victoris_Rival />
      break;
    case "/games/LoL/leagues/victoris-leagues/rival-draft":
      title = "Victoris League of Legends Rival Draft League";
      component = <Victoris_Rival_Draft />
      break;
    case "/games/LoL/leagues/victoris-leagues/triumph":
      title = "Victoris League of Legends Triumph League";
      component = <Victoris_Triumph />
      break;

    case "/games/LoL/leagues/zerograv-leagues":
      title = "Zero Gravity Leagues";
      component = <Frontpage_Zero />
      break;
    case "/games/LoL/leagues/zerograv-leagues/gold":
      title = "Zero Gravity Gold League";
      component = <Zero_Gold />
      break;
    case "/games/LoL/leagues/zerograv-leagues/ibs":
      title = "Zero Gravity IBS League";
      component = <Zero_IBS />
      break;
    case "/games/LoL/leagues/zerograv-leagues/platinum":
      title = "Zero Gravity Platinum League";
      component = <Zero_Platinum />
      break;

    case "/games/LoL/leagues/black-twitch-league":
      title = "Black Twitch League";
      component = <Black_Twitch_League />
      break;
    case "/games/LoL/leagues/clol":
      title = "Collegiate League of Legends League";
      component = <CLOL />
      break;
    case "/games/LoL/leagues/corporate-league":
      title = "Corporate League of Legends League";
      component = <Corporate_LoL_League />
      break;
    case "/games/LoL/leagues/emerald-draft":
      title = "Emerald Draft League";
      component = <Emerald_Draft_League />
      break;
    case "/games/LoL/leagues/hsel":
      title = "High School League of Legends League";
      component = <HSEL_LoL />
      break;
    case "/games/LoL/leagues/nace":
      title = "NACE League of Legends League";
      component = <NACE_LoL />
      break;
    case "/games/LoL/leagues/necc":
      title = "NECC League of Legends League";
      component = <NECC_LoL />
      break;
    case "/games/LoL/leagues/opse":
      title = "OPSE League of Legends League";
      component = <OPSE_LoL />
      break;
    case "/games/LoL/leagues/playvs":
      title = "PlayVS League of Legends League";
      component = <PlayVS_LoL />
      break;
    case "/games/LoL/leagues/scottish-esports":
      title = "Scottish Esports League of Legends League";
      component = <Scottish_Esports_League />
      break;
    case "/games/LoL/leagues/sdc":
      title = "SDC League";
      component = <SDC_League />
      break;
    case "/games/LoL/leagues/vantagg":
      title = "VantaGG League of Legends League";
      component = <VantaGG_LoL />
      break;
    case "/games/LoL/leagues/howlfun":
      title = "Howlfun League of Legends League";
      component = <Howlfun />
      break;
    // LoL LEAGUES

    // ROCKET LEAGUE HEAD TO HEAD
    case "/games/RocketLeague/head-to-head/gankster":
      title = "Gankster Rocket League";
      component = <GanksterRL />
      break;
    // ROCKET LEAGUE HEAD TO HEAD

    // ROCKET LEAGUE LEAGUES
    case "/games/RocketLeague/leagues/frontier-doubles-leagues":
      title = "Frontier Doubles Leagues";
      component = <Frontpage_Doubles />
      break;
      case "/games/RocketLeague/leagues/frontier-doubles-leagues/elite":
        title = "Frontier Doubles Elite League";
      component = <Elite />
      break;
      case "/games/RocketLeague/leagues/frontier-doubles-leagues/expert":
        title = "Frontier Doubles Expert League";
      component = <Expert />
      break;
      case "/games/RocketLeague/leagues/frontier-doubles-leagues/origin":
        title = "Frontier Doubles Origin League";
      component = <Origin />
      break;
      case "/games/RocketLeague/leagues/frontier-doubles-leagues/star":
        title = "Frontier Doubles Star League";
      component = <Star />
      break;

      case "/games/RocketLeague/leagues/frontline-leagues":
        title = "Frontline Rocket League Leagues";
      component = <Frontpage_Frontline />
      break;
      case "/games/RocketLeague/leagues/frontline-leagues/challenger":
        title = "Frontline Challenger League";
      component = <FDS_Challenger />
      break;
      case "/games/RocketLeague/leagues/frontline-leagues/champ":
        title = "Frontline Champ League";
      component = <FDS_Champ />
      break;
      case "/games/RocketLeague/leagues/frontline-leagues/prospect":
        title = "Frontline Prospect League";
      component = <FDS_Prospect />
      break;
      case "/games/RocketLeague/leagues/frontline-leagues/vanguard":
        title = "Frontline Vanguard League";
      component = <FDS_Vanguard />
      break;

      case "/games/RocketLeague/leagues/italian-leagues":
        title = "Italian Rocket League Leagues";
      component = <Frontpage_Italian />
      break;
      case "/games/RocketLeague/leagues/italian-leagues/serie-a":
        title = "Italian Rocket League Serie A League";
      component = <Serie_A />
      break;
      case "/games/RocketLeague/leagues/italian-leagues/serie-b":
        title = "Italian Rocket League Serie B League";
      component = <Serie_B />
      break;

      case "/games/RocketLeague/leagues/mle-leagues":
        title = "Minor League Esports Rocket League Leagues";
      component = <Frontpage_MLE />
      break;
      case "/games/RocketLeague/leagues/mle-leagues/academy":
        title = "Minor League Esports Academy League";
      component = <Academy />
      break;
      case "/games/RocketLeague/leagues/mle-leagues/champ":
        title = "Minor League Esports Champ League";
      component = <Champ />
      break;
      case "/games/RocketLeague/leagues/mle-leagues/foundation":
        title = "Minor League Esports Foundation League";
      component = <Foundation />
      break;
      case "/games/RocketLeague/leagues/mle-leagues/master":
        title = "Minor League Esports Master League";
      component = <Master />
      break;
      case "/games/RocketLeague/leagues/mle-leagues/premier":
        title = "Minor League Esports Premier League";
      component = <Premier />
      break;

      case "/games/RocketLeague/leagues/nemesis-leagues":
        title = "Nemesis Rocket League Leagues";
      component = <Frontpage_Nemesis />
      break;
      case "/games/RocketLeague/leagues/nemesis-leagues/challenger":
        title = "Nemesis Challenger League";
      component = <Challenger />
      break;
      case "/games/RocketLeague/leagues/nemesis-leagues/novice":
        title = "Nemesis Novice League";
      component = <Novice />
      break;
      case "/games/RocketLeague/leagues/nemesis-leagues/prospect":
        title = "Nemesis Prospect League";
      component = <Prospect />
      break;
      case "/games/RocketLeague/leagues/nemesis-leagues/rival":
        title = "Nemesis Rival League";
      component = <Rival />
      break;
      case "/games/RocketLeague/leagues/nemesis-leagues/titan":
        title = "Nemesis Titan League";
      component = <Titan />
      break;

      case "/games/RocketLeague/leagues/oce-leagues":
        title = "Oceania Rocket League Draft Leagues";
      component = <Frontpage_OCE />
      break;
      case "/games/RocketLeague/leagues/oce-leagues/divisions":
        title = "Oceania Draft League";
      component = <Divisions_OCE />
      break;

      case "/games/RocketLeague/leagues/rlpc-leagues":
        title = "RLPC Rocket League Leagues";
      component = <Frontpage_RLPC />
      break;
      case "/games/RocketLeague/leagues/rlpc-leagues/a":
        title = "RLPC A League";
      component = <A />
      break;
      case "/games/RocketLeague/leagues/rlpc-leagues/aa":
        title = "RLPC Double A League";
      component = <AA />
      break;
      case "/games/RocketLeague/leagues/rlpc-leagues/aaa":
        title = "RLPC Triple A League";
      component = <AAA />
      break;
      case "/games/RocketLeague/leagues/rlpc-leagues/independent":
        title = "RLPC Independent League";
      component = <Independent />
      break;
      case "/games/RocketLeague/leagues/rlpc-leagues/major":
        title = "RLPC Major League";
      component = <Major />
      break;

      case "/games/RocketLeague/leagues/rsc-leagues":
        title = "Rocket Soccar Confederation Leagues";
      component = <Frontpage_RSC />
      break;
      case "/games/RocketLeague/leagues/rsc-leagues/2v2":
        title = "RSC 2v2 League";
      component = <RSC_2v2 />
      break;
      case "/games/RocketLeague/leagues/rsc-leagues/3v3-eu":
        title = "RSC 3v3 EU League";
      component = <RSC_3v3_EU />
      break;
      case "/games/RocketLeague/leagues/rsc-leagues/3v3-na":
        title = "RSC 3v3 NA League";
      component = <RSC_3v3_NA />
      break;

      case "/games/RocketLeague/leagues/url-leagues":
        title = "Ultimate Rocket League Leagues";
      component = <Frontpage_URL />
      break;
      case "/games/RocketLeague/leagues/url-leagues/2s":
        title = "Ultimate Rocket League 2v2 League";
      component = <URL_2s />
      break;
      case "/games/RocketLeague/leagues/url-leagues/3s":
        title = "Ultimate Rocket League 3v3 League";
      component = <URL_3s />
      break;

      case "/games/RocketLeague/leagues/blue-bird":
        title = "Blue Bird League";
      component = <Blue_Bird />
      break;
      case "/games/RocketLeague/leagues/cca":
        title = "College Carball Association League";
      component = <CCA />
      break;
      case "/games/RocketLeague/leagues/csmg":
        title = "CSMG Rocket League League";
      component = <CSMG_RL />
      break;
      case "/games/RocketLeague/leagues/ecac":
        title = "ECAC Rocket League League";
      component = <ECAC_RL />
      break;
      case "/games/RocketLeague/leagues/egfc":
        title = "EGFC Rocket League League";
      component = <EGFC_RL />
      break;
      case "/games/RocketLeague/leagues/egfh":
        title = "EGFH Rocket League League";
      component = <EGFH_HS_RL />
      break;
      case "/games/RocketLeague/leagues/elite-series":
        title = "Elite Series Rocket League League";
      component = <Elite_Series />
      break;
      case "/games/RocketLeague/leagues/hbcu":
        title = "HBCU Rocket League League";
      component = <HBCU_RL />
      break;
      case "/games/RocketLeague/leagues/hsel":
        title = "High School Rocket League League";
      component = <HSEL_RL />
      break;
      case "/games/RocketLeague/leagues/master-cup":
        title = "Master Cup Rocket League League";
      component = <Master_Cup />
      break;
      case "/games/RocketLeague/leagues/nace":
        title = "NACE Rocket League League";
      component = <NACE_RL />
      break;
      case "/games/RocketLeague/leagues/nacl":
        title = "NACL Rocket League League";
      component = <NACL_Rl />
      break;
      case "/games/RocketLeague/leagues/nasef":
        title = "NASEF Rocket League League";
      component = <NASEF_RL />
      break;
      case "/games/RocketLeague/leagues/necc":
        title = "NECC Rocket League League";
      component = <NECC_RL />
      break;
      case "/games/RocketLeague/leagues/necl":
        title = "NECL Rocket League League";
      component = <NECL_HS_RL />
      break;
      case "/games/RocketLeague/leagues/nitro-league":
        title = "Nitro Rocket League League";
      component = <Nitro_League />
      break;
      case "/games/RocketLeague/leagues/opse":
        title = "OPSE Rocket League League";
      component = <OPSE_RL />
      break;
      case "/games/RocketLeague/leagues/playvs":
        title = "PlayVS Rocket League League";
      component = <PlayVS_HS_RL />
      break;
      case "/games/RocketLeague/leagues/raket-ligaen":
        title = "Raket Ligaen League";
      component = <Raket_Ligaen />
      break;
      case "/games/RocketLeague/leagues/scottish-esports":
        title = "Scottish Esports Rocket League League";
      component = <Scottish_Esports_RL />
      break;
      case "/games/RocketLeague/leagues/tec":
        title = "The Esports Company Rocket League League";
      component = <TEC_RL />
      break;
      case "/games/RocketLeague/leagues/ugc":
        title = "UGC Rocket League League";
      component = <UGC_College />
      break;
      case "/games/RocketLeague/leagues/ugc-hs":
        title = "UGC High School Rocket League League";
      component = <UGC_HS_RL />
      break;
      case "/games/RocketLeague/leagues/united-rogue":
        title = "United Rogue Rocket League League";
      component = <United_Rogue />
      break;
      case "/games/RocketLeague/leagues/vantagg":
        title = "VantaGG Rocket League League";
      component = <VantaGG_HS_RL />
      break;
    // ROCKET LEAGUE LEAGUES

    // ROCKET LEAGUE WAGERS
    case "/games/RocketLeague/wagers/cmg":
      title = "Checkmate Gaming Rocket League Wagers";
      component = <CMGRL />
      break;
      case "/games/RocketLeague/wagers/dropingaming":
        title = "DropIn Gaming Rocket League Wagers";
      component = <DropinRL />
      break;
      case "/games/RocketLeague/wagers/gamersaloon":
        title = "GamerSaloon Rocket League Wagers";
      component = <SaloonRL />
      break;
    // ROCKET LEAGUE WAGERS

    // VALORANT HEAD TO HEAD
      case "/games/Valorant/head-to-head/college-hub":
        title = "College Valorant Hub Scrims";
      component = <College_Hub />
      break;
      case "/games/Valorant/head-to-head/dropingaming":
        title = "DropIn Gaming Valorant Head to Head";
      component = <Dropin_VAL_XP />
      break;
      case "/games/Valorant/head-to-head/esport-scrim":
        title = "Esport Scrim Valorant";
      component = <EsportScrim />
      break;
      case "/games/Valorant/head-to-head/gankster":
        title = "Gankster Valorant";
      component = <GanksterVAL />
      break;
      case "/games/Valorant/head-to-head/project-v":
        title = "Project V Valorant";
      component = <ProjectV />
      break;
    // VALORANT HEAD TO HEAD

    // VALORANT WAGERS
      case "/games/Valorant/wagers/dropingaming":
        title = "DropIn Gaming Valorant Wagers";
      component = <DropinVAL />
      break;
    // VALORANT WAGERS

    // VALORANT LEAGUES
      case "/games/Valorant/leagues/ecac-leagues":
        title = "ECAC Valorant Leagues";
      component = <Frontpage_ECAC />
      break;
      case "/games/Valorant/leagues/ecac-leagues/division-a":
        title = "ECAC Valorant Division A League";
      component = <DivisionA />
      break;
      case "/games/Valorant/leagues/ecac-leagues/division-b":
        title = "ECAC Valorant Division B League";
      component = <DivisionB />
      break;
      case "/games/Valorant/leagues/ecac-leagues/division-c":
        title = "ECAC Valorant Division C League";
      component = <DivisionC />
      break;

      case "/games/Valorant/leagues/frontline-leagues":
        title = "Frontline Valorant Leagues";
      component = <Frontpage_Frontline_val />
      break;
      case "/games/Valorant/leagues/frontline-leagues/academy":
        title = "Frontline Valorant Academy League";
      component = <Academy_val />
      break;
      case "/games/Valorant/leagues/frontline-leagues/prime":
        title = "Frontline Valorant Prime League";
      component = <Prime />
      break;

      case "/games/Valorant/leagues/lpl-leagues":
        title = "Lets Play Live Valorant Leagues";
      component = <Frontpage_LPL />
      break;
      case "/games/Valorant/leagues/lpl-leagues/amateur":
        title = "Lets Play Live Amateur League";
      component = <Amateur />
      break;
      case "/games/Valorant/leagues/lpl-leagues/evolution":
        title = "Lets Play Live Evolution League";
      component = <Evolution />
      break;
      case "/games/Valorant/leagues/lpl-leagues/open":
        title = "Lets Play Live Open League";
      component = <Open />
      break;

      case "/games/Valorant/leagues/nace-leagues":
        title = "NACE Valorant Leagues";
      component = <Frontpage_NACE />
      break;
      case "/games/Valorant/leagues/nace-leagues/open":
        title = "NACE Valorant Open League";
      component = <NACE_Open />
      break;
      case "/games/Valorant/leagues/nace-leagues/varsity":
        title = "NACE Valorant Varsity League";
      component = <NACE_VARSITY />
      break;

      case "/games/Valorant/leagues/victoris-leagues":
        title = "Victoris Valorant Leagues";
      component = <Frontpage_Val_Victoris />
      break;
      case "/games/Valorant/leagues/victoris-leagues/vls":
        title = "Victoris Legend League";
      component = <VLS />
      break;
      case "/games/Valorant/leagues/victoris-leagues/vrs":
        title = "Victoris Rival League";
      component = <VRS />
      break;

      case "/games/Valorant/leagues/cgn-league":
        title = "CGN Valorant League";
      component = <CGN_League_Val />
      break;
      case "/games/Valorant/leagues/csmg":
        title = "CSMG Valorant League";
      component = <CSMG_VAL />
      break;
      case "/games/Valorant/leagues/riot":
        title = "Collegiate Valorant League";
      component = <College_Val_Riot />
      break;
      case "/games/Valorant/leagues/egfc":
        title = "EGFC Valorant League";
      component = <EGFC_College_VAL />
      break;
      case "/games/Valorant/leagues/egfh":
        title = "EGFH Valorant League";
      component = <EGFH_VAL />
      break;
      case "/games/Valorant/leagues/hbcu":
        title = "HBCU Valorant League";
      component = <HBCU_VAL />
      break;
      case "/games/Valorant/leagues/hsel":
        title = "High School Esports Valorant League";
      component = <HSEL_VAL />
      break;
      case "/games/Valorant/leagues/nasef":
        title = "NASEF Valorant League";
      component = <NASEF_VAL />
      break;
      case "/games/Valorant/leagues/necc":
        title = "NECC Valorant League";
      component = <NECC_Val />
      break;
      case "/games/Valorant/leagues/necl":
        title = "NECL Valorant League";
      component = <NECL_VAL />
      break;
      case "/games/Valorant/leagues/njcaae":
        title = "NJCAAE Valorant League";
      component = <NJCAAE_Val />
      break;
      case "/games/Valorant/leagues/opse":
        title = "OPSE Valorant League";
      component = <OPSE_VAL />
      break;
      case "/games/Valorant/leagues/scottish-esports":
        title = "Scottish Esports Valorant League";
      component = <Scottish_Val />
      break;
      case "/games/Valorant/leagues/talent-league":
        title = "Talent Valorant League";
      component = <Talent_League />
      break;
      case "/games/Valorant/leagues/tec":
        title = "The Esports Company Valorant League";
      component = <TEC_VAL />
      break;
      case "/games/Valorant/leagues/ugc-college":
        title = "UGC Collegiate Valorant League";
      component = <UGC_College_Val />
      break;
      case "/games/Valorant/leagues/unified":
        title = "Unified Valorant League";
      component = <Unified_Val />
      break;
      case "/games/Valorant/leagues/vantagg":
        title = "VantaGG Valorant League";
      component = <VantaGG_VAL />
      break;
      case "/games/Valorant/leagues/vct-game-changers":
        title = "VCT Game Changers League";
      component = <VCT_Game />
      break;
      case "/games/Valorant/leagues/vmaster":
        title = "VMaster Valorant League";
      component = <VMaster />
      break;
    // VALORANT LEAGUES
      case "/playground":
      component = <Playground />
      break;
      case "/more/playground-two":
      component = <PlaygroundTwo />
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