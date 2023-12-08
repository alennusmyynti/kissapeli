export default function PlayButton({text, handleClick}){
    return(
        <button type="button" onClick={handleClick} className="play-button">{text}</button>
);

}