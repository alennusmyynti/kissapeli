
import Card from "./components/card";
import './App.css';
import PlayButton from "./components/PlayButton";
import { useState } from "react";


const getRandomInt=(min,max) => Math.floor(min+(max-min+1)*Math.random())




const allCards=[
  {
    image:"http://placekitten.com/120/103?image=0",
  title:'Cat-astrophe',
  },
  {
    image:"https://placekitten.com/120/102?image=1",
    title:'Mr Pawsome',
  },
  {
    image:"http://placekitten.com/120/103?image=2",
  title:'Pawnage',
  },
  {
    image:"http://placekitten.com/120/103?image=3",
  title:'Catalonian',
  },
  {
    image:"http://placekitten.com/120/103?image=4",
  title:'Catrice',
  },
  {
    image:"http://placekitten.com/120/103?image=5",
  title:'Captain Purrs',
  },
  {
    image:"http://placekitten.com/120/103?image=6",
  title:'Purrfect',
  },
  {
  image:"https://placekitten.com/120/103?image=7",
  title:'Catsparow',
  },   {
  image:"https://placekitten.com/120/103?image=8",
  title:'Catnip',
  },   {
    image:"https://placekitten.com/120/103?image=9",
    title:'Mittens',
  },   {
  image:"http://placekitten.com/120/103?image=10",
  title:'Ka-Paw',
  },
  {
    image:"https://placekitten.com/120/103?image=11",
    title:'Chingis Khat',
    },
    {
      image:"https://placekitten.com/120/103?image=12",
      title:'Pawder Sniffer',
      },        
  {
  image:"http://placekitten.com/120/103?image=15",
  title:'RamPaw G',
  },
]

var playerid=6
var enemyid=6

const createCard=(index,side)=>({
  type:"card",
  image:allCards[index].image,
  stats:[
    {name:'Cuteness', value: 3+Math.round(5*Math.random())},
    {name:'Power', value:5+Math.round(3*Math.random())},
    {name:'Vitality', value:8+Math.round(8*Math.random())},
    {name:'Speed', value:3+Math.round(3*Math.random())},
  ],
  title:allCards[index].title,
  id:crypto.randomUUID(),
})

const deck=Array(allCards.length).fill(null).map((_,index)=>createCard(index,0));
const half=Math.ceil(deck.length/2);


const dealCards=()=>{
  shuffle(deck)
  return{
    player:deck.slice(0,half),
    enemy: deck.slice(half)
  }
}

function shuffle(array){
  for(let i=array.length-1; i>0; i--){
    const j = Math.floor(Math.random()*(i+1));
    [array[i],array[j]] = [array[j],array[i]];
  }
}

export default function app(){
  const[result,SetResult] = useState()
  const[cards,SetCards]=useState(dealCards)
const[gameState, setGameState]=useState('play')
function compareCards(){
  const playerstats=cards.player[playerid].stats
  const enemystats=cards.enemy[enemyid].stats



  var playerturns=0
  var enemyturns=0
  if (( playerstats[1].value)>enemystats[0].value){
   playerturns=Math.ceil( enemystats[2].value/(playerstats[3].value/enemystats[3].value*( playerstats[1].value-enemystats[0].value)))
}else{
   playerturns=Math.ceil( enemystats[2].value/(playerstats[3].value))
}
if ((enemystats[1].value)>playerstats[0].value){
   enemyturns=Math.ceil( playerstats[2].value/(enemystats[3].value/playerstats[3].value*(enemystats[1].value-playerstats[0].value)))
}else{
   enemyturns=Math.ceil( playerstats[2].value/(enemystats[3].value))
}




  if (playerturns>enemyturns){
    SetResult(cards.enemy[enemyid].title+ " won in "+enemyturns+" turns!")
     console.log(cards.enemy[enemyid].title+ " won in "+enemyturns+" turns!");
    

  }else if(playerturns<enemyturns){
    SetResult(cards.player[playerid].title+ " won in "+playerturns+" turns!");
 console.log(cards.player[playerid].title+ " won in "+playerturns+" turns!");


  }else{
     SetResult("Draw! The fight lasted for "+playerturns+" turns!")
      console.log("Draw! The fight lasted for "+playerturns+" turns!");

  }
  console.log([
    Math.ceil( enemystats[2].value/(playerstats[3].value/enemystats[3].value*( playerstats[1].value-enemystats[0].value))),
    Math.ceil( enemystats[2].value/(playerstats[3].value)),
    Math.ceil( playerstats[2].value/(enemystats[3].value/playerstats[3].value*(enemystats[1].value-playerstats[0].value))),
    Math.ceil( playerstats[2].value/(enemystats[3].value)),
    enemystats, playerstats,playerid
   ])

   setGameState(result)

}



return(
<div>
  
  <h1 className="game">Pawsome Pawlers</h1>
  <div className="game">
  <ul className="card-list">

    {cards.player.map((pCard, index)=>(

      <li className="card-list-item player" key={pCard.id}>
        {pCard.type="card-player"}
        <Card card={index===0 ? pCard : null}/>

      </li>
    ))}
  </ul>

 
  <div className="center-area">
  <p>{result || 'Presss the button'}</p>

  <PlayButton text={"Fight!"} handleClick={compareCards}/>

  </div>
  <ul className="card-list enemy">

    {cards.enemy.map((eCard, index)=>(

      <li className="card-list-item enemy" key={eCard.id}>
        {eCard.type="card-enemy"}
        <Card card={index===0 ? eCard : null}/>

      </li>
    ))}
  </ul>


  </div>
</div>
);
}