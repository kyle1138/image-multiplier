import React, { Component } from 'react';
import './App.css';

import Input from './components/Input';
import Grid from './components/Grid';

class App extends Component {
  constructor(){
    super();
    this.state = {
       imagePath : 'http://www.dogbreedplus.com/dog_breeds/images/papastzu.jpg'
    }
  }

  // getInitialState: function() {
  //   return {
  //     imagePath : 'http://www.dogbreedplus.com/dog_breeds/images/papastzu.jpg'
  //   };
  // },
  // componentWillMount(){
  //   this.setState({
  //     imagePath : 'http://www.dogbreedplus.com/dog_breeds/images/papastzu.jpg'
  //   });
  // };

  setImage(newImage){
    console.log(newImage);
    this.setState(
      {
        imagePath:newImage
      }
    )
  }

  render() {
    return (
      <div className="App">
        <Input setImage={this.setImage.bind(this)}/>
        <Grid imagePath={this.state.imagePath}/>
      </div>
    );
  }
}

export default App;
