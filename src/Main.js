import React from 'react';
import HornedBeasts from './HornedBeasts';
import './Main.css'

//import data from './data.json';

class Main extends React.Component {
  render() {
    let beastArray = this.props.beasts.map((beast, index) => (
      <HornedBeasts
        name={beast.keyword}
        title={beast.title}
        image_url={beast.image_url}
        description={beast.description}
        key={index}
      />
    ))



    return (
      <main>
        {beastArray}
      </main>
    );
  }
}


export default Main