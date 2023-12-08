

export default function Card({card, selectStat, handleSelect}){

    if (!card) return <div className="card"/>;

    return(
<div className={card.type}>
   <img src={card.image}></img>
   <ul className="stat-list">

        <li className="title">
            <span>{card.title}</span>
        </li>
        {card.stats.map((stat, index) => (
            <li className={`stat-list-item${selectStat===index ? ' selected':''}`}

            onClick={()=>handleSelect&&handleSelect(index)}
                key={index}>
                <span>{stat.name}:</span>
                <span className="value">{stat.value}</span>
            </li>
        ))}
       
       
    
    </ul>

</div>

    );
}