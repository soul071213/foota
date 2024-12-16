import './style.css';
import Header from '../../components/Header/Header';
import Player_card from '../../components/Player_card/Player_card';
import Salh from "@/assets/images/players/salh.png";
import Mane from "@/assets/images/players/mane.png";
import Obameyang from "@/assets/images/players/obameyang.png";

export default function Players(){
    return(
        <>
            <Header/>
            <div className='Players_Layout'>
                <p className='biger_texts'>올해의 득점왕</p>
                <p className='little_texts'>프리미어리그 18/19 시즌</p>
                <div className='cards'>
                    <Player_card photo={Salh} club='리버풀'  name='모하메드 살라' />
                    <Player_card photo={Mane} club='리버풀'  name='마네' />
                    <Player_card photo={Obameyang} club='아스날'  name='오바메양' />
                </div>
            </div>
        </>
    );
}