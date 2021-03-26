import React from 'react';
import HornedBeasts from './HornedBeasts';
import './Main.css'

import data from './data.json';

class Main extends React.Component {
  render() {
    let beastArray =[];
    data.forEach( animal => {
      beastArray.push(
        <HornedBeasts
          name = {animal.keyword}
          title = {animal.title}
          image_url = {animal.image_url}
          description = {animal.description}
        /> 
      );
    });


    return (
      <main>
        {beastArray}
      </main>
    );

  }
}

export default Main