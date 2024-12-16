import './style.css';

interface Data {
    main_text: string;
    first: string;
    second: string;
    logos: string;
    links: string;
}

export default function Data_container({ main_text, first, second, logos, links }: Data) {
    return (
        <div className="Data_layout">
            <div className='data_Container'>
                <div>
                    <img src={logos} alt="logos"/>
                    <p className='main_text'>{main_text}</p>
                    <p className='text'>{first}</p>
                    <p className='text'>{second}</p>
                </div>
                <div className='linkss'>
                    <div className='links'>
                        <a href={links}>보러가기</a>
                    </div>
                </div>

                
            </div>
        </div>
    );
}
