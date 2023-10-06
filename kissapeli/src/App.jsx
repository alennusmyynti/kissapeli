
import Card from "./components/card";
import './App.css';
import { useState } from "react";



const getRandomInt=(min,max) => Math.floor(min+(max-min+1)*Math.random())

const playerCard=[
  {
    type:"card-player",
    image:"http://placekitten.com/120/103?image=0",
    stats:[
      {name:'Cuteness', value: 3+Math.round(5*Math.random())},
      {name:'Power', value:5+Math.round(3*Math.random())},
      {name:'Vitality', value:8+Math.round(8*Math.random())},
      {name:'Speed', value:3+Math.round(3*Math.random())},
    ],
    title:'Cat-astrophe',
},
{
  type:"card-player",
  image:"https://placekitten.com/120/103?image=7",
  stats:[
    {name:'Cuteness', value: 3+Math.round(5*Math.random())},
    {name:'Power', value:5+Math.round(3*Math.random())},
    {name:'Vitality', value:8+Math.round(8*Math.random())},
    {name:'Speed', value:3+Math.round(3*Math.random())},
  ],
  title:'Catsparow',
}
]



const enemyCard=[
  {
    type:"card-enemy",
    image:"https://placekitten.com/120/102?image=1",
    stats:[
      {name:'Cuteness', value: 3+Math.round(5*Math.random())},
      {name:'Power', value:5+Math.round(3*Math.random())},
      {name:'Vitality', value:8+Math.round(8*Math.random())},
      {name:'Speed', value:3+Math.round(3*Math.random())},
    ],
    title:'Mr Pawsome',
},
{
  type:"card-enemy",
  image:"https://placekitten.com/120/102?image=10",
  stats:[
    {name:'Cuteness', value: 3+Math.round(5*Math.random())},
    {name:'Power', value:5+Math.round(3*Math.random())},
    {name:'Vitality', value:8+Math.round(8*Math.random())},
    {name:'Speed', value:3+Math.round(3*Math.random())},
  ],
  title:'Ka-Paw',
},
{
  type:"card-enemy",
  image:"https://placekitten.com/120/103?image=15",
  stats:[
    {name:'Cuteness', value: 3+Math.round(5*Math.random())},
    {name:'Power', value:5+Math.round(3*Math.random())},
    {name:'Vitality', value:8+Math.round(8*Math.random())},
    {name:'Speed', value:3+Math.round(3*Math.random())},
  ],
  title:'RamPaw G',
}

]

var playerid=getRandomInt(0,playerCard.length-1)
var enemyid=getRandomInt(0,enemyCard.length-1)

const cards=[playerCard,playerid,enemyCard,enemyid]

const createCard=(index,side)=>({
  type:cards[2*side][2*side+1].type,
  image:cards[2*side][2*side+1].image,
  stats:[
    {name:'Cuteness', value: 3+Math.round(5*Math.random())},
    {name:'Power', value:5+Math.round(3*Math.random())},
    {name:'Vitality', value:8+Math.round(8*Math.random())},
    {name:'Speed', value:3+Math.round(3*Math.random())},
  ],
  title:cards[2*side][2*side+1].title,
  id:crypto.randomUUID()
})


export default function app(){
  const[result,SetResult] = useState()

function compareCards(){
  const playerstats=playerCard[playerid].stats
  const enemystats=enemyCard[enemyid].stats



  var playerturns=0
  var enemyturns=0
  if (( playerstats[1].value-enemystats[0].value)>0){
   playerturns=Math.ceil( enemystats[2].value/(playerstats[3].value/enemystats[3].value*( playerstats[1].value-enemystats[0].value)))
}else{
   playerturns=Math.ceil( enemystats[2].value/(playerstats[3].value))
}
if ((enemystats[0].value-playerstats[1].value)>0){
   enemyturns=Math.ceil( playerstats[2].value/(enemystats[3].value/playerstats[3].value*(enemystats[1].value-playerstats[0].value)))
}else{
   enemyturns=Math.ceil( playerstats[2].value/(enemystats[3].value))
}




  if (playerturns>enemyturns){
    SetResult(enemyCard[enemyid].title+ " won in "+enemyturns+" turns!")
     console.log(enemyCard[enemyid].title+ " won in "+enemyturns+" turns!");
    

  }else if(playerturns<enemyturns){
    SetResult(playerCard[playerid].title+ " won in "+playerturns+" turns!");
 console.log(playerCard[playerid].title+ " won in "+playerturns+" turns!");


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


}



return(
<div>
  
  <h1 className="game">Pawsome Pawlers</h1>
  <div className="game">
  <Card card={playerCard[playerid]}/>
  <div className="center-area">
  <p>{result || 'Presss the button'}</p>
  <button type="button" onClick={compareCards}>Fight!</button>
  </div>
  <Card card={enemyCard[enemyid]}/>

 
  </div>
</div>
);
}