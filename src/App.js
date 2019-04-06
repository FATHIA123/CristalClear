import React, { Component } from 'react';
import './App.css';
import Document from './Components/Document/Document'
import Shall from './Components/Field/Shall';
import Will from './Components/Field/Will';
import Header from './Components/Field/Header'
import About from './Components/About/About';
import Services from './Components/Services/Services'
import { Route, Link, Switch } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div>
        <header class="custom-padding">

            <nav>
              <div class="logo">Cristal Clear</div>

                  <ul class="menu-area">
                      <li><a href="/">Home</a></li>
                      <li><a href="/About">About</a></li>
                     <li><a href="/Services">Services</a></li>
                  </ul>   
            </nav>
      </header>

      <main>

                <div className="flex">
                  <div> <Document /> </div>
                  <div > <Header /></div>
                </div>

          <div className="parallex"></div>
           

                <div className="flex1">
                    <div className="will"> <Will /> </div>
                    <div className="Shall"> <Shall /> </div>
                </div> 


    {/* <Route path="/" /> */}
    {/* <Switch> */}
            {/* <Route  path='/About' render={()=>{(props) => <About {...props}/> }} /> */}
            {/* <Route exact path="/Services" component={Services} /> */}

            {/* </Switch> */}
      </main>
<footer>

<div className="copyright"></div>

</footer>


      </div>
    );
  }
}

export default App;
