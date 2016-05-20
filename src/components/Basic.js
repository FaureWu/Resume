require('styles/Basic.css');

import React from 'react';
import Tool from './Tool';

class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let self = this;
    return (
      <div className="basic">


        <h1>一度之思</h1>
        <p>不欲记录点滴，怎能堆积成山；不行思量之事，怎知技术内幕</p>
        <div>
          <span className="basic-icon"><a href="https://github.com/FaureWu"></a></span>
        </div>
      </div>
    );
  }
}

export default Basic;
