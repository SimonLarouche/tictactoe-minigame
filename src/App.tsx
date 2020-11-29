import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

// TODO: Color winning forms in red.

function App() {
  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState({state: false, form: ''})
  const [div1, setDiv1] = useState('');
  const [div2, setDiv2] = useState('');
  const [div3, setDiv3] = useState('');
  const [div4, setDiv4] = useState('');
  const [div5, setDiv5] = useState('');
  const [div6, setDiv6] = useState('');
  const [div7, setDiv7] = useState('');
  const [div8, setDiv8] = useState('');
  const [div9, setDiv9] = useState('');  

  const setForm = () => {
    let nextForm = '';      
    if(count % 2) {     
      nextForm = 'X';
    } else {
      nextForm = 'O';
    }    

    setCount(count + 1);
    return  nextForm;
  }

  const isWinner =  useCallback(() => {
    const row1 = div1 !== '' && div2 !== '' && div3 !== '' && div1 === div2 && div2 === div3;
    const row2 = div4 !== '' && div5 !== '' && div6 !== '' && div4 === div5 && div5 === div6;
    const row3 = div7 !== '' && div8 !== '' && div9 !== '' &&div7 === div8 && div8 === div9;

    const col1 = div1 !== '' && div4 !== '' && div7 !== '' && div1 === div4 && div4 === div7;
    const col2 = div2 !== '' && div5 !== '' && div8 !== '' && div2 === div5 && div5 === div8;
    const col3 = div3 !== '' && div6 !== '' && div9 !== '' && div3 === div6 && div6 === div9;

    const leftDiagonal = div1 !== '' && div5 !== '' && div9 !== '' &&div1 === div5 && div5 === div9;
    const rightDiagonal = div3 !== '' && div5 !== '' && div7 !== '' && div3 === div5 && div5 === div7;

    if(row1 || row2 || row3 || col1 || col2 || col3 || leftDiagonal || rightDiagonal) {
      console.info('WINNER');
      setWinner({state: true, form: count % 2 ? 'O' : 'X'})
      return true;
    } else if(count === 9) {
      setWinner({state: true, form: 'NO ONE'})
    }  else {
      return false;
    }
  }, [div1, div2, div3, div4, div5, div6, div7, div8, div9, count]);

  useEffect(() => {
    isWinner();      
  }, [isWinner, div1, div2, div3, div4, div5, div6,div7, div8, div9]); 

  return (
    <div className="App">
        <span>{winner.state && winner.form + ' IS THE WINNER'}</span>
        <div className={winner.state ? 'tictactoe disabled' : 'tictactoe'}>
          <div className='top-layer'>
            <div id='1' 
              onClick={() => div1 === '' && setDiv1(setForm())}>
              {div1}
            </div>
            <div id='2' 
              onClick={() => div2 === '' && setDiv2(setForm())}>
              {div2}
            </div>
            <div id='3' 
              onClick={() => div3 === '' && setDiv3(setForm())}>
              {div3}
            </div>
          </div>
          <div className='mid-layer'>
            <div id='4' 
              onClick={() => div4 === '' && setDiv4(setForm())}>
              {div4}
            </div>
            <div id='5' 
              onClick={() => div5 === '' && setDiv5(setForm())}>
              {div5}
            </div>
            <div id='6' 
              onClick={() => div6 === '' && setDiv6(setForm())}>
              {div6}
            </div>
          </div>
          <div className='bot-layer'>
            <div id='7' 
              onClick={() => div7 === '' && setDiv7(setForm())}>
              {div7}
            </div>
            <div id='8' 
              onClick={() => div8 === '' && setDiv8(setForm())}>
              {div8}
            </div>
            <div id='9' 
              onClick={() => div9 === '' && setDiv9(setForm())}>
              {div9}
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
