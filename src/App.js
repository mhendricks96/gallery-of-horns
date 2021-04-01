import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'
import ChooseHorns from './ChooseHorns.js';
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
      hornsSelected: "all"
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


  showHorns = (event) => {
    event.preventDefault();
    console.log('something was clicked');
    
    this.setState({hornsSelected: event.target.value});

    let beastsByHorns =this.state.data.filter((beast) => {
      if (event.target.value === "all") {
        return beast;
      } else {
        return beast.horns === +event.target.value;
      }
    });
    this.setState({beastsByHorns});
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <Header />
        <ChooseHorns 
        showHorns={this.showHorns}
        />
        <Main
          beasts={data}
          handleClick={this.showBeastInModal}

        />
        <SelectedBeast
          show={this.state.show}
          hideBeast={this.hideBeastInModal}
          beast={this.state.beast}
          showHorns={this.showHorns}
        />

        <Footer />
      </div>
    )
  }
}


export default App;
