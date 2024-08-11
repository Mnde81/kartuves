
import { useState } from "react";
import { data } from './data/data';
import image1 from './img/image1.png';
import image2 from './img/image2.png';
import image3 from './img/image3.png';
import image4 from './img/image4.png';
import image5 from './img/image5.png';
import image6 from './img/image6.png';
import image7 from './img/image7.png';








function App() { 

const [greenCount, setGreenCount] = useState(0);

const [countS, setCountS] = useState();

function updateCountS() {
  setGreenCount(greenCount + 1);
  setCountS('s');
}

const [countU, setCountU] = useState();

function updateCountU() {
  setCountU('u');
}

const [countN, setCountN] = useState();

function updateCountN() {
  setCountN('n');
}

const [countH, setCountH] = useState();

function updateCountH() {
  setCountH('h');
}

const [countI, setCountI] = useState();

function updateCountI() {
  setCountI('i');
}

const [countE, setCountE] = useState();

function updateCountE() {
  setCountE('e');
}





const [redCount, setRedCount] = useState(6);

const [countR, setCountR] = useState();

function updateCountR() {  
  setRedCount(redCount - 1);
  setCountR('r');

  
}

const [countA, setCountA] = useState();

function updateCountA() {
  setRedCount(redCount - 1);
  setCountA('r');
}

const [countB, setCountB] = useState();

function updateCountB() {
  setCountB('r');
}

const [countC, setCountC] = useState();

function updateCountC() {
  setCountC('r');
}

const [countD, setCountD] = useState();

function updateCountD() {
  setCountD('r');
}

const [countF, setCountF] = useState();

function updateCountF() {
  setCountF('r');
}

const [countG, setCountG] = useState();

function updateCountG() {
  setCountG('r');
}

const [countJ, setCountJ] = useState();

function updateCountJ() {
  setCountJ('r');
}

const [countK, setCountK] = useState();

function updateCountK() {
  setCountK('r');
}

const [countL, setCountL] = useState();

function updateCountL() {
  setCountL('r');
}

const [countM, setCountM] = useState();

function updateCountM() {
  setCountM('r');
}

const [countO, setCountO] = useState();

function updateCountO() {
  setCountO('r');
}

const [countP, setCountP] = useState();

function updateCountP() {
  setCountP('r');
}

const [countQ, setCountQ] = useState();

function updateCountQ() {
  setCountQ('r');
}

const [countT, setCountT] = useState();

function updateCountT() {
  setCountT('r');
}

const [countV, setCountV] = useState();

function updateCountV() {
  setCountV('r');
}

const [countW, setCountW] = useState();

function updateCountW() {
  setCountW('r');
}

const [countX, setCountX] = useState();

function updateCountX() {
  setCountX('r');
}

const [countY, setCountY] = useState();

function updateCountY() {
  setCountY('r');
}

const [countZ, setCountZ] = useState();

function updateCountZ() {
  setCountZ('r');
}



let imageClass = 1;
let message = 'Game in progress';

if (redCount === 6) {
  imageClass = image1;
}

if (redCount === 5) {
  imageClass = image2;
}

if (redCount === 4) {
  imageClass = image3;
}

if (redCount === 3) {
  imageClass = image4;
}

if (redCount === 2) {
  imageClass = image5;
}

if (redCount === 1) {
  imageClass = image6;
}

if (redCount === 0) {
  imageClass = image7;
  message = 'You lost!'
}

if (greenCount === 8) {
  message = 'You won!'
}


  return (
    <>
    <main>
      <div className="message">{message}</div>
      <div className="results">
        <div className="wins">Wins: {greenCount}</div>
        <div className="losses">Losses: 0</div>
        <div className="lives">Lives: {redCount}</div>
      </div>
      <img className='image' src={imageClass} alt="image1" />      
        
      <div className="word">
        <div className="letter">{countS}</div>
        <div className="letter">{countU}</div>
        <div className="letter">{countN}</div>
        <div className="letter">{countS}</div>
        <div className="letter">{countH}</div>
        <div className="letter">{countI}</div>
        <div className="letter">{countN}</div>
        <div className="letter">{countE}</div>
      </div>  
       
      <div className="keyboard">
        <div onClick={updateCountA} className={countA}>A</div>
        <div onClick={updateCountB} className={countB}>B</div>
        <div onClick={updateCountC} className={countC}>C</div>
        <div onClick={updateCountD} className={countD}>D</div>
        <div onClick={updateCountE} className={countE}>E</div>
        <div onClick={updateCountF} className={countF}>F</div>
        <div onClick={updateCountG} className={countG}>G</div>
      </div>
      <div className="keyboard">
        <div onClick={updateCountH} className={countH}>H</div>
        <div onClick={updateCountI} className={countI}>I</div>
        <div onClick={updateCountJ} className={countJ}>J</div>
        <div onClick={updateCountK} className={countK}>K</div>
        <div onClick={updateCountL} className={countL}>L</div>
        <div onClick={updateCountM} className={countM}>M</div>
        <div onClick={updateCountN} className={countN}>N</div>
      </div>
      <div className="keyboard">
        <div onClick={updateCountO} className={countO}>O</div>
        <div onClick={updateCountP} className={countP}>P</div>
        <div onClick={updateCountQ} className={countQ}>Q</div>
        <div onClick={updateCountR} className={countR}>R</div>
        <div onClick={updateCountS} className={countS}>S</div>
        <div onClick={updateCountT} className={countT}>T</div>
        <div onClick={updateCountU} className={countU}>U</div>
      </div>
      <div className="keyboard">
        <div onClick={updateCountV} className={countV}>V</div>
        <div onClick={updateCountW} className={countW}>W</div>
        <div onClick={updateCountX} className={countX}>X</div>
        <div onClick={updateCountY} className={countY}>Y</div>
        <div onClick={updateCountZ} className={countZ}>Z</div>       
      </div>
      </main>
      
    
     
    </>
  )
}

export default App
