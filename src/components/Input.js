import React, { Component } from 'react';

class Input extends Component {


  newImage(e){
    this.props.setImage(this.refs.url.value);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.newImage.bind(this)}>
          <label>
            Image Path:
          </label>
          <input type="text" ref="url"/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Input;
