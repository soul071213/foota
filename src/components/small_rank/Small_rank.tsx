import Images_order from '../../pages/Rank_page/images_order';
import './style.css';
import Name_Changer from '../../components/name_changer';

interface datas{
    ranks:number;
    club_name:string;
    points:number;
}
export default function Small_rank({ranks,club_name,points}:datas){
    return(
        <div className='Layouts'>
            <div className='ranksss'>{ranks}</div>
            <Images_order teams_names={club_name}></Images_order>
            <div className='club_names'>{Name_Changer({teamName:club_name})}</div>
            <div className='textssss'>
                <div className='pss'>{points}</div>
            </div>

        </div>
    );
}