import logo from './logo.svg';
import './App.scss';
import React from 'react';

class App extends React.Component{

  constructor(){
    super()
  }

  getAdvice(){
    const url_api = "https://api.adviceslip.com/advice";
   // let control = new AbortController();
    //let sign = control.signal;
    fetch(url_api).then(
                        response=>response.json()).then(
                                                        jsonRes => {
                                                        const data =  JSON.stringify(jsonRes);
                                                        const dataJs = JSON.parse(data);
                                                        //console.log(dataJs.slip.advice);
                                                        const paragraf = document.getElementsByClassName("number");
                                                        paragraf[0].textContent = "advice #"+dataJs.slip.id;

                                                        const paragraf_adv = document.getElementsByClassName("adv");
                                                        paragraf_adv[0].textContent = '"'+ dataJs.slip.advice+'"';
                                                        

                            }
                          );
    //console.log(sign);
   // console.log(control.signal);
    //control.abort();
  }


  render(){
    return (
      <div className="container" >
              <div className="Advice">
                  <div className="api">
                      <p className="number">advice </p>
                      <p className="adv">Text</p>
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
