interface Datas {
    teamName: string;
}

const Name_Changer = ({ teamName }: Datas) => {
    if (teamName === 'AFC Bournemouth') return '본머스';
    if (teamName === 'Manchester City') return '맨시티';
    if (teamName === 'Liverpool') return '리버풀';
    if (teamName === 'Chelsea') return '첼시';
    if (teamName === 'Tottenham Hotspur') return '토트넘';
    if (teamName === 'Arsenal') return '아스날';
    if (teamName === 'Brighton & Hove Albion') return '브라이튼';
    if (teamName === 'Burnley') return '번리';
    if (teamName === 'Cardiff City') return '카디프';
    if (teamName === 'Crystal Palace') return '크팰';
    if (teamName === 'Everton') return '에버턴';
    if (teamName === 'Fulham') return '풀햄';
    if (teamName === 'Huddersfield Town') return '허디스필드';
    if (teamName === 'Leicester City') return '레스터';
    if (teamName === 'Manchester United') return '맨유';
    if (teamName === 'Newcastle United') return '뉴캐슬';
    if (teamName === 'Southampton') return '사우스햄튼';
    if (teamName === 'Watford') return '왓포드';
    if (teamName === 'West Ham United') return '웨햄';
    if (teamName === 'Wolverhampton Wanderers') return '울브스';
    return '';
}

export default Name_Changer;
