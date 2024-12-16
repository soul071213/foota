import './style.css';
import Header from '../../components/Header/Header';
import Br from '../../components/br/br';
import Rank_c from '../../components/rank/rank_c';
import { db, collection, getDocs } from '../../firebase';
import { useEffect, useState } from 'react';

interface Team {
    common_name: string;
    matches_played: number;
    wins: number;
    draws: number;
    losses: number;
    total_point: number;
    goal_difference: number;
}

export default function Rank() {
    const [teams, setTeams] = useState<Team[]>([]);

    useEffect(() => {
        const fetchTeams = async () => {
            const teamsCollection = collection(db, 'teams');
            const teamsSnapshot = await getDocs(teamsCollection);
            const teamsList: Team[] = teamsSnapshot.docs.map(doc => doc.data() as Team);
            setTeams(teamsList);
        };

        fetchTeams();
    }, []);

    return (
        <>
            <Header />
            <div className='RankLayout'>
                <div className='RankContainer'>
                    <Br text='리그 랭킹' />
                    <div className='Ranks_Container'>
                        <div className='titles'>
                            클럽
                            <div className='titleese'>
                                <div>경기</div>
                                <div>승</div>
                                <div>무</div>
                                <div>패</div>
                                <div>득실</div>
                                <div>승점</div>
                            </div>
                        </div>
                        <div className='rank_components'>
                            {teams
                            .sort((a, b) => b.total_point - a.total_point)
                            .map((team, index) => {
                                return (
                                <Rank_c
                                    key={index}
                                    ranks={index + 1}
                                    goal={team.goal_difference}
                                    club_name={team.common_name}
                                    lose={team.losses}
                                    matchs={team.matches_played}
                                    nowin={team.draws}
                                    points={team.total_point}
                                    win={team.wins}
                                />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
