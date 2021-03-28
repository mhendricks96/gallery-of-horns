import './App.css';
import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast';

import data from './data.json'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      beast: {}
    }
  }

  showBeastInModal = (clickedBeast) => {
    this.setState = {
      show: true,
      beast: clickedBeast
    }
  }

  hideBeastInModal = (clickedBeast) => {
    this.setState = {
      show: false
    }
  }

  render() {
    return (
      <div>
        <Header />
        <SelectedBeast 
        show= {this.state.show}
        hideBeast={this.hideBeastInModal}
        beast={this.state.beast}
        />
        <Main
          beasts={data}
          handleClick={this.showBeastInModal}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
