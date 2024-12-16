import './style.css';
import { useState ,useEffect} from 'react';
import Imagess_order from './images_orders';
import Name_Changer from '../name_changer';

interface datas{
    one_clubname:string;
    one_clubscore:number;
    judge:number;
    date:string;
    two_clubname:string;
    two_clubscore:number;
}

export default function Match_box({one_clubname,one_clubscore,judge,date,two_clubname,two_clubscore}:datas){
    const [name,setname]=useState<string>();
    useEffect(()=>{
        if(judge==0){
            setname('무승부');
        }
        else if(judge==1)
        {
            setname(`${Name_Changer({ teamName: one_clubname })} 승`);
        }
        else if(judge==2){
            setname(`${Name_Changer({ teamName: two_clubname })} 승`);
        }
    },[judge])
    return(
        <div className='match_cards'>
                        <div className='logoandtext'>
                        <Imagess_order teams_names={one_clubname}/>
                            <p>{Name_Changer({ teamName: one_clubname })}</p>
                        </div>
                        <p className='score_l'>{one_clubscore}</p>
                        <div className='lins'></div>
                        <div className='shows'>
                            <p className='jduge'>{name}</p>
                            <p className='date'>{date}</p>
                        </div>
                        <div className='lins'></div>
                        <p className='score_r'>{two_clubscore}</p>
                        <div className='logoandtext_r'>
                            <div>
                             <p>{Name_Changer({ teamName: two_clubname })}</p>
                            </div>
                            
                            <Imagess_order teams_names={two_clubname}/>
                        </div>
                    </div>
    );
}