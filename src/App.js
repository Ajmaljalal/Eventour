import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import EventInfo from './components/venueInfo';
import Highlights from './components/highlights';
import Pricing from './components/highlights/pricing';


class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '1500px'}}>
        <Header/>
        <Featured/>
        <EventInfo/>
        <Highlights/>
        <Pricing/>
      </div>
    );
  }
}

export default App;
