import React, { Component } from 'react';

class Cell extends Component {
  render() {
    let rando = Math.random();
    return (
      <td className="Cell">
        <img alt="" src={this.props.imagePath + '?cacheBuser=' + rando}/>
      </td>
    );
  }
}

export default Cell;
