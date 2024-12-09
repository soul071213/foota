import Logo from '@/assets/images/Logo.svg';
import './Header.css';
import '@/assets/fonts/fonts.css';

export default function Header() {
  return (
    <div className='header_full'>
      <div className="header_container">
        <div>
            <img src={Logo} alt="logo" />
        </div>
        <div className='header_atags'>
            <a href="">데이터 정보</a>
            <a href="">리그 랭킹</a>
            <a href="">선수 랭킹</a>
            <a href="">매치 정보</a>
        </div>
      </div>
    </div>
  )
}