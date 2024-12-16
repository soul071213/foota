import './style.css';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Br from '../../components/br/br';
import { db } from '../../firebase';  // firebase 설정 파일에서 db 가져오기
import { collection, getDocs } from 'firebase/firestore';
import Match_box from '../../components/match_box/Match_box';

export default function Match() {
    const [matches, setMatches] = useState<any[]>([]);  // 매치 데이터를 저장할 상태

    // 득실 차이를 통해 승패를 결정하는 함수
    const judgement = (one: number, two: number) => {
        if (one > two) {
            return 1;  // home team 승
        } else if (one < two) {
            return 2;  // away team 승
        } else {
            return 0;  // 무승부
        }
    }

    // Firestore에서 데이터를 가져오는 useEffect
    useEffect(() => {
        const fetchMatches = async () => {
            const matchesCollection = collection(db, 'Game Week');  // 'Game Week' 컬렉션 가져오기
            const matchSnapshot = await getDocs(matchesCollection);
            const matchList = matchSnapshot.docs.map(doc => doc.data());
            setMatches(matchList);  // 상태 업데이트
        };

        fetchMatches();
    }, []);

    return (
        <>
            <Header />
            <div className='matchLayout'>
                <div className='matchContainer'>
                    <Br text='매치 정보' />
                    {matches.map((match, index) => (
                        <Match_box
                            key={index}
                            one_clubname={match.home_team_name}
                            one_clubscore={match.home_team_goal_count}
                            judge={judgement(match.home_team_goal_count, match.away_team_goal_count)}
                            date={match.date_GMT}
                            two_clubname={match.away_team_name}
                            two_clubscore={match.away_team_goal_count}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
