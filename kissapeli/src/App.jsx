
import Card from "./components/card";
import './App.css';

const playerCard=[
  {
    type:"card-player",
    image:"http://placekitten.com/120/100?image=0",
    stats:[
      {name:'Cuteness', value:9},
      {name:'Power', value:6},
    ],
    title:'Cat-astrophe',
}

]

const enemyCard=[
  {
    type:"card-enemy",
    image:"https://placekitten.com/120/102?image=1",
    stats:[
      {name:'Cuteness', value:9},
      {name:'Power', value:6},
    ],
    title:'Mr Pawsome',
}

]


export default function app(){
return(
<div>
  <h1>Hello World!</h1>
  <Card card={playerCard[0]}/>
  <Card card={enemyCard[0]}/>
</div>
);
}