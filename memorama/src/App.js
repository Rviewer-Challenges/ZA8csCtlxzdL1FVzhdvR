import React, {Component} from 'react'
import './App.css';
import Header from './components/Header';
import Tablero from './components/Tablero';

class App extends Component
{
  render ()
  {
    return (
      <div className="App">
        <Header />
        <Tablero />

      </div>
    );
  }
}


export default App