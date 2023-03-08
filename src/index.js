import React, {  useEffect,useState } from 'react';
import { render } from 'react-dom';
import './App.css'

function App() {

    return (
        <div className='Game'>

        <div style={{color:'red'}}><h1>𝕿𝖎𝖈 𝕿𝖆𝖈 𝕿𝖔𝖊 🎮</h1></div>

            <Board> </Board>

           <Decoration />
        </div>

    )
}

function Decoration(){

    return (
    <div className='text'>
  <h1>Make a Right Move 😎</h1>
  

    </div>


    )
}

function Board() {

    const [count, setcount] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [player, setplayer] = useState(1);

    useEffect(()=> {
    const combination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ]

for(let c of combination){
    if(count[c[0]] === 1 && count[c[1]] === 1 && count[c[2]] === 1){
         alert("Player 1 win")
}
    if(count[c[0]] === 2 && count[c[1]] === 2 && count[c[2]] === 2){
    alert("Player 2 win")
}

}
}, [count])


    const change = (i) => {
        const a = [...count]
        if (a[i] === 0) {
            a[i] = player;
            setcount(a)
            setplayer(player === 1 ? 2 : 1);
        } else {
            alert("Tap Only Empty Block")
        }

    }

    return (
        <div className="Board">

            <div>
                <Block mark={count[0]} number={0} change={change}> </Block>
                <Block mark={count[1]} number={1} change={change}> </Block>
                <Block mark={count[2]} number={2} change={change}> </Block>
            </div>

            <div>
                <Block mark={count[3]} number={3} change={change}> </Block>
                <Block mark={count[4]} number={4} change={change}> </Block>
                <Block mark={count[5]} number={5} change={change}> </Block>
            </div>

            <div>
                <Block mark={count[6]} number={6} change={change}> </Block>
                <Block mark={count[7]} number={7} change={change}> </Block>
                <Block mark={count[8]} number={8} change={change}> </Block>
            </div>

        </div>
    )

}


function Block({ mark, change, number }) {
    return (
        <div className={`Block count${mark}`} onClick={e => change(number)}>


        </div>
    )
}


render(<App />, document.getElementById('root'));