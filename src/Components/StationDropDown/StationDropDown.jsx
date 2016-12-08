import React, { Component } from 'react';

export default class StationDropDown extends Component {

  makeTags(array) {
    return array.map((station, index) => {
      return (
        <option value ={station} id={index}>
          {station}
        </option>
      )
    });
  }

  render(){
    return (
      <select className="list-container">
        {this.makeTags(this.props.stations)}
      </select>
    );
  }
}
