import React from 'react';
import HornedBeasts from './HornedBeasts';

import data from './data.json';

class Main extends React.Component {
  render() {
    let beastArray =[];
    data.forEach((animal) => {
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
      <div>
        {beastArray}
      </div>
    );

  }
}

export default Main