import './style.css';
import Header from '../../components/Header/Header';
import Br from '../../components/br/br';
import Data_container from '../../components/Data_page/Data_Container/Data_Container';
import People from "@/assets/images/data_logos/people.svg";
import Person from "@/assets/images/data_logos/person.svg";
import Dialog from "@/assets/images/data_logos/dialog.svg";
import Database from "@/assets/images/data_logos/database.svg";


export default function Data_page(){
    return(
        <>
            <Header/>
            <div className='DataLayout'>
                <div className='DataContainer'>
                    <Br text='데이터 정보'/>
                    <div className='Data_flex'>
                        <Data_container main_text='팀 데이터' first='2018/2019 시즌의 팀별 승점과 승/패 여부를 확인 할 수' second='있습니다.' logos={People} links='https://drive.google.com/file/d/1NEBTJK2BEdyUL7JhYKnw9vdDNRzMzLmU/view?usp=drive_link'/>
                        <Data_container main_text='매치 데이터' first='라운드당 매치 정보와 일정을 알 수 있으며 승패 여부도 확인' second='가능합니다.' logos={Dialog} links='https://drive.google.com/file/d/14UtpJ89zS7VFjJUYocGlAZgdccVSAOCu/view?usp=sharing'/>
                    </div>
                    <div className='Data_flex'> 
                        <Data_container main_text='리그 데이터' first='리그 총 경기수와 경기 당 평균 골 갯수와 같은 리그 총합' second='정보를 알 수 있습니다.' logos={Database} links='https://drive.google.com/file/d/1WVl5MNm3ZUr1XgxFyoCqFf2-pwHZVLIY/view?usp=sharing'/>
                        <Data_container main_text='선수 데이터' first='팀별 선수 득점, 도움, 카드 갯수와 같은 선수 스탯을 볼 수' second='있습니다.' logos={Person} links='https://drive.google.com/file/d/1wmbC-X3RenC7QfDm5GaojbSPlYGHa5j4/view?usp=sharing'/>
                    </div>
                </div>
            </div>
            
        </>
    );
}