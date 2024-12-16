import Header from '../../components/Header/Header';
import Winner from '@/assets/images/sliber/winner.png';
import Players from '@/assets/images/sliber/players.png';
import Riverpoor from '@/assets/images/sliber/riverpoor.png';
import Kristar from '@/assets/images/sliber/kristar.png';
import Graps from "@/assets/images/show_box/graph.svg";
import './Main.css';
import Show_box from '../../components/Main/show_box/show_box';
import Dialog from '@/assets/images/show_box/dilog.svg';
import Person from '@/assets/images/show_box/person.svg';
import Rank from '@/assets/images/show_box/ranking.svg';
import Left from '@/assets/images/left.svg';
import Right from '@/assets/images/right.svg';
import { useState,useEffect } from 'react';
import { db, collection, getDocs } from '../../firebase';
import Small_rank from '../../components/small_rank/Small_rank';

function Main() {

  const [count, setCount] = useState<number>(1);


  useEffect(()=>{
    if(count==1){
      setImages(Winner);
    }
    else if(count==2){
      setImages(Riverpoor);
    }
    else if(count==3){
      setImages(Players);
    }
    else if(count==4){
      setImages(Kristar);
    }
  },[count])

  const onPlus=()=>{
    if(count<4){
      setCount(count+1)
    }
    else{
      setCount(1)
    }
  }
  const onMinus=()=>{
    if(count>1){
      setCount(count-1)
    }
    else{
      setCount(4)
    }
  }
  const [teams, setTeams] = useState<Team[]>([]);
  interface Team {
    common_name: string;
    matches_played: number;
    wins: number;
    draws: number;
    losses: number;
    total_point: number;
    goal_difference: number;
}

  useEffect(() => {
      const fetchTeams = async () => {
          const teamsCollection = collection(db, 'teams');
          const teamsSnapshot = await getDocs(teamsCollection);
          const teamsList: Team[] = teamsSnapshot.docs.map(doc => doc.data() as Team);
          setTeams(teamsList);
      };

      fetchTeams();
  }, []);
  const [images,setImages]=useState<string>(Winner);

  return (
    <>
      <Header />
      <div className='main_Layout'>
        <div className='image_Layout'>
          <div className='imagesd'>
            <img src={images} alt="이미지" className='sliber_images'/>
            <div className='number_kind'>
              <div className='numbers'>
                <div><p>{count}</p><p>/</p><p>4</p></div></div>
              <div className='trun' onClick={onMinus}>
                <img src={Left} alt="left" />
              </div>
              <div className='trun' onClick={onPlus}>
                <img src={Right} alt="right" />
              </div>
            </div>
          </div>
          <div className='Ranking_Container'>
                          {teams
                            .sort((a, b) => b.total_point - a.total_point)
                            .map((team, index) => {
                                return (
                                <Small_rank
                                    key={index}
                                    ranks={index + 1}
                                    club_name={team.common_name}
                                    points={team.total_point}
                                />
                                );
                            })}
          </div>
        </div>
      </div>
      <div className='gray_Container'>
        <Show_box little_text="데이터 개요 설명" big_text="데이터 정보" bottom_text="선수 ∙ 경기 수 ∙ 팀" icons={Graps} />
        <Show_box little_text="프리미어리그 18/19" big_text="리그 랭킹" bottom_text="시즌 종합 랭킹" icons={Rank} />
        <Show_box little_text="올해의 득점왕은?" big_text="선수 랭킹" bottom_text="득점 ∙ 도움" icons={Person}/>
        <Show_box little_text="라운드별 매치 일정" big_text="매치 정보" bottom_text="주간 ∙ 일정 ∙ 승/패" icons={Dialog}/>
      </div>
    </>
  )
}

export default Main
