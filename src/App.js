import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  render(){
  return (
    <div className="container">
            <div className="Advice">
                <div className="api">
                    <p className="adv">Advice</p>
                    <p>Text</p>
                </div>
                
            </div>
            <div className="dice">  
                  <button className ="button-dice"  ></button>        
            </div>
        </div>
  );
  }
}

export default App;
