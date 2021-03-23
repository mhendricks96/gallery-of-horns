import React from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component {
  render() {
    return (
      <div>
        <HornedBeasts 
        img_url = "https://modernfarmer.com/wp-content/uploads/2014/08/nubianibex.jpg"
        title = "majestic beast"
        description = "large goat with huge horns soaks up the sun"
        />
        <HornedBeasts 
        img_url = "https://gray-wkyt-prod.cdn.arcpublishing.com/resizer/1k7HHdkj1FLMk4LcUMYE-6b4gXk=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/JGFUHWA4NNPNPBB47ANOMUE5A4.jpg"
        title = "Dont mess this Texas"
        description = "Texas Longhorn"
        
        />
      </div>
    );

  }
}

export default Main