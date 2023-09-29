
import Card from "./components/card";
import './App.css';

const playerCard=[
  {
    type:"card-player",
    image:"http://placekitten.com/120/100?image=0",
    stats:[
      {name:'Cuteness', value: 3+Math.round(5*Math.random())},
      {name:'Power', value:5+Math.round(3*Math.random())},
      {name:'Vitality', value:8+Math.round(8*Math.random())},
      {name:'Speed', value:3+Math.round(3*Math.random())},
    ],
    title:'Cat-astrophe',
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
}

]


export default function app(){

function compareCards(){
  const playerstats=playerCard[0].stats
  const enemystats=enemyCard[0].stats

  var playerturns=0
  var enemyturns=0
  if (enemystats[3].value*( playerstats[1].value-enemystats[0].value)>0){
   playerturns=Math.ceil( enemystats[2].value/(playerstats[3].value/enemystats[3].value*( playerstats[1].value-enemystats[0].value)))
}else{
   playerturns=Math.ceil( enemystats[2].value/(playerstats[3].value))
}
if (playerstats[3].value*(enemystats[1].value-playerstats[0].value)>0){
   enemyturns=Math.ceil( playerstats[2].value/(enemystats[3].value/playerstats[3].value*(enemystats[1].value-playerstats[0].value)))
}else{
   enemyturns=Math.ceil( playerstats[2].value/(enemystats[3].value))
}




  if (playerturns>enemyturns){
    console.log(enemyCard[0].title+ " won in "+enemyturns+" turns!");

  }else if(playerturns<enemyturns){
    console.log(playerCard[0].title+ " won in "+playerturns+" turns!");


  }else{
    console.log("Draw! The fight lasted for "+playerturns+" turns!")
  }
  
 

}



return(
<div>
  <h1 className="game">Pawsome Pawlers</h1>
  <div className="game">
  <Card card={playerCard[0]}/>
  <button type="button" onClick={compareCards}>Fight!</button>
  <Card card={enemyCard[0]}/>

 
  </div>
</div>
);
}