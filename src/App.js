import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'
//import Choose from './Choose.js';
import SelectedBeast from './SelectedBeast';

import data from './data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: data,
      beastsByHorns: data,
      beast: {},
      //hornsSelected: "all"
    }

  }

  showBeastInModal = (clickedBeast) => {
    this.setState({
      show: true,
      beast: clickedBeast,

    })
    console.log(clickedBeast);
  }

  hideBeastInModal = () => {
    this.setState({
      show: false,
    })
  }
  
  filteredHorns = (beastData) => {
    this.setState({beastData});
  }
  
  
  
  showHorns = (event) => {
    event.preventDefault();
    let newData = data;
    
    if (event.target.value !== "all") {
        newData = data.filter(animal => animal.horns.toString() === event.target.value);
    }
    this.setState({
      data: newData
    });
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <Header />
        <Main
          beasts={this.state.data}
          handleClick={this.showBeastInModal}
          showHorns={this.showHorns}
        />
        <SelectedBeast
          show={this.state.show}
          hideBeast={this.hideBeastInModal}
          beast={this.state.beast}
        />

        <Footer />
      </div>
    )
  }
}


export default App;
