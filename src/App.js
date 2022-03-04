import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component{

  constructor(){
    super()
   
  }

  changeAdvice(){
    const paragraf = document.getElementsByClassName("adv");
    console.log(paragraf[0].textContent);

    const url_api = "https://api.adviceslip.com/advice";
    fetch(url_api).then(
                        response=>response.json()).then(
                          jsonRes => {
                            console.log(jsonRes.data.id)
                          }
                          );
    
  }


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
                    <button className ="button-dice" onClick={this.changeAdvice} ></button>        
              </div>
          </div>
    );
  }
}

export default App;
