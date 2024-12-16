import './style.css';

interface br{
    text:string;
}

export default function Br({text}:br){
    return(
        <div>
            <p className='texts'>{text}</p>
            <div className='br'></div>
        </div>
    );
}