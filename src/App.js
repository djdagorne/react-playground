import React, { Component } from 'react';
import './App.css';
// import TheDate from './state/TheDate.js';
// import Counter from './state/Counter/Counter.js';
//import Tabs from './state/Tabs';
import Accordion from './state-drills/Accordion.js'

// const tabsProp = [
//   { name: 'First tab',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
//   { name: 'Second tab',
//     content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
//   { name: 'Third tab',
//     content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
// ];



class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion />
        {/* <Tabs tabs={tabsProp}/> */}
        {/* //<TheDate  /> */}
        {/* <RouletteGun bulletInChamber={8} /> */}
        {/* <Counter count={123} step={420}/> */}
      </div>
    );
  }
}

export default App;