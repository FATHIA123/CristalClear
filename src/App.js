import React, { Component } from 'react';
import './App.css';
import Document from './Components/Document/Document'
import Shall from './Components/Field/Shall';
import Will from './Components/Field/Will';
import Header from './Components/Field/Header'

class App extends Component {
  render() {
    return (
      <div>
        <header class="custom-padding">

            <nav>
              <div class="logo">Cristal Clear</div>

                  <ul class="menu-area">
                      <li><a href="#">Home</a></li>
                      <li><a href="https://i.pinimg.com/736x/3c/f4/fa/3cf4faeb2078f4f4fbb9265444bde2e0.jpg">About</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Contact</a></li>
                  </ul>   
            </nav>
      </header>

      <main>
        
      <Document />
      <Shall /> 
      <Will />
      <Header />
      </main>

      </div>
    );
  }
}

export default App;
