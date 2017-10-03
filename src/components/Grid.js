import React, { Component } from 'react';
import Cell from './Cell';

class Grid extends Component {

  constructer(){
    this.state = {
      love : 'true'
    };
  }

  buildCells(){
    let imagePath = this.props.imagePath;
    let table = [];
    for(let i = 0; i < 1; i ++){
      let row =
      <tr key={`row${i}`}>
        <Cell key={`${i}-1`} imagePath={imagePath}/>
        <Cell key={`${i}-2`} imagePath={imagePath}/>
        <Cell key={`${i}-3`} imagePath={imagePath}/>
        <Cell key={`${i}-4`} imagePath={imagePath}/>
        <Cell key={`${i}-5`} imagePath={imagePath}/>
      </tr>;
      table.push(row)
    }
    return table;
  }

  render() {
    return (
      <div className="Grid">
        <table>
          <tbody>
            {this.buildCells()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Grid;
