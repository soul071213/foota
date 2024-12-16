import Logo from '@/assets/images/Logo.svg';
import './Header.css';
import '@/assets/fonts/fonts.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate=useNavigate();
  const mainlink=()=>{
    navigate('/');
  }
  const Datalink=()=>{
    navigate('/Data');
  }
  const ranklink=()=>{
    navigate('/rank');
  }
  const playerlink=()=>{
    navigate('/player');
  }
  const matchlink=()=>{
    navigate('/match');
  }
  return (
    <div className='header_full'>
      <div className="header_container">
        <div onClick={mainlink}>
            <img src={Logo} alt="logo" />
        </div>
        <div className='header_atags'>
            <a onClick={Datalink}>데이터 정보</a>

            <a onClick={ranklink}>리그 랭킹</a>
            <a onClick={playerlink}>선수 랭킹</a>
            <a onClick={matchlink}>매치 정보</a>
        </div>
      </div>
    </div>
  )
}