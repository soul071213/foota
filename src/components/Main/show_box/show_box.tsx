import './style.css';
import '@/assets/fonts/fonts.css';
import Backs from '@/assets/images/back.svg';
import { useNavigate } from 'react-router-dom';

interface ShowBoxProps {
  little_text: string;
  big_text: string;
  bottom_text: string;
  icons:string;
}

export default function Show_box({ little_text, big_text, bottom_text,icons}: ShowBoxProps) {
  const navigate=useNavigate();
  const links=()=>{
    if(big_text=='데이터 정보'){
      navigate('/Data');
    }
    else if(big_text=='리그 랭킹'){
      navigate('/rank');
    }
    else if(big_text=='선수 랭킹'){
      navigate('/player');
    }
    else if(big_text=='매치 정보'){
      navigate('/match');
    }
  }
  return (
    <div className="Container" onClick={links}>
      <div>
        <div className="title">
          <div className="title_text">
            <p className='little_text'>{little_text}</p>
            <p className='big_text'>{big_text}</p>
          </div>
          <div className="back">
              <img src={Backs} alt="" />
          </div>
        </div>
        <div className="logos">
          <img src={icons} alt="logos" />
        </div>
      </div>
      <div className='bottom'>
        <div className="bottom_text">
              <p>{bottom_text}</p>
        </div>
      </div>

    </div>
  );
}
