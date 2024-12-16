import './style.css';
import Medal from "@/assets/images/medal.svg";

interface card_text{
    photo:string;
    name:string;
    club:string;
}

export default function Player_card({photo,name,club}:card_text){
    return(
        <div className='card_Layout'>
            <div className='logoss'>
                <img src={photo} alt="logos" />
                <div className='medals'>
                    <img src={Medal} alt="logos" />
                </div>
            </div>
            <p className='card_name'>{name}</p>
            <p className='card_club'>{club}</p>
            <div className='card_goals'>
                22골
            </div>
        </div>
    );
}