import './App.css';
import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Page!!</h1>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
