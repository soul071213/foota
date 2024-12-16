import Images_order from '../../pages/Rank_page/images_order';
import './style.css';
import Name_Changer from '../../components/name_changer';

interface datas{
    ranks:number;
    club_name:string;
    matchs:number;
    win:number;
    nowin:number;
    lose:number;
    goal:number;
    points:number;
}
export default function Rank_c({ranks,club_name,matchs,win,nowin,lose,goal,points}:datas){
    return(
        <div className='Layout'>
            <div className='rankss'>{ranks}</div>
            <Images_order teams_names={club_name}></Images_order>
            <div className='club_name'>{Name_Changer({teamName:club_name})}</div>
            <div className='textsss'>
                <div className='ps'>{matchs}</div>
                <div className='ps'>{win}</div>
                <div className='ps'>{nowin}</div>
                <div className='ps'>{lose}</div>
                <div className='ps'>{goal}</div>
                <div className='ps'>{points}</div>
            </div>

        </div>
    );
}