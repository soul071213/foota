import AFC from "@/assets/images/logos/AFC_Bournemouth.png";
import Arsenal_FC from "@/assets/images/logos/Arsenal_FC.svg";
import Brightont from "@/assets/images/logos/Brighton_and_Hove_Albion_FC_crest.svg";
import Burnley from "@/assets/images/logos/Burnley_FC.png";
import Cardiff_City from "@/assets/images/logos/Cardiff_City.png";
import Chelsea_FC from "@/assets/images/logos/Chelsea_FC.png";
import Crystal from "@/assets/images/logos/crystal.png";
import Everton from "@/assets/images/logos/Everton_FC.png";
import FC_Southampton from "@/assets/images/logos/FC_Southampton.png";
import Fulham from "@/assets/images/logos/Fulham_FC.png";
import Huddersfield_Town from "@/assets/images/logos/Huddersfield_Town.png";
import Leicester from "@/assets/images/logos/Leicester_City.png";
import Liverpool from "@/assets/images/logos/Liverpool.png";
import Manchester from "@/assets/images/logos/Manchester City.webp";
import Newcastle_United from "@/assets/images/logos/Newcastle_United.png";
import Tottenham_Hotspur from "@/assets/images/logos/Tottenham_Hotspur.png";
import Watford from "@/assets/images/logos/Watford.png";
import West_Ham_United_FC from "@/assets/images/logos/West_Ham_United_FC.png";
import Wolverhampton from "@/assets/images/logos/Wolverhampton_Wanderers_FC.png";
import ManU from "@/assets/images/logos/manU.svg";

import './images.order.css';

interface datas{
    teams_names:string;
}
export default function Images_order({teams_names}:datas){
    const getLogo = (teamName: string): string => {
        if (teamName === 'AFC Bournemouth') return AFC
        if (teamName === 'Manchester City') return Manchester;
        if (teamName === 'Liverpool') return Liverpool;
        if (teamName === 'Chelsea') return Chelsea_FC;
        if (teamName === 'Tottenham Hotspur') return Tottenham_Hotspur;
        if (teamName === 'Arsenal') return Arsenal_FC;
        if (teamName==='Brighton & Hove Albion') return Brightont;
        if (teamName==='Burnley') return Burnley;
        if (teamName==='Cardiff City') return Cardiff_City;
        if (teamName==='Crystal Palace') return Crystal;
        if (teamName==='Everton') return Everton;
        if (teamName==='Fulham') return Fulham;
        if (teamName==='Huddersfield Town') return Huddersfield_Town;
        if (teamName==='Leicester City') return Leicester;
        if (teamName==='Manchester United') return ManU;
        if (teamName==='Newcastle United') return Newcastle_United;
        if (teamName==='Southampton') return FC_Southampton;
        if (teamName==='Watford') return Watford;
        if (teamName==='West Ham United') return West_Ham_United_FC;
        if (teamName==='Wolverhampton Wanderers') return Wolverhampton;
        return '/path/to/default_logo.png'; // 기본 로고
    };
    return(
        <>
            <img src={getLogo(teams_names)} className="imgssss"/>
        </>
    );
}