

export function WordGuess(params) {
    return (  
        
        <section className="word">
             {params.data.map((item, index) => (
                <div className="word" key={index}>
                    <div className="letter">{item.first}</div>
                    <div className="letter">{item.second}</div>
                    <div className="letter">{item.third}</div>
                    <div className="letter">{item.fourth}</div>
                    <div className="letter">{item.fifth}</div>
                    <div className="letter">{item.sixth}</div>
                    <div className="letter">{item.seventh}</div>
                    <div className="letter">{item.eigth}</div>
                </div>  
      ))}
        </section>
    );
  
  }