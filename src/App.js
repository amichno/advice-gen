import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component{

  constructor(){
    super()
   
  }

  changeAdvice(id, advice)
  {
    const paragraf = document.getElementsByClassName("adv");
    paragraf[0].textContent = id;

    paragraf[1].textContent = advice;
  }


  getAdvice(){
    const url_api = "https://api.adviceslip.com/advice";
    fetch(url_api).then(
                        response=>response.json()).then(
                                                        jsonRes => {
                                                        const data =  JSON.stringify(jsonRes);
                                                        const dataJs = JSON.parse(data);
                                                        console.log(dataJs.slip.advice);

                                                        this.changeAdvice(dataJs.slip.id, dataJs.slip.advice);

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
                    <button className ="button-dice" onClick={this.getAdvice} ></button>        
              </div>
          </div>
    );
  }
}

export default App;
