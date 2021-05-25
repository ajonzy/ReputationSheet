import React, { Component } from 'react';

import Rep from "./reputation/rep"
import Duty from "./duty/duty"
import Obligation from "./obligation/obligation"
import Morality from "./morality/morality"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="content-wrapper">
          <div className="name-wrapper">
            <h1>CHARACTER NAME:<span className="name-heading">____________________</span></h1>
            <h1>PLAYER NAME:<span className="name-heading">____________________</span></h1>
          </div>
          <Rep />
          <Obligation />
          <Duty />
          <Morality />
        </div>
      </div>
    );
  }
}
