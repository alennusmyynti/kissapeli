

export default function Card({card}){

    return(
<div className={card.type}>
   <img src={card.image}></img>
   <ul className="stat-list">

        <li className="title">
            <span>{card.title}</span>
        </li>
        {card.stats.map((stat, index) => (
            <li className="stat-list-item" key={index}>
                <span>{stat.name}:</span>
                <span className="value">{stat.value}</span>
            </li>
        ))}
       
       
    
    </ul>

</div>

    );
}