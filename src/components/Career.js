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
    let self = this;
    let items = this.props.data;
    items.sort(function(a, b) {
      return Date.parse(b.time)-Date.parse(a.time);
    });
    return (
      <div className="career">
        <div className="career-container">
          <p className="career-title">实践是检验真理的唯一标准</p>
          <table className="career-group">
            <tbody>
            {
              items.map(function(item, index) {
                return (
                  <tr key={index}>
                    <td className="career-slogan">
                      <label>{Tool.formateDate(item.time)}</label>
                      <label>{item.name}</label>
                      <span className={'logo '+'logo-'+item.logo}></span>
                    </td>
                    <td className="career-content">
                      <label>{item.job}</label>
                      <span>工作职责：{item.duty}</span>
                      <span>工作业绩：{item.achievement}</span>
                    </td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Career;
