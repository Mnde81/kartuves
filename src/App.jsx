
import image1 from './img/image1.png';
import image2 from './img/image2.png';
import image3 from './img/image3.png';
import image4 from './img/image4.png';
import image5 from './img/image5.png';
import image6 from './img/image6.png';
import image7 from './img/image7.png';


function App() { 

  return (
    <>
    <main>
      <div className="message">You win!</div>
      <div className="results">
        <div className="wins">Wins: 0</div>
        <div className="losses">Losses: 0</div>
      </div>
      <img className='image' src={image7} alt="image1" />
      <div className="word">
        <div className="letter">S</div>
        <div className="letter">U</div>
        <div className="letter">N</div>
        <div className="letter">S</div>
        <div className="letter">H</div>
        <div className="letter">I</div>
        <div className="letter">N</div>
        <div className="letter">E</div>        
      </div>    
      <div className="keyboard">
        <div className="key">A</div>
        <div className="key">B</div>
        <div className="key">C</div>
        <div className="key">D</div>
        <div className="key">E</div>
        <div className="key">F</div>
        <div className="key">G</div>
      </div>
      <div className="keyboard">
        <div className="key">H</div>
        <div className="key">I</div>
        <div className="key">J</div>
        <div className="key">K</div>
        <div className="key">L</div>
        <div className="key">M</div>
        <div className="key">N</div>
      </div>
      <div className="keyboard">
        <div className="key">O</div>
        <div className="key">P</div>
        <div className="key">Q</div>
        <div className="key">R</div>
        <div className="key">S</div>
        <div className="key">T</div>
        <div className="key">U</div>
      </div>
      <div className="keyboard">
        <div className="key">V</div>
        <div className="key">W</div>
        <div className="key">X</div>
        <div className="key">Y</div>
        <div className="key">Z</div>       
      </div>
      </main>
      
    
     
    </>
  )
}

export default App
