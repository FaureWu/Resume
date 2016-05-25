require('styles/Career.css');

import React from 'react';
import Tool from './Tool';

class Career extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="career">
        <div className="career-container">
          <p className="career-title">实践是检验真理的唯一标准</p>
          <table className="career-group">
            <tbody>
              <tr>
                <td className="career-slogan">
                  <label>2014-07</label>
                  <label>西加云杉</label>
                  <span className="logo logo-skspruce"></span>
                </td>
                <td className="career-content">
                  web前端工程师
                </td>
              </tr>
              <tr>
                <td className="career-slogan">
                  <label>2016-06</label>
                  <label>索贝</label>
                  <span className="logo logo-sobey"></span>
                </td>
                <td className="career-content">
                  web前端工程师
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Career;
